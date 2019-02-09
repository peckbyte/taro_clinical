import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { AtButton } from "taro-ui";
import "./index.scss";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
  testButton = () => {
    console.log("haha");
  };
  render() {
    console.log(this.props);
    return (
      <View className="index">
        <AtButton type="primary" onClick={this.testButton}>
          test
        </AtButton>
      </View>
    );
  }
}

export default Index;
