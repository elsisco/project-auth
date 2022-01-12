import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { API_URL_SIGNUP } from '../utils/urls'

const SignupPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onUsernameChange = (event) => {
        setUsername(event.target.value)
    }
    const onPasswordChange = (event) => {
        setPassword(event.target.value)
    }
    const handleFormSubmit = (event) => {
        event.preventDefault()

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password })
        }
        fetch(API_URL_SIGNUP, options)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setUsername('')
                setPassword('')
            })
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        placeholder="username"
                        value={username}
                        onChange={onUsernameChange}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={onPasswordChange}
                    />
                </label>
                <button type="submit">Sign up</button>
            </form>
            <Link to={'/'}>
                <button>Already have an account? Sign in!</button>
            </Link>
        </div >
    )
}

export default SignupPage