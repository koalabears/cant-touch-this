var React = require('react');

var ListItem = require('./ListItem.js');
var ListItemAdder = require('./ListItemAdder.js');

function createListItems(items) {
  console.log('Hey!');
  return items.map(fridgeItem => <ListItem itemText={fridgeItem} />);
}

var List = React.createClass({
  propTypes: {
    items: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    newItemEvent: React.PropTypes.func.isRequired
  },
  render: function() {
    return (
      <div className='list-container'>
        {createListItems(this.props.items)}
        <ListItemAdder
          clickHandler = {this.props.newItemEvent}
        />
      </div>
    );
  }
});

module.exports = List;
