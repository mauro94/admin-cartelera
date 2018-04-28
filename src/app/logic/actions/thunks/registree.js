//registrees
import { RegistreeActions } from 'Helpers/constants'
import { serverCall, request, headers } from './helper'

export const allFromEventId = (eventId) => {
    return dispatch => serverCall({
        dispatch: dispatch,
        actionType: RegistreeActions.All,
        onSuccess: (response) => {
            response.eventId = eventId
        },
        call: () => request.get(
            '/registrees', {
                headers: {
                    ...headers.withAuth(),
                    'eventId': eventId
                }
            }),
    })
}