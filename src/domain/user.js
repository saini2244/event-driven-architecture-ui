import { ADD_USER, USER_CREATED } from "../redux/actionTypes";

export function addUser(user, payload) {
    if (user.type === USER_CREATED) {
        if (!user.pending_events) {
            user.pending_events = [];
        }
        user.pending_events.push({
            status: 'unsaved',
            id: Math.random(),
            type: ADD_USER,
            data: payload,
        })
    }
    return user;
}