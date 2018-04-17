import { Status, Entity } from 'Helpers/index'

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
        if (action.status == Status.Ready && !Entity.isEmpty(newState.all)) {
            let index = newState.all.findIndex(
                user => (user.id == action.object.id))
            newState.all[index] = action.object
        }
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
        let newState = Object.assign({}, oldState)
        if (action.status == Status.Ready) {
            newState.all = [action.object, ...oldState.all]
            newState.show = action.object
        }
        return {
            ...newState,
            action: action.type,
            error: action.error,
            status: action.status
        }
    }
}