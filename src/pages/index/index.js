import Taro, { Component } from "@tarojs/taro";

import { View, Image } from "@tarojs/components";
import { connect, Provider } from "@tarojs/redux";
import { AtButton, AtDivider, AtGrid, AtNoticebar } from "taro-ui";
import "./index.scss";
import Header from "../../components/header/index";
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

  onGridClick = (item, index) => {
    console.log(item);
    console.log(index);
    switch (index) {
      case 1:
        Taro.navigateTo({
          url: "/pages/death/index"
        });
      default:
        console.log("测试点击跳转");
    }
  };
  render() {
    console.log(this.props);
    return (
      <View className="index">
        <Header title="功能选择" />
        <View style="width:100%;height=30px;font-weight:bold;font-size:4.8vw;text-align:center;color:#4A90E2">
          江西省人民医院·呼吸与危重症医学科办公系统
        </View>
        <View>
          <AtNoticebar icon="volume-plus" marquee>
            病案室有数份病历修改，下月10号结束。
          </AtNoticebar>
        </View>
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
            onClick={this.onGridClick}
          />
        </View>
      </View>
    );
  }
}

export default Index;
