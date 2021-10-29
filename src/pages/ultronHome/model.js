import {
  getStatisticList,
} from '../../../service/chartdataservice';

const Model = {
  namespace: 'home',
  state: {
    statisticData: []
  },
  effetcs: {
    *getChartsStatistic({ payload }, { call, put, select }) {
      const response = yield call(getStatisticList, payload);
      if (response.code == 200) {
        yield put({
          type: 'setStatisticList',
          payload: response,
        });
      } else message.error(response.error_message + response.error_details);
    },
  },
  reducers: {
    setStatisticList(state, { payload }) {
      return { ...state, statisticData: payload.data.list };
    },
  },
};

export default Model;