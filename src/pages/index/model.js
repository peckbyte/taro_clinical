export default {
  namespace: "index",
  state: {
    test: 1
  },
  effects: {},
  reducers: {
    test(state, { payload }) {
      return { ...state, test: payload };
    }
  }
};
