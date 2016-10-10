var Login = React.createClass({

  render: function() {
    return (
      <main>
        <form action="#">
          <input type="text" name="username" placeholder="username"></input>
          <input type="password" name="password" placeholder="password"></input>
          <input type="submit" value="Log In"></input>
        </form>
      </main>
    );
  }
});