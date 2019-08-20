export default ({ ...settings }, defaultState) =>
    (state = defaultState, action) => {
        const handler = settings[action.type]

        if (typeof handler === 'function') {
            state = handler(state, action.payload)
        }

        return state
    }
