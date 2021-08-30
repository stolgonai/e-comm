import "./Auth.css";

function Login() {
  return (
    <div className="loginPage">
      <header>
        <button className="btn">
          Back
        </button>
        <h1>Sign up</h1>
      </header>
      <main>
        <form>
          <label className="textField">
            <input className="input" type="text"  />
            <span className="caption">Name</span>
            <span className="icon">✔️</span>
          </label>
          <label className="textField">
            <input className="input" type="email"  />
            <span className="caption">Email</span>
          </label>
          <label className="textField">
            <input className="input" type="password"  />
            <span className="caption">Password</span>
          </label>
        </form>
      </main>
    </div>
  );
}

export default Login;
