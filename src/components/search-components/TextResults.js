import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ShelterItem from './ShelterItem'
import './TextResults.css';

class TextResults extends PureComponent {

  render() {
    return (
      <div className="component-text-results">
        {this.props.textData.map((textData, i) =>
              <div key={i}>
                   <ShelterItem shelter={textData} />
              </div>
          )}
      </div>
    );
  }
}
TextResults.propTypes = {
    textData: PropTypes.array,
  };
export default TextResults;
