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

    tinyMCE.init({
      selector: "textarea.tinymce",
      branding: false,
      browser_spellcheck: true,
      statusbar: false,
      menubar: false,
      toolbar: ["fullscreen styleselect | bold italic underline | alignleft aligncenter alignright | forecolor backcolor | undo redo | table image link"],
      plugins: "fullscreen, textcolor, table, image, link"
    });
  }

  render() {
    return (
      <main>
        <h3>New Post</h3>
      	<Error msg={this.props.msg}/>

      	<form action="/posts" method="post">
          <input type="hidden" name="authenticity_token" value={this.state.token}/>
          <input type="text" name="tags" placeholder="tags(seperated by ,)" required/>
          <input type="text" name="post[title]" placeholder="title" required/>
          <textarea className="tinymce" name="post[body]" placeholder="body" required/>
          <input type="submit" value="Submit"></input>
        </form>
      </main>
    );
  }
};