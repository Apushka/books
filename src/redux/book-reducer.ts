import { InferActionsTypes, BaseThunkType } from './redux-store';
import { ItemType } from './../types/types';
import { booksAPI } from "../api/api";

type InitialStateType = typeof initialState

let initialState = {
    isFetching: false,
    book: {} as ItemType
}

const bookReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'GET_BOOK': {
            return {
                ...state,
                book: action.book
            }
        }
        case 'IS_FETCHING': {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default: return state
    }
}

const actions = {
    getBookAC: (book: ItemType) => ({ type: 'GET_BOOK', book } as const),
    isFetchingAC: (isFetching: boolean) => ({ type: 'IS_FETCHING', isFetching } as const)
}

type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>


export const getBook = (volumeId: string): ThunkType => async (dispatch) => {
    dispatch(actions.isFetchingAC(true))
    let data = await booksAPI.getBook(volumeId)
    dispatch(actions.getBookAC(data))
    dispatch(actions.isFetchingAC(false))
}

export default bookReducer;