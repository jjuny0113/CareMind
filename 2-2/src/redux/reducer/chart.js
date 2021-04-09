import produce from "immer";

export const initialState = {
  getChartDataLoding: false,
  getChartDataDone: false,
  getChartDataError: null,
  chartData: [],
};

export const GET_CHART_REQUEST = "CHART_REQUEST";
export const GET_CHART_SUCCESS = "CHART_SUCCESS";
export const GET_CHART_FAILURE = "CHART_FAILURE";

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case GET_CHART_REQUEST:
        draft.getChartDataLoding = true;
        draft.getChartDataDone = false;
        draft.getChartDataError = null;
        break;
      case GET_CHART_SUCCESS:
        draft.getChartDataLoding = false;
        draft.getChartDataDone = true;
        draft.chartData = action.data;
        break;
      case GET_CHART_FAILURE:
        draft.getChartDataLoding = false;
        draft.getChartDataError = action.error;
        break;
      default:
        break;
    }
  });
};

export default reducer;
