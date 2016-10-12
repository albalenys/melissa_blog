var NewPostForm = React.createClass({
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
      	<form action="/posts" method="post">
          <input type="hidden" name="authenticity_token" value={this.state.token}/>
          <input type="text" name="post[title]" placeholder="title" required/>
          <textarea name="post[body]" placeholder="body" required/>
          <input type="submit" value="Submit"></input>
        </form>
      </main>
    );
  }
});