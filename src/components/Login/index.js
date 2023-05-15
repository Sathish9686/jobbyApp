import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {username: '', password: '', showError: false, errorMsg: ''}

  onSubmitSucess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_Token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitError = errorMsg => {
    this.setState({showError: true, errorMsg})
  }

  submitForm = async e => {
    e.preventDefault()
    const {username, password} = this.state
    const UserDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(UserDetails),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSucess(data.jwt_token)
    } else {
      this.onSubmitError(data.error_msg)
    }
  }

  passwordFunction = event => {
    this.setState({password: event.target.value})
  }

  usernameFunction = event => {
    this.setState({username: event.target.value})
  }

  render() {
    const {username, password, errorMsg, showError} = this.state
    return (
      <div className="main-container">
        <div className="card-container">
          <img
            alt="logo"
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            className="logo-size"
          />
          <form className="form-class" onSubmit={this.submitForm}>
            <label htmlFor="username" className="input-label">
              USERNAME
            </label>
            <input
              id="username"
              type="text"
              className="input-style"
              placeholder="Username"
              value={username}
              onChange={this.usernameFunction}
            />
            <label htmlFor="password" className="input-label">
              PASSWORD
            </label>
            <input
              className="input-style"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={this.passwordFunction}
            />
            <button type="submit" className="login-button">
              Login
            </button>
            {showError && <p className="errorMsg">*{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default Login
