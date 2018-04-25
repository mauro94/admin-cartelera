import React from 'react'
import { Formik, Form } from 'formik'
import Yup from 'yup'
import { load } from 'Containers/hoc'
import { PasswordFormValidations, Entity } from 'Helpers/index'
import {
    PasswordField,
    SubmitButton
} from 'Presentational/elements';

const Password = (props) => (
    <Formik
        validationSchema={
            Yup.object().shape(PasswordFormValidations)
        }
        initialValues={{
            password: '',
            passwordConfirm: '',
            id: props.user.id
        }}
        onSubmit={(values, action) => {
            props.handleSubmit(values)
            action.setSubmitting(false)
        }}>
        {(props) => <PasswordForm {...props} />}
    </Formik>
)

const PasswordForm = (props) => (
    <Form >
        {!Entity.isEmpty(props.error) && <p className="message-error">{props.error}</p>}

        <PasswordField label='password' inputSizeSmall {...props}/>

        <PasswordField label='passwordConfirm' inputSizeSmall {...props}/> 

        <div className='form-field buttons'>
            <SubmitButton {...props}>
                Actualizar
            </SubmitButton>
        </div>

    </Form>
)

// export default load('user', Password)
export default Password