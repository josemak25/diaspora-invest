import React from 'react';
import { Slider, Rail, Handles, Tracks } from 'react-compound-slider';
import { Handle, Track, TooltipRail } from './RangeComponents';

const sliderStyle = {
  position: 'relative',
  width: '100%'
};

const defaultValues = [50000000, 500000000];

class PriceRange extends React.Component {
  state = {
    domain: [10000000, 1000000000],
    values: defaultValues.slice(),
    update: defaultValues.slice(),
    reversed: false
  };

  onUpdate = update => {
    this.setState({ update });
  };

  onChange = values => {
    this.setState({ values });
  };

  setDomain = domain => {
    this.setState({ domain });
  };

  toggleReverse = () => {
    this.setState(prev => ({ reversed: !prev.reversed }));
  };

  render() {
    const {
      state: { domain, values, reversed }
    } = this;

    return (
      <div style={{ height: 10, width: '100%' }}>
        <Slider
          mode={3}
          step={20}
          domain={domain}
          reversed={reversed}
          rootStyle={sliderStyle}
          onUpdate={this.onUpdate}
          onChange={this.onChange}
          values={values}
        >
          <Rail>{railProps => <TooltipRail {...railProps} />}</Rail>
          <Handles>
            {({ handles, activeHandleID, getHandleProps }) => (
              <div className="slider-handles">
                {handles.map(handle => (
                  <Handle
                    key={handle.id}
                    handle={handle}
                    domain={domain}
                    isActive={handle.id === activeHandleID}
                    getHandleProps={getHandleProps}
                  />
                ))}
              </div>
            )}
          </Handles>
          <Tracks left={false} right={false}>
            {({ tracks, getTrackProps }) => (
              <div className="slider-tracks">
                {tracks.map(({ id, source, target }) => (
                  <Track key={id} source={source} target={target} getTrackProps={getTrackProps} />
                ))}
              </div>
            )}
          </Tracks>
        </Slider>
      </div>
    );
  }
}

export default PriceRange;
