import fbIcon from '../../assets/facebookicon.svg'
import googleIcon from '../../assets/googleicon.svg'
import backIcon from '../../assets/backBtn.svg'
import nextIcon from '../../assets/nextBtn.svg'

function Register(){
  return(
    <div className='registerPage'>
      <header>
        <button className="btn">
          <img src={backIcon} alt="go to back" />
        </button>
        <h1>Login</h1>
      </header>
      <main>
        <form>
          <label className="textField">
            <input className="input" type="email" placeholder='muffin.sweet@gmail.com'/>
            <span className="emailCaption">Email</span>
            <span className="icon">✔️</span>
          </label>
        </form>
        <div className="next">
          <a className='nextLink'>Forgot your password?</a>
          <button className='btn nextBtn'>
            <img src={nextIcon} alt="" />
          </button>
        </div>
        <div className='loginBtnDiv'>
        <button className='btn loginBtn'>LOGIN</button>
        </div>
      </main>
      <footer>
        <span className='footerText'>Or login with social account</span>
        
        <div className="social">
          <button className="btn google">
            <img src={googleIcon} alt="google" />
          </button>
          <button className="btn facebook">
            <img src={fbIcon} alt="facebook" />
          </button>
        </div>
      </footer>
    </div>
  )
}

export default Register;