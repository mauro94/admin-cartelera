import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Add as AddCategory, List as CategoriesList } from 'Containers/categories'
import 'Style/categories/layout.scss'

const CategoriesLayout = (props) => (
    <div className='categories-page'>
        <Route path='/categorias' render={CategoriesPage} />
    </div>
)

const CategoriesPage = (props) => (
    <React.Fragment>
        <Header match={props.match} />
        <div className='content'>
            <CategoriesList />
        </div>
    </React.Fragment>
)

const Header = (props) => (
    <div>
        <h1>Categorías</h1>
        <div className='tool-bar'>
            <AddCategory />
        </div>
    </div>
)

export default CategoriesLayout