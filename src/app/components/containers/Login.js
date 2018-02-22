import React from 'react'
import { connect } from 'react-redux'
import { thunks } from 'Logic/actions/thunks'
import LoginForm from 'Presentational/LoginForm'

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: loginAttempt => {
            dispatch(thunks.user.login(loginAttempt))
        }
    }
}

const Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm)

export default Login