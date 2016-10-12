var Error = React.createClass({

  render: function() {
    return (
      <div id="error">{this.props.msg}</div>
    );
  }
});