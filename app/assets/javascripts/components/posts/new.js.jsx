class NewPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ''
    };
  }

  componentDidMount(event) {
    var token = document.querySelector('meta[name=csrf-token]').content;
    this.setState({token: token});
  }

  render() {
    return (
      <main>
        <h3>New Post</h3>
      	<Error msg={this.props.msg}/>

      	<form action="/posts" method="post">
          <input type="hidden" name="authenticity_token" value={this.state.token}/>
          <input type="tags" name="tags" placeholder="tags(seperated by ,)" required/>
          <input type="text" name="post[title]" placeholder="title" required/>
          <textarea className="tinymce" name="post[body]" placeholder="body" required/>
          <input type="submit" value="Submit"></input>
        </form>
      </main>
    );
  }
};