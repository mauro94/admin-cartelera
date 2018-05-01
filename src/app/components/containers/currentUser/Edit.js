import React from 'react'
import { connect } from 'react-redux'
import { CurrentUserActions } from 'Helpers/constants'
import { thunks } from 'Logic/actions/thunks'
import { ModalAlert } from 'Presentational/elements'
import { EditSucceeded, EditFailed } from 'Presentational/users/Edit'
import { ConfirmUserUpdate } from 'Presentational/events/modals'

class Edit extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleError = this.handleError.bind(this)
        this.handleSuccess = this.handleSuccess.bind(this)
    }
    componentWillMount() {
        this.setState({
            user: {
                firstName: this.props.userToUpdate.firstName || '',
                lastName: this.props.userToUpdate.lastName || '',
                office: this.props.userToUpdate.office || '',
                phoneNumber: this.props.userToUpdate.phoneNumber || '',
                campus: this.props.userToUpdate.campus || 'MTY',
                id: this.props.userToUpdate.id,
                isNewbie: this.props.userToUpdate.isNewbie
            }
        })
    }
    handleError() {
        ModalAlert({
            modal: EditFailed,
            type: this.props.type,
            user: this.email,
            error: this.props.currentUser.error
        })
    }
    handleSubmit(user) {
        let updatedUser = { id: this.props.userToUpdate.id }
        for (var key in this.props.userToUpdate) {
            if (user.hasOwnProperty(key)) {
                if (this.props.userToUpdate[key] != user[key] && key != "id") {
                    updatedUser[key] = user[key]
                }
            }
        }
        this.props.update(updatedUser)
    }
    handleSuccess() {
        ModalAlert({
            modal: EditSucceeded, type: this.props.type,
            user: this.props.currentUser.show
        })
    }
    render() {
        const { children } = this.props;
        let childrenWithProps = React.Children.map(children, child =>
            React.cloneElement(child, {
                action: CurrentUserActions.Update,
                modal: ConfirmUserUpdate,
                current: true,
                handleSubmit: this.handleSubmit,
                handleConfirmSubmit: this.handleSubmit,
                logout: this.props.handleLogout,
                reducer: {
                    status: this.props.currentUser.status,
                    action: this.props.currentUser.action,
                    error: this.props.currentUser.error
                },
                user: this.state.user,
                onSuccess: this.handleSuccess,
                onError: this.handleError
            }));
        return childrenWithProps
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        update: (user) => {
            dispatch(thunks.user.update(user, true))
        },
        handleLogout: () => { dispatch(thunks.user.logout()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)