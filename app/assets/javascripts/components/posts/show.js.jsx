var Post = React.createClass({
  render: function() {
    let props = this.props;

    return (
      <main id="post">
        <div id="heading">
        	<h3>{props.title}</h3><br/>
          Published by Melissa De Los Santos<br/>
          {props.created_at}
        </div>
        <hr/>
        {props.body}
      </main>
    );
  }
});