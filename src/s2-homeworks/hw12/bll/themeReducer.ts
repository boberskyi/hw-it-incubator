export type InitStateType = typeof initState;

const initState = {
    themeId: 1,
}

type ChangeThemeIdType = ReturnType<typeof changeThemeId>;
type ThemeActionsType = ChangeThemeIdType;



export const themeReducer = (state:InitStateType = initState, action: ThemeActionsType): InitStateType => {
    switch (action.type) {
        case "SET_THEME_ID": {
            return {...state, themeId: action.payload.id};
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number) => {
    return {
        type: 'SET_THEME_ID' as const,
        payload: {
            id
        }
    }
}