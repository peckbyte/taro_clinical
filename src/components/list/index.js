/*
 * 参数：data
 * onItemClick   响应点击事件
 * */

import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtList, AtListItem, AtPagination, AtSwipeAction } from "taro-ui";

export default class HXList extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {
      openFlag: null,
      data: []
    };
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (this.props.data != nextProps) {
      console.log(nextProps.data);
      let nextData = nextProps.data.map(item => {
        return Object.assign(item, { isOpened: false });
      });
      console.log("componentWillReceiveProps");
      console.log(nextData);
      this.setState({
        data: nextData
      });
    }
  }

  handleSwipeOpened = (index, e) => {
    if (this.state.openFlag) {
      let data = this.state.data;
      data[this.state.openFlag].isOpened = false;
      this.setState({
        openFlag: index,
        data: data
      });
    } else {
      this.setState({
        openFlag: index
      });
    }
  };
  render() {
    const { data } = this.state;
    const { onItemClick } = this.props;
    console.log(data);
    return (
      <View>
        <View>
          {data.length != 0 ? (
            <AtList>
              {data.map((item, index) => {
                return (
                  <AtSwipeAction
                    key={item.id}
                    isOpened={item.isOpened}
                    autoClose={true}
                    onOpened={this.handleSwipeOpened.bind(this, index)}
                    onClick={onItemClick.bind(this, index)}
                    options={[
                      {
                        text: "修改",
                        style: {
                          backgroundColor: "#6190E8"
                        }
                      },
                      {
                        text: "删除",
                        style: {
                          backgroundColor: "#FF4949"
                        }
                      }
                    ]}
                  >
                    <AtListItem
                      title={item.name}
                      note={`管床医生：${item.doctor}`}
                      extraText="2019-01-01"
                    />
                  </AtSwipeAction>
                );
              })}
            </AtList>
          ) : null}
        </View>
        <View>
          <AtPagination total={20} />
        </View>
      </View>
    );
  }
}

HXList.defaultProps = {
  data: null
};
