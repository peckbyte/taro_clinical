import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import Header from "@/components/header/index";
import { AtButton } from "taro-ui";
import List from "@/components/list/index";
import { connect } from "@tarojs/redux";
import HXFilter from "@/components/filter";
@connect(({ death }) => ({
  ...death
}))
export default class Death extends Taro.Component {
  constructor(props) {
    super(props);
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
  render() {
    return (
      <View>
        <Header />
        <HXFilter />
        <AtButton onClick={this.getData}>测试</AtButton>
        <AtButton onClick={this.testData}>测试effect数据</AtButton>
        <List data={this.props.test} />
      </View>
    );
  }
}
