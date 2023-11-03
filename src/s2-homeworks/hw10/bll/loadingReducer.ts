const initState = {
    isLoading: false,
}

type stateType = {
    isLoading: boolean
}

export const loadingReducer = (state:stateType = initState, action: LoadingActionType): stateType => {
    switch (action.type) {
        case "CHANGE_LOADING": {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
