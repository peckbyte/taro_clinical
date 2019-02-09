import Taro, { Component } from "@tarojs/taro";

import { View } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { AtButton, AtDivider, AtGrid } from "taro-ui";
import "./index.scss";
@connect(({ test }) => ({
  ...test
}))
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
  login = () => {
    Taro.navigateTo({
      url: "/pages/login/index"
    });
  };
  render() {
    console.log(this.props);
    return (
      <View className="index">
        <View>
          <AtGrid
            data={[
              {
                image:
                  "https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png",
                value: "死亡登记"
              },
              {
                image:
                  "https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png",
                value: "抢救记录"
              },
              {
                image:
                  "https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png",
                value: "传染病"
              },
              {
                image:
                  "https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png",
                value: "特殊用药"
              },
              {
                image:
                  "https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png",
                value: "临床路径"
              },
              {
                image:
                  "https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png",
                value: "危急值"
              }
            ]}
          />
        </View>
      </View>
    );
  }
}

export default Index;
