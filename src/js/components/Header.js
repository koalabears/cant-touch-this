var React = require('react');
// var propTypes = React.propTypes;

var Header = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired
  },
  render: function() {
    var title = this.props.title.toUpperCase();
    return (
      <div className='header-container'>
        <h2>{title}</h2>
      </div>
    );
  }
});

module.exports = Header;
