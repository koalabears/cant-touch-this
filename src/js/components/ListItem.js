var React = require('react');

var ListItem = React.createClass({
  propTypes: {
    itemText: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <div className='list-item-container'>
        <p className='list-text'> {this.props.itemText} </p>
      </div>
    );
  }
});

module.exports = ListItem;
