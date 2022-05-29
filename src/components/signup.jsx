export default function Signup() {
    return (
      <form action="" className="loginbox">
            <h2>Signup </h2>
            <label htmlFor="username">Username / E-mail</label>
            <input type="text" name="username"/>
            <label htmlFor="username">password</label>
            <input type="password" name="password"/>
            <p><input type="checkbox" name="" id="" /> I agree to the <a href="">Terms of Service</a></p>
            <div>
                <button>create acount</button>
                <button>i have one</button>
            </div>
      </form>
    );
}