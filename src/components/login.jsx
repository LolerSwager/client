export default function Login() {
    return (
      <form action="" className="loginbox">
            <h2>Login </h2>
            <label htmlFor="username">Username / E-mail</label>
            <input type="text" name="username"/>
            <label htmlFor="username">password</label>
            <input type="password" name="password"/>
            <p><input type="checkbox" name="" id="" /> Keep me logged in</p>
            <div>
                <button>Login</button>
                <button>create one</button>
            </div>
            <Link to="password">i forgot my password</Link>
      </form>
    );
}