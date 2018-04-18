import React from 'react'
import { Link } from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPencilAlt } from '@fortawesome/fontawesome-free-solid'
import { Format, CategoryLabels } from 'Helpers/index'
import 'Style/categories/show.scss'

const ShowCategory = (props) => (
    <div className='show'>
        <Title category={props.category} />
        <Details category={props.category} />
        <Actions enabled={props.category.enabled} id={props.category.id} />
    </div>
)

const Actions = (props) => (
    <div className='actions'>
        <button className='delete'>
            <FontAwesomeIcon icon={faTrashAlt} /> Borrar
        </button>
        <button className={'enabled ' + props.enabled ? 'disable' : 'enable'}>
            {props.enabled ? 'Desactivar' : 'Activar'}
        </button>
        <Link to={`${props.id}/editar`}>
            <button className='edit'>
                <FontAwesomeIcon icon={faPencilAlt} /> Editar
            </button>
        </Link>
    </div>
)

const Title = (props) => (
    <div className='title'>
        <div className='name'>
            {props.category.name}
        </div>
    </div>
)

const Details = (props) => (
    <div className='details'>
        <DetailEntry label='enabled'>
            {props.category.enabled ? 'Activa' : 'Inactiva'}
        </DetailEntry>
        <DetailEntry label='pastEvents'>
            {props.category.name}
        </DetailEntry>
        <DetailEntry label='presentEvents'>
            {props.category.name}
        </DetailEntry>
        <DetailEntry label='futureEvents'>
            {props.category.name}
        </DetailEntry>
    </div>
)

const DetailEntry = (props) => (
    <div className={'entry ' + props.label}>
        <div className='label'>{Format.capitalize(CategoryLabels[props.label])}</div>
        <div className='value'>
            {props.children}
        </div>
    </div>
)

export default ShowCategory