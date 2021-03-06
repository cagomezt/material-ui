let React = require('react');
let SvgIcon = require('../../svg-icon');

let FileFolderOpen = React.createClass({

  render: function() {
    return (
      <SvgIcon {...this.props}>
        <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"/>
      </SvgIcon>
    );
  }

});

module.exports = FileFolderOpen;