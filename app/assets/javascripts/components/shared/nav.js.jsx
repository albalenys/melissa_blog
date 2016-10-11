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
        url: '/tags',
        dataType: 'json'
    });
  },

  render: function() {
    var tags = [];

    this.state.tags.forEach(function(tag) {
        tags.push(<a key={tag.id} href='#'>{tag.name}</a>);
    });

    return (
      <nav>
        <span id='logo'>Melissa</span>
        <menu>
        	<a href='/'>Home</a>
          {tags}
        </menu>
      </nav>
    );
  }
});