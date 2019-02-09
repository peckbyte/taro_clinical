import Mock from "mockjs";

Mock.mock("/todolist.mock/", {
  code: 0,
  message: "操作成功"
});

export default Mock;
