import type {
  ColorIndicatorIntl,
  HistoryIntl,
  HistoryTodayIntl,
} from "../../interfaces/historyInt";

export interface MarkersState {
  history?: HistoryIntl;
  historyToday?: HistoryTodayIntl;
  user?: HistoryTodayIntl;
  colorIndData?: ColorIndicatorIntl;
  loading: {
    history: boolean;
    historyToday: boolean;
    user: boolean;
    colors: boolean;
    form: boolean;
  };
}

export const initialState: MarkersState = {
  loading: {
    history: false,
    historyToday: false,
    user: false,
    colors: false,
    form: false,
  },
};

type Action =
  | { type: "SET_LOADING"; key: keyof MarkersState["loading"]; value: boolean }
  | { type: "SET_HISTORY"; payload: HistoryIntl }
  | { type: "SET_HISTORY_TODAY"; payload: HistoryTodayIntl }
  | { type: "SET_USER"; payload: HistoryTodayIntl }
  | { type: "SET_COLOR_IND_DATA"; payload: ColorIndicatorIntl };

export function markersReducer(
  state: MarkersState,
  action: Action,
): MarkersState {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: { ...state.loading, [action.key]: action.value },
      };
    case "SET_HISTORY":
      return { ...state, history: action.payload };
    case "SET_HISTORY_TODAY":
      return { ...state, historyToday: action.payload };
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_COLOR_IND_DATA":
      return { ...state, colorIndData: action.payload };
    default:
      return state;
  }
}
