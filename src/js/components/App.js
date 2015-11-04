var React   = require('react');

var Header  = require('./Header.js');
var List    = require('./List.js');
var Footer  = require('./Footer.js');

var App = React.createClass({
  getInitialState: function() {
    return {
      items: this.props.list
    }
  },
  clearFridge: function() {
    this.setState({
      items: []
    });
  },
  addItem: function(item) {
    this.setState({
      items: this.state.items.concat([item])
    });
  },
  render: function () {
    return(
      <div>
        <Header
          title={this.props.title}
        />
        <List
          items={this.state.items}
          newItemEvent={
            event => {
              var inputWrapperDiv = event.target.parentElement;
              var inputElem = inputWrapperDiv.getElementsByTagName('input')[0];
              return this.addItem(inputElem.value);
            }
          }
        />
        <Footer
          clearFridge={this.clearFridge}
          footerText={this.props.footerText}
        />
      </div>
    );
  }
});

module.exports = App;
