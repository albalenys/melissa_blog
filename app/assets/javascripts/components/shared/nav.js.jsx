class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: []
    };
  }

  componentDidMount() {
    var self = this;

    this.getAllTags().done((json) => {
      self.setState({ tags: json })
    });
  }

  getAllTags() {
    return $.ajax({
      url: "/get/tags",
      dataType: "json"
    });
  }

  render() {
    var tags = [];

    this.state.tags.forEach((tag) => {
      tags.push(<a key={tag.id} href={"/tag/" + tag.id}>{tag.name}</a>);
    });

    return (
      <nav>
        <span id="logo">
          <a href="/">Melissa</a>
        </span>
        <menu>
          {(this.props.current_user) ?
            <a id="new-post-link" href="/posts/new">New Post</a>
          :
            null
          }
          {tags}
        </menu>
      </nav>
    );
  }
};