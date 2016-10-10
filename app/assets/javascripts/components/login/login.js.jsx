var Login = React.createClass({

  render: function() {
    return (
    	<main>
      	<h1>Log In</h1>

      	<form action="#">
      		Username: <input type="text" name="username"></input>
      		Password: <input type="password" name="password"></input>
      		<input type="submit"></input>
      	</form>
      </main>
    );
  }
});