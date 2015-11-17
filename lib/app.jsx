'use strict';
var BoxStyle = {'height' : '100px','width' : '100px'};
var React = require('react');

var Box = React.createClass({
  /**
   * Render a HTML button
   * @return {ReactElement}
   */
  'render': function onRender () {
    return (

      <button style={BoxStyle}> {this.props.value} </button>
    );
  }
});

React.render(<Box value='Yop' />, document.body);
