import ActionCommon from 'constant/actionCommon'
import commonReducer, { defaultState } from './common'

describe('new reduser', () => {
    it('NEWS_GET_REQUEST', () => { // it - блок, конкретного unit-теста
        const action = {
            type: ActionCommon.SET_COMPONENT,
            payload: true,
        }

        expect(commonReducer(defaultState, action)).toEqual(
            { ...defaultState, show: true }
        )
    })
})
