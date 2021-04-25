import { useEffect, useRef, useReducer } from "react";

export enum FetchStatus {
  IDLE = "idle",
  FETCHING = "fetching",
  ERROR = "error",
  FETCHED = "fetched",
}

export enum FetchActionTypes {
  FETCHING = "fetching",
  FETCHED = "fetched",
  FETCH_ERROR = "fetch-error",
}

export type FetchAction =
  | { type: FetchActionTypes.FETCHING }
  | { type: FetchActionTypes.FETCHED; payload: any }
  | { type: FetchActionTypes.FETCH_ERROR; error: any };

export interface FetchState {
  status: FetchStatus;
  error: any;
  data: any;
}

export const useFetch = (url: string): FetchState => {
  const cache = useRef<{ [key: string]: any }>({});

  const initialState: FetchState = {
    status: FetchStatus.IDLE,
    error: null,
    data: [],
  };

  const [state, dispatch] = useReducer(
    (state: FetchState, action: FetchAction) => {
      switch (action.type) {
        case FetchActionTypes.FETCHING:
          return { ...initialState, status: FetchStatus.FETCHING };
        case FetchActionTypes.FETCHED:
          return {
            ...initialState,
            status: FetchStatus.FETCHED,
            data: action.payload,
          };
        case FetchActionTypes.FETCH_ERROR:
          return {
            ...initialState,
            status: FetchStatus.ERROR,
            error: action.error,
          };
        default:
          return state;
      }
    },
    initialState
  );

  useEffect(() => {
    let cancelRequest = false;
    if (!url) return;

    const fetchData = async () => {
      dispatch({ type: FetchActionTypes.FETCHING });
      if (cache.current[url]) {
        const data = cache.current[url];
        dispatch({ type: FetchActionTypes.FETCHED, payload: data });
      } else {
        try {
          const response = await fetch(url);
          const data = await response.json();
          cache.current[url] = data;
          if (cancelRequest) return;
          dispatch({ type: FetchActionTypes.FETCHED, payload: data });
        } catch (error) {
          if (cancelRequest) return;
          dispatch({
            type: FetchActionTypes.FETCH_ERROR,
            error: error.message,
          });
        }
      }
    };

    fetchData();

    return function cleanup() {
      cancelRequest = true;
    };
  }, [url]);

  return state;
};
