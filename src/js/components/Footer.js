var React = require('react');

var Footer = React.createClass({
  propTypes: {
    footerText: React.PropTypes.string.isRequired
  },
  render: function() {
    var footerText = 'da footer iniiit';
    return (
      <div className='footer-container' onClick={this.props.clearFridge}>
        <h4 className='footer-text'>{this.props.footerText}</h4>
      </div>
    );
  }
});

module.exports = Footer;
