'use strict';

var BoxStyle = {'height' : '100px','width' : '100px'};


var React = require('react');

var Box = React.createClass({
  getInitialState : function() {
  return {value : this.props.initialValue};
  },
componentWillMount: function(){
this.Timer = setInterval(function(){
this.setState({
'value' : .state.value === 'X' ? 'O' :'X'
})
},300);
},

  'render': function onRender () {
    return (
      <button style={BoxStyle} > {this.state.value} </button>);
  }
});

React.render(<Box  initialValue = {'X' }/>, document.body);
