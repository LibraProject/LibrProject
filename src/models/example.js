
export default {

  namespace: 'example',

  state: {
    flag: false,
    mark: false
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    setFlag(state, action) {
      return { ...state, flag: action.payload };
    },
    setMark(state, action) {
      return { ...state, mark: action.payload };
    }
  },

};
