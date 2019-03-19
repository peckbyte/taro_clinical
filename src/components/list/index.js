import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtList, AtListItem, AtPagination, AtSwipeAction } from "taro-ui";

export default class HXList extends Taro.Component {
  constructor(props) {
    super(props);
  }

  handleSwipeOpened = (index, e) => {
    console.log(e);
  };
  render() {
    const { data } = this.props;
    return (
      <View>
        <View>
          {data ? (
            <AtList>
              {data.map((item, index) => {
                return (
                  <AtSwipeAction
                    key={item.id}
                    isOpened={false}
                    autoClose={true}
                    onOpened={this.handleSwipeOpened.bind(this, index)}
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
