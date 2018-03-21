import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { history } from 'Config/helper';

export const checkboxPublished = () => (
    <div className="filter-checkbox filter-link-1">
        <label className="checkbox-label">
            Publicados
            <input type="checkbox" defaultChecked={true}/>
            <span className="checkmark"></span>
        </label>
    </div>
)

export const checkboxCanceled = ({checkboxClass: checkboxClass}) => (
    <div className={checkboxClass}>
        <label className="checkbox-label">
            Cancelados
            <input type="checkbox" defaultChecked={true}/>
            <span className="checkmark"></span>
        </label>
    </div>
)