import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import {
    errorMessages,
    credentials
} from './fixture'
import './styles.css'
import {
    signInIcon,
    tvIcon,
    holdingMobile,
    userIcon,
    passwordIcon,
} from '../../assets'

@observer
class SignInPage extends React.Component {
    @observable username = ''
    @observable password = ''
    @observable isValidPassword = true
    @observable isValidEmail = true
    @observable isLoginSuccess = true

    validateEmail = email => {
        if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
            this.isValidEmail = true
        }
        else {
            this.isValidEmail = false
        }
    }
    
    validatePassword = password => {
       if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,10}$/.test(password)) {
        this.isValidPassword = true
       }
       else {
        this.isValidPassword = false
       }
    }

    handleChange = event => {
        event.preventDefault()

        const { name, value } = event.target
        this[name] = value
    }

    handleEmailBlur = event => {
        event.preventDefault()
        const { value } = event.target
        this.validateEmail(value)
    }

    handlePasswordBlur = event => {
        event.preventDefault()
        const { value } = event.target
        this.validatePassword(value)
    }

    handleSubmit = event => {
        event.preventDefault()
        if (this.username && this.password) {
            if (this.username === credentials.username && this.password === credentials.password) {
                this.isLoginSuccess = true
                this.props.history.push({pathname: '/moviesList'})
            } else {
                this.isLoginSuccess = false
            }
        }
    }

    render() {
        return (
            <div className="login-page-container">
                <header className="login-page-header">
                    <a className="login-nav" href="/signin">
                        Log In
                    </a>
                </header>
                <div className="login-page-wrapper">
                    <div className="login-header">
                        <img className="my-movie-icon" src={tvIcon} height={'40px'} width={'40px'} />
                        <h2 className="my-movie-title">My Movie</h2>
                    </div>
                    <form name="form" onSubmit={this.handleSubmit}>
                        <div className={'form-group'}>
                            <img className="user-icon" src={userIcon} width={'5px'} height={'5px'} />
                            <input type="text" className="form-control" placeholder={'Username'} name="username" value={this.username} onChange={this.handleChange} onBlur={this.handleEmailBlur} />
                            {!this.isValidEmail &&
                                <div className="help-block">{errorMessages.email}</div>
                            }
                        </div>
                        <div className={'form-group'}>
                            <img className="password-icon" src={passwordIcon} width={'5px'} height={'5px'} />
                            <input type="password" className="form-control" placeholder={'Password'} name="password" value={this.password} onChange={this.handleChange} onBlur={this.handlePasswordBlur} />
                            {!this.isValidPassword &&
                                <div className="help-block">{errorMessages.password}</div>
                            }
                        </div>
                        <div className={'form-group submit'}>
                            <label > </label>
                            <button className="btn btn-primary"><img src={signInIcon} width={'20px'} height={'20px'} /></button>
                        </div>
                        {!this.isLoginSuccess && <span className="error-message"> {errorMessages.invalidCredential} </span>}
                    </form>
                    <div className="signup-redirection">
                        Don't have an account?
                        <a href="/signup"> Sign Up </a>
                    </div> 
                </div>
            </div>
        )
    }
}

export { SignInPage }
export default SignInPage
