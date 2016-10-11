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
        <div className="center">
          <img src="http://i126.photobucket.com/albums/p103/julieanne718/animation-cat-sleeping.gif"/>
        </div>
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