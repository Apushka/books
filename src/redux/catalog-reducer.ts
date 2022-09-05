import { InferActionsTypes, BaseThunkType } from "./redux-store";
import { FormDataType, ItemType } from "./../types/types";
import { booksAPI, GetCatalogResponseType } from "../api/api";

type InitialStateType = typeof initialState;

let initialState = {
  startIndex: 0,
  maxResults: 30,
  formData: {} as FormDataType,
  totalItems: null as number | null,
  isFetching: false,
  items: [] as Array<ItemType>,
};

const catalogReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case "GET_CATALOG": {
      return {
        ...state,
        startIndex: action.startIndex,
        formData: action.formData,
        totalItems: action.catalog.totalItems,
        items:
          action.catalog.totalItems && action.catalog.totalItems > 0
            ? action.startIndex === 0
              ? [...action.catalog.items]
              : [...state.items, ...action.catalog.items]
            : [],
      };
    }
    case "IS_FETCHING": {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    default:
      return state;
  }
};

export const actions = {
  getCatalogAC: (
    catalog: GetCatalogResponseType,
    startIndex: number,
    formData: FormDataType
  ) => ({ type: "GET_CATALOG", catalog, startIndex, formData } as const),
  isFetchingAC: (isFetching: boolean) =>
    ({ type: "IS_FETCHING", isFetching } as const),
};
type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsTypes>;

export const getCatalog =
  (formData: FormDataType, startIndex: number): ThunkType =>
  async (dispatch, getState) => {
    dispatch(actions.isFetchingAC(true));
    let maxResults = getState().Catalog.maxResults;
    let catalog = await booksAPI.getCatalog(formData, startIndex, maxResults);
    dispatch(actions.getCatalogAC(catalog, startIndex, formData));
    dispatch(actions.isFetchingAC(false));
  };

export default catalogReducer;
