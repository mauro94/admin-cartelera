import React from 'react'
import { Field } from 'formik'
export { Password as PasswordComponent } from 'Presentational/elements/Password'
import { DatePickerElement } from 'Presentational/elements/DatePickerElement'
import { Format, Labels } from 'Helpers/index'

export const EmailComponent = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
    <div className="form-field">
      <input
        type="email"
        placeholder="Correo Electrónico"
        {...field}
        {...props}
      />
    </div>
  );

export const TextField = (props) => (
  <React.Fragment>
  <div className='input-container'>
      <div className='text-input'>
          <label>
          {Format.capitalize(Labels[props.label])}
          </label>
          <Field name={props.label} className={((props.touched[props.label] && props.errors[props.label]) ? 'emptyField' : 'readyField')} type='text'/>
          <span className='separator'> </span>
      </div>
  </div>
  {props.touched[props.label] && props.errors[props.label] && <p className="message-error">{props.errors[props.label]}</p>}
  </React.Fragment>
)

export const TextFieldArea = (props) => (
  <React.Fragment>
  <div className='input-container'>
      <div className='text-input'>
          <label>
          {Format.capitalize(Labels[props.label])}
          </label>

          <Field name={props.label} {...props} component={TextFieldAreaComponent}/>

          <span className='separator'> </span>
      </div>
  </div>
  {props.touched[props.label] && props.errors[props.label] && <p className="message-error">{props.errors[props.label]}</p>}
  </React.Fragment>
)

export const TextComponent = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
    <div className="form-field">
      <input
        type="text"
        {...field}
        {...props}
      />
    </div>
  );

export const TextAreaComponent = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
    <div className="form-field">
      <textarea
        type="text"
        {...field}
        {...props}
      />
    </div>
  )

export const TextFieldAreaComponent = (props) => {
      return <div 
        className={((props.touched[props.label] && props.errors[props.label]) ? 'textarea emptyField' : 'textarea readyField')}
        rows="1"
        contentEditable="true"
        name={props.field.name}
        onInput={props.textareaHandleChange}
        onBlur={(e)=> { 
          updateFormik(props, e)}}>
        {props.field.value}
      </div>
}

const updateFormik = (props, e) => {
  props.setFieldValue(props.field.name, e.target.textContent)
  props.setTouched({...props.touched, [props.field.name]: true})
}

export const SelectComponent = (props) => (
  <div className="form-field">
    <div>
      <label>{props.instruction}</label>
    </div>
    <select
      {...props.field}
      {...props}>
      {props.list.map(Option)}
    </select>
  </div>
);

export const SelectDate = ({
  instruction,
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
    <div className="form-field">
      <DatePickerElement {...props.field} {...props} />
    </div>
  );

const Option = element => (
  <option key={element.key} value={element.key}> {element.text} </option>
)