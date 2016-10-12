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
        <Error msg={this.props.msg}/>

        <div className="center">
          <img src="http://i126.photobucket.com/albums/p103/julieanne718/animation-cat-sleeping.gif"/>
        </div>

        <form action="/login" method="post">
          <input type="hidden" name="authenticity_token" value={this.state.token}/>
          <input type="text" name="username" placeholder="username" required/>
          <input type="password" name="password" placeholder="password" required/>
          <input type="submit" value="Log In"></input>
        </form>
      </main>
    );
  }
});