import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import {
    errorMessages,
} from './fixture'
import {
    userIcon,
    passwordIcon,
    emailIcon,
    calendarIcon,
} from '../../assets'
import './styles.css'

@observer
class SignUpPage extends React.Component {
    @observable name = ''
    @observable date = ''
    @observable username = ''
    @observable password = ''
    @observable isValidPassword = true
    @observable isValidEmail = true

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
        if (this.username && this.password && this.isValidEmail && this.isValidPassword) {
            this.props.history.push({pathname: '/moviesList'})
        }
        // To handle sign up API integration and 
    }

    render() {
        return (
            <div className="signup-page-container">
                <header className="signup-page-header">
                    <a className="signup-nav" href="/signup">
                        Sign Up
                    </a>
                </header>
                <div className="signup-page-wrapper">
                    <div className="signup-header">
                        <img className="my-movie-icon" src={userIcon} height={'40px'} width={'40px'} />
                    </div>
                    <form name="form" onSubmit={this.handleSubmit}>
                        <div className={'form-group'}>
                            <img className="user-icon" src={userIcon} width={'5px'} height={'5px'} />
                            <input type="text" className="form-control" placeholder={'Name'} name="name" value={this.name} onChange={this.handleChange}/>
                        </div>
                        <div className={'form-group'}>
                            <img className="email-icon" src={emailIcon} width={'5px'} height={'5px'} />
                            <input type="text" className="form-control" placeholder={'Email'} name="username" value={this.username} onChange={this.handleChange} onBlur={this.handleEmailBlur} />
                        </div>
                        {!this.isValidEmail &&
                            <div className="help-block">{errorMessages.email}</div>
                        }
                        <div className={'form-group'}>
                            <img className="password-icon" src={passwordIcon} width={'5px'} height={'5px'} />
                            <input type="password" className="form-control" placeholder={'Password'} name="password" value={this.password} onChange={this.handleChange} onBlur={this.handlePasswordBlur} />
                        </div>
                        {!this.isValidPassword &&
                            <span className="help-block">{errorMessages.password}</span>
                        }
                        <div className={'form-group'}>
                            <img className="calendar-icon" src={calendarIcon} width={'5px'} height={'5px'} />
                            <input type="date" className="form-control" placeholder={'Birthday'} name="date" value={this.date} onChange={this.handleChange}/>
                        </div>
                        <div className={'form-group'}>
                            <label > </label>
                            <button className="btn btn-primary"><img src={userIcon} width={'20px'} height={'20px'} /></button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export { SignUpPage }
export default SignUpPage
