import React from 'react'
import { UserTypes, TemporaryPassword, Format, history } from 'Helpers/index'
import { Callout, FeedbackModal } from 'Presentational/elements'
import { faEnvelope } from '@fortawesome/fontawesome-free-regular'
import { withFeedback } from 'Containers/hoc'
import 'Style/common/simpleAdd.scss'

export const AddUser = (props) => (
    <Callout add={props.add} placeholder="ejemplo@ejemplo.com" type={props.type} icon={faEnvelope} />
)

export const AddSucceeded = (props) => (
    <FeedbackModal
        title={Format.capitalize(props.user.userType) + ' agregado'}
        subtitle={props.user.email}
        handleOk={() => {
            props.onClose()
            history.push(`/usuarios/${props.user.userType}s/${props.user.id}`)
        }}>
        Contraseña temporal: <h1>{props.user.password}</h1>
    </FeedbackModal>
)

export const AddFailed = (props) => (
    <FeedbackModal
        error
        title={'Error al agregar al ' + UserTypes[props.type]}
        subtitle={props.user}
        handleOk={props.onClose}>
        {props.error.email[0]}
    </FeedbackModal>
)

export default withFeedback(AddUser)