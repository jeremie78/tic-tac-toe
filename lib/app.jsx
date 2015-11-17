'use strict';

var BoxStyle = {'height' : '100px','width' : '100px'};
var current = this;

var React = require('react');

var Box = React.createClass({
  getInitialState : function() {
  return {value : this.props.initialValue};
  },
  componentWillMount: function(){
  +    var _this = this;
  +    this.timer = setInterval(function(){
  +      var oldValue = _this.state.value;
  +      var newValue = oldValue === 'X' ? 'O': 'X';
  +      _this.setState({
  +        value: newValue
  +      });
  +    }, 300);
  +  },
  +  componentWillUnmount: function(){
  +    clearInterval(this.timer);
  +  },

  'render': function onRender () {
    return (
      <button style={BoxStyle} > {this.state.value} </button>);
  }
});

React.render(<Box  initialValue = {'X' }/>, document.body);
