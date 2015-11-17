'use strict';

var BoxStyle = {'height' : '100px','width' : '100px'};

var React = require('react');

var Box = React.createClass({
  getInitialState : function() {
  return {value : this.props.initialValue};
  },

  'render': function onRender () {
    return (
      <button style={BoxStyle} > {this.state.value} </button>);
  }
});

React.render(<Box  initialValue = {1} />, document.body);
