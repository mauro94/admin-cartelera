import { Status } from 'Helpers/constants'

export const StateManager = {
    defaultState: {
        action: '',
        all: {},
        error: {},
        show: {},
        status: Status.Ready
    },
    update: (oldState, action) => {
        let newState = Object.assign({}, oldState)
        let index = newState.all.findIndex(user => (user.id == action.id))
        newState.all[index] = action.object
        return {
            ...newState,
            action: action.type,
            error: action.error,
            show: action.object,
            status: action.status
        }
    },
    get: (oldState, action) => {
        return {
            ...oldState,
            action: action.type,
            error: action.error,
            show: action.object,
            status: action.status
        }
    },
    all: (oldState, action) => {
        return {
            ...oldState,
            all: action.object,
            status: action.status,
            error: action.error,
            action: action.type,
            show: action.object && action.object[0]
        }
    },
    create: (oldState, action) => {
        return {
            ...oldState,
            action: action.type,
            all: [action.object, ...oldState.all],
            error: action.error,
            show: action.object,
            status: action.status
        }
    }
}