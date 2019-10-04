import React, { useState } from 'react';
import styled from 'styled-components';
import { Input } from './Input';

export default function Search({
  name,
  value,
  placeholder,
  handleSearchChange,
  handleSubmitSearch
}) {
  const [searchToggle, setSearchToggle] = useState(false);

  const handleSearchToggle = () => {
    setSearchToggle(!searchToggle);
  };

  return (
    <Container searchToggle={searchToggle}>
      <div className="search-form">
        <form onSubmit={handleSubmitSearch}>
          <span className="search-field">
            <div className="search-box">
              <Input
                type="text"
                placeholder={placeholder}
                value={value}
                name={name}
                onChange={handleSearchChange}
              />
            </div>
            <div className="main-header-action-icons">
              <img
                src={require('../assets/images/icons/notification.svg')}
                alt="notification-icon"
              ></img>
              <img
                src={require('../assets/images/icons/search.svg')}
                alt="search-icon"
                onClick={handleSearchToggle}
              ></img>
            </div>
          </span>
        </form>
      </div>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: space-between;

  .search-form {
    display: flex;
    align-items: center;

    form {
      .search-field {
        display: inline-flex;
        align-items: center;

        .search-box {
          overflow: hidden;

          input {
            width: 400px;
            height: 40px;
            border-radius: 50px;
            border: 1px #2c3e51 solid;
            padding: 0 0.5rem;
            font-weight: 500;
            font-size: 0.7rem;
            position: relative;
            right: ${({ searchToggle }) => (searchToggle ? '0' : '-400px')};
            &:focus {
              outline: none;
            }
            transition: 0.5s;
          }
        }
      }
    }
  }
`;
