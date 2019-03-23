import Taro from "@tarojs/taro";
import { getData } from "./service";
export default {
  namespace: "death",
  state: {
    test: []
  },
  effects: {
    *get_data({ payload }, { call, put, select }) {
      const res = yield call(getData, {});
      console.log(res);
      if (res.status == "ok") {
        yield put({
          type: "test",
          payload: { data: res.data }
        });
      }
    },
    *test_data({ payload }, { call, put, select }) {
      console.log(payload);
    }
  },
  reducers: {
    test(state, { payload }) {
      console.log("reducers");

      // 为死亡数据添加isOpened属性，为判断listItem组件的swipeAction是否开启，方便实现在list中显示单个swipeAction
      let deathDataArray = payload.data.patients;
      // if (deathDataArray.length != 0) {
      //   deathDataArray.map(item => {
      //     Object.assign(item, { isOpened: false });
      //   });
      // }
      return { ...state, test: deathDataArray };
    }
  }
};
