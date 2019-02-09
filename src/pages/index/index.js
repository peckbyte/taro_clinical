import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { AtButton, AtDivider } from "taro-ui";

import "./index.scss";
@connect(({ index }) => ({
  ...index
}))
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
  }
  config = {
    navigationBarTitleText: "首页"
  };

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  handleTest = () => {
    this.props.dispatch({
      type: "save",
      payload: 3
    });
  };
  render() {
    console.log(this.props);
    return (
      <View className="index">
        <AtButton type="primary" onClick={this.handleTest}>
          test
        </AtButton>
        <AtDivider height={30} />
        <AtDivider />
        <View>
          <Text>{this.props.index.test}</Text>
        </View>
        <View>
          <Text>Hello, World</Text>
        </View>
      </View>
    );
  }
}

export default Index;
