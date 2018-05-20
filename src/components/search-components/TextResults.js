import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


import './TextResults.css';

class TextResults extends PureComponent {

  render() {
    return (
      <div className="component-text-results">
        {this.props.textData.map((textData, i) =>
              <div key={i}>
                   <h1>{textData.name}</h1>
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
