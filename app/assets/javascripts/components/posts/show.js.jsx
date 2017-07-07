class Post extends React.Component {
  render() {
    let post = this.props.post;

    return (
      <main id="post">
        <div id="heading">
        	<h3>{post.title}</h3><br/>
          Published by Melissa De Los Santos<br/>
          {post.created_at}
        </div>
        <hr/>
        {post.body}
      </main>
    );
  }
};