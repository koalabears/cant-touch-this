var React = require('react');

var ListItemAdder = React.createClass({
  propTypes: {
    clickHandler: React.PropTypes.func.isRequired
  },
  render: function() {
    return (
      <div className='list-item-container adder'>
        Add Food:
        <input type='text' />
        <button onClick={this.props.clickHandler}>add</button>
      </div>
    );  }
});

module.exports = ListItemAdder;
