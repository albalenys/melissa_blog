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
      let isActive = location.pathname === `/tag/${tag.id}`;

      tags.push(
        <a key={tag.id} href={"/tag/" + tag.id} id={isActive ? 'active' : null}>
          {tag.name}
        </a>
      );
    });

    return (
      <nav>
        <span id="logo">
          <a href="/">Melissa</a>
        </span>
        {(this.props.current_user) ?
          <div id="login-info">
            <h5>
              Welcome back, {this.props.current_user.username} [ <a href='/logout' data-method="delete">Logout</a> ]
            </h5>
          </div>
        :
          null
        }
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