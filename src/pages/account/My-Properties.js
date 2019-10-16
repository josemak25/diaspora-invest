import React, { useEffect } from 'react';

import { useSelector, connect } from 'react-redux';
import Property from '../../components/Property';
import { getSavedProperties, getAgencyProperties } from "../../redux/actions/property.action";


const MyProperties = props => {
  const { user_type } = useSelector(({ auth }) => auth.user);
  const { agencyProperties, loading, error } = useSelector(({ agencyProperties }) => agencyProperties);
  const { bookmarkedProperties } = useSelector(({ bookmarkedProperties}) => bookmarkedProperties);

  const properties = (user_type === 'seller') ? agencyProperties : bookmarkedProperties;

  const PropertyCards = properties.map((property, index) => (
    <Property
      property={property}
      cardSize="property-item col-md-6 col-12 mb-40"
      key={index}
    />
  ));

  useEffect(() => {
    if (user_type === 'seller'){
      props.getAgencyProperties();
    } else {
      props.getSavedProperties()
    }
  }, [user_type]);

  return (
    <>
      {error && (
        <div className="col-12 mb-15 mt-0">
          <div className="alert alert-success pb-0 pt-0" role="alert">
            {error}
          </div>
        </div>
      )}
      <div id="properties-tab" className="tab-pane">
        <div className="row">{PropertyCards}</div>
      </div>
    </>
  );
};

const mapActionsToProps = {
  getSavedProperties,
  getAgencyProperties
};

export default connect(null, mapActionsToProps)(MyProperties);


MyProperties.defaultProps = {
  properties: [
    ...new Array(4).fill({
      name: "Friuli-Venezia Giulia",
      location: "568 E 1st Ave, Miami",
      price: "500000000",
      figure: "M",
      decision: "For Rent",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLWHeMzd1jGkh2ALFfZOVvLg6s5qemL6vtsUjRMhsLb_aXeLP0"
      ],
      id: "466928bc-d210-46ea-93b5-2269e9682dca"
    })
  ]
};
