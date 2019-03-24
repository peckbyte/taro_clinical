/*
 * 参数：data
 * onItemClick   响应点击事件
 * */

import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import {
  AtList,
  AtListItem,
  AtPagination,
  AtSwipeAction,
  AtToast
} from 'taro-ui';

export default class HXList extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {
      openFlag: null,
      data: [],
      currentPageData: [],
      pageSize: 5,
      currentPage: 1,
      dataSize: null
    };
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (this.props.data != nextProps.data) {
      console.log(nextProps.data);
      let nextData = nextProps.data.map(item => {
        return Object.assign(item, { isOpened: false });
      });
      let dataSize = nextData.length;
      let pageSize = this.state.pageSize;
      let pageNum = Math.ceil(dataSize / pageSize);
      let pages_data = [];
      for (let i = 0; i < pageNum; i++) {
        pages_data.push(
          nextData.slice(
            i * pageSize,
            i < pageNum - 1 ? (i + 1) * pageSize : dataSize
          )
        );
      }

      console.log('componentWillReceiveProps');
      console.log(pages_data);
      console.log(pages_data[0]);
      let data = pages_data;
      this.setState({
        data: data,
        currentPage: 1,
        dataSize: dataSize
      });
    }
  }

  handleSwipeOpened = (index, e) => {
    if (this.state.openFlag) {
      let PageData = this.state.currentPageData;
      PageData[this.state.openFlag + 1].isOpened = false;
      this.setState({
        openFlag: index,
        currentPageData: PageData
      });
    } else {
      this.setState({
        openFlag: index
      });
    }
  };

  handlePageChange = (type, current) => {
    console.log('page change');

    console.log(type);
    console.log(current);
  };

  render() {
    const { data, dataSize, pageSize, currentPageData } = this.state;
    const { onItemClick, isLoading } = this.props;
    const currentPageData_test = [];
    console.log('currentPageData');
    for (let i of data) {
      console.log(i);
    }

    return (
      <View>
        <View>
          {isLoading ? (
            <AtToast
              text="加载中"
              status="loading"
              duration={30000}
              isOpened={true}
            />
          ) : null}
        </View>
        <View>
          {currentPageData_test.length != 0 ? (
            <AtList>
              {currentPageData_test.map((item, index) => {
                return (
                  <AtSwipeAction
                    key={item.id}
                    isOpened={item.isOpened}
                    autoClose={true}
                    onOpened={this.handleSwipeOpened.bind(this, index)}
                    onClick={onItemClick.bind(this, index)}
                    options={[
                      {
                        text: '修改',
                        style: {
                          backgroundColor: '#6190E8'
                        }
                      },
                      {
                        text: '删除',
                        style: {
                          backgroundColor: '#FF4949'
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
          <AtPagination
            current={currentPage}
            total={dataSize}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
          />
        </View>
      </View>
    );
  }
}

HXList.defaultProps = {
  data: null
};
