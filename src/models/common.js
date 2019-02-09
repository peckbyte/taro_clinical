export default {
  namespace: "test",
  state: {
    testData: 1
  },

  effects: {},

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    }
  }
};
