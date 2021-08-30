import backIcon from "./backIcon.svg"
import crossIcon from "./cross.svg"

function ResetPassword() {
    return (
        <div className="resetPage">
        <header>
          <button className="btn">
            <img src={backIcon} alt="backIcon" />
          </button>
          <h1 className="pageTitle">Forgot password</h1>
          <h4 className="warningText">
              Please, enter your email address. You will receive a link to create a new password via email.
          </h4>
        </header>
        <main>
          <form>
            <label className="textField">
              <input className="input" type="email"  />
              <span className="caption">Email</span>
              <span className="icon">
                  <img src={crossIcon} alt="crossIcon" />
              </span>
            </label>
            <h4 className="errorMsg">
                Not a valid email address. Should be your@email.com
            </h4>
            <button className="sendBtn">SEND</button>
          </form>
        </main>
      </div>
    )
}

export default ResetPassword;