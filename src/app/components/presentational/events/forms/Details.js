import React, { Fragment } from 'react'
import { Formik, Form, Field } from 'formik';
import { SelectComponent, TextComponent, EmailComponent } from 'Presentational/elements/Input';
import { Entity } from 'Helpers/object'
import { FormButtonSignout, FormButtonSubmit } from 'Presentational/elements/Form'
import { Persist } from 'formik-persist'
import { DatePickerElement } from 'Presentational/elements/DatePickerElement'


export const EventsFormsDetails = ({ handleSubmit, error, errors, touched, isSubmitting }) => (
    <Form className="event-form">
        {!Entity.isEmpty(error) && <p className="message-error">{error}</p>}

        <div>Fecha y Hora:</div>
        <Field name="rangeDate" className={((touched.endDateTime && errors.endDateTime) ? 'emptyField' : 'readyField')} component={DatePickerElement} />
        {touched.endDateTime && errors.endDateTime && <p className="message-error">{errors.endDateTime}</p>}

        <div>Ubicación:</div>
        <Field name="location" placeholder="Ubicación" className={((touched.location && errors.location) ? 'emptyField' : 'readyField')} component={TextComponent} />
        {touched.location && errors.location && <p className="message-error">{errors.location}</p>}

        <div>Costo:</div>
        <Field name="cost" placeholder="Costo" className={((touched.cost && errors.cost) ? 'emptyField' : 'readyField')} component={TextComponent} />
        {touched.cost && errors.cost && <p className="message-error">{errors.cost}</p>}

        <div>Carreras:</div>
        <Field name="cost" placeholder="Costo" className={((touched.cost && errors.cost) ? 'emptyField' : 'readyField')} component={TextComponent} />
        {touched.cost && errors.cost && <p className="message-error">{errors.cost}</p>}

        <div>Informacion de Contacto</div>
        <div>Nombre:</div>
        <Field name="contact_name" placeholder="Nombre de contacto" className={((touched.contact_name && errors.contact_name) ? 'emptyField' : 'readyField')} component={TextComponent} />
        {touched.contact_name && errors.contact_name && <p className="message-error">{errors.contact_name}</p>}

        <div>Correo:</div>
        <Field name="contact_email" placeholder="Correo de contacto" className={((touched.contact_email && errors.contact_email) ? 'emptyField' : 'readyField')} component={TextComponent} />
        {touched.contact_email && errors.contact_email && <p className="message-error">{errors.contact_email}</p>}

        <div>Telefono:</div>
        <Field name="contact_phone" placeholder="Teléfono de contacto" className={((touched.contact_phone && errors.contact_phone) ? 'emptyField' : 'readyField')} component={TextComponent} />
        {touched.contact_phone && errors.contact_phone && <p className="message-error">{errors.contact_phone}</p>}

        <Persist name="event-details" />
    </Form>
)