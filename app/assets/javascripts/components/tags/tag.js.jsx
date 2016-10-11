var Tag = React.createClass({
	 getInitialState: function() {
    return({ 
      tag: '',
      posts: [] 
    })
  },

  componentDidMount: function() {
    var self = this;

    this.getTagPosts().done(function(json) {
      self.setState({ 
        tag: json.tag,
        posts: json.posts 
      })
    });
  },

  getTagPosts: function() {
  	var tagId = location.pathname.split('/')[2];

    return $.ajax({
        url: '/get/tag_posts/' + tagId,
        dataType: 'json'
    });
  },

  render: function() {
  	var posts = [];

    this.state.posts.forEach(function(post) {
      posts.push(<a key={post.id}>{post.title}</a>);
    });

    return (
      <main>
        <h1>{this.state.tag}</h1>
        {posts}
      </main>
    );
  }
});