import { Format, Status, CategoryActions } from 'Helpers/index'
import { createAction } from 'Logic/actions'
import { serverCall, request, headers } from 'Logic/actions/thunks/helper'

export const update = (category) => {
    let actionType = CategoryActions.Update
    return dispatch => serverCall({
        dispatch: dispatch,
        actionType: CategoryActions.Update,
        call: () => request.put(
            `/category/${category.id}`,
            Format.snakeCase('category', category),
            { headers: headers.withAuth() }),
    })
}

export const create = (name) => {
    return dispatch => serverCall({
        dispatch: dispatch,
        actionType: CategoryActions.Create,
        call: () => request.post(
            '/categories/',
            { category: { name: name } },
            { headers: headers.withAuth() })
    })
}

export const all = () => {
    return dispatch => serverCall({
        dispatch: dispatch,
        actionType: CategoryActions.All,
        call: () => request.get(
            '/categories',
            { headers: headers.withAuth() })
    })
}