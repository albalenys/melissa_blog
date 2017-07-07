class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: '',
      posts: []
    };
  }

  componentDidMount() {
    var self = this;

    this.getTagPosts().done(function(json) {
      self.setState({ 
        tag: json.tag,
        posts: json.posts 
      })
    });
  }

  getTagPosts() {
  	var tagId = location.pathname.split('/')[2];

    return $.ajax({
        url: '/get/tag_posts/' + tagId,
        dataType: 'json'
    });
  }

  render() {
  	var posts = [];

    this.state.posts.forEach(function(post) {
      posts.push(
        <p>
          <a key={post.id} href={"/posts/" + post.id}>{post.title}</a>
        </p>
      );
    });

    return (
      <main>
        <h1>{this.state.tag}</h1>
        {posts}
      </main>
    );
  }
};