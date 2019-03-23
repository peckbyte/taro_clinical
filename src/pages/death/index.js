import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import Header from "@/components/header/index";
import { AtButton, AtInput } from "taro-ui";
import List from "@/components/list/index";
import { connect } from "@tarojs/redux";
import HXFilter from "@/components/filter";
import HXmodal from "@/components/modal";
@connect(({ death }) => ({
  ...death
}))
export default class Death extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpened: false
    };
  }
  getData = () => {
    this.props.dispatch({
      type: "death/get_data",
      payload: "haha"
    });
    console.log(this.props);
  };

  testData = () => {
    this.props.dispatch({
      type: "death/test_data",
      payload: "test_effect"
    });
  };

  editModal = index => {};
  onListItemClick = (index, e) => {
    switch (e.text) {
      case "修改":
        this.setState({
          isModalOpened: true
        });
        break;
      case "删除":
        console.log("点击删除");
        break;
      default:
        break;
    }
  };

  render() {
    const { isModalOpened } = this.state;
    return (
      <View>
        <Header />
        <HXFilter />
        <AtButton onClick={this.getData}>测试</AtButton>
        <AtButton onClick={this.testData}>测试数据</AtButton>
        <List data={this.props.test} onItemClick={this.onListItemClick} />
        <HXmodal isOpened={isModalOpened}>
          <AtInput name="age" title="年龄" placeholder="请输入患者年龄" />
          <AtInput name="sex" title="性别" />
          <AtInput name="id" title="住院号" />
          <AtInput name="time" title="死亡时间" />
        </HXmodal>
      </View>
    );
  }
}
