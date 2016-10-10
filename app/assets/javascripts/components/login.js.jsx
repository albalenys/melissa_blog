var Login = React.createClass({

  render: function() {
    return (
    	<main>
      	<h1>Log In</h1>

      	<form action="#">
      		<input type="text" name="username" placeholder="username"></input>
      		<input type="password" name="password" placeholder="password"></input>
      		<input type="submit"></input>
      	</form>
      </main>
    );
  }
});