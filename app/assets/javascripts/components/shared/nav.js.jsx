var Nav = React.createClass({
  getInitialState: function() {
    return({ tags: [] })
  },

  componentDidMount: function() {
    var self = this;

    this.getAllTags().done(function(json) {
      self.setState({ tags: json })
    });
  },

  getAllTags: function() {
    return $.ajax({
        url: "/get/tags",
        dataType: "json"
    });
  },

  render: function() {
    var tags = [];

    this.state.tags.forEach(function(tag) {
        tags.push(<a key={tag.id} href={"/tag/" + tag.id}>{tag.name}</a>);
    });

    return (
      <nav>
        <span id="logo"><a href="/">Melissa</a></span>
        <menu>
          <a id="new-post-link" href="/posts/new">New Post</a>
          {tags}
        </menu>
      </nav>
    );
  }
});