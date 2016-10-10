var Login = React.createClass({
  getInitialState: function() {
    return {token: ''}
  },

  componentDidMount: function(event) {
    var token = document.querySelector('meta[name=csrf-token]').content;
    this.setState({token: token});
  },

  render: function() {
    return (
      <main>
        <div id="error">{this.props.error}</div>
        <img src="https://45.media.tumblr.com/3459ac10c940d6baf94c80009fa6b725/tumblr_mwfg4qcdgD1s4nrjeo1_500.gif" loop="false"/>
        <form action="/login" method="post">
          <input name="authenticity_token" type="hidden" value={this.state.token}/>
          <input type="text" name="username" placeholder="username"/>
          <input type="password" name="password" placeholder="password"/>
          <input type="submit" value="Log In"></input>
        </form>
      </main>
    );
  }
});