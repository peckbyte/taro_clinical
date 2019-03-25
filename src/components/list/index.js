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
      pageNumber: 1,
      dataSize: null
    };
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (this.props.data != nextProps.data) {
      console.log(nextProps.data);
      let nextData = nextProps.data.map(item => {
        return Object.assign(item, { isOpened: false });
      });
      let { pageSize } = this.state;
      let dataSize_temp = nextData.length;
      let pageNumber_temp = Math.ceil(dataSize_temp / pageSize);
      let currentPageData_init = this.getPageData(nextData, 1);
      console.log(currentPageData_init);
      this.setState({
        data: nextData,
        currentPage: 1,
        pageNumber: pageNumber_temp,
        dataSize: dataSize_temp,
        currentPageData: currentPageData_init
      });
    }

    console.log('receiveProps');
    console.log(this.state.currentPageData);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate');
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('componentWillUpdate');
  }

  componentDidUpdate(prevProps, prevState, prevContext) {
    console.log('componentDidUpdate');
  }
  // 根据state中页面数，从data中提取处展示页面的page_data
  getPageData = (total_data, page) => {
    let { pageSize, pageNumber, dataSize } = this.state;
    let page_start = null;
    let page_end = null;

    if (dataSize) {
      page_start = (page - 1) * pageSize;
      page_end = page < pageNumber ? page * pageSize : dataSize;
    } else {
      page_start = 0;
      page_end = total_data.length > 5 ? 5 : total_data.length;
    }

    let page_data = total_data.slice(page_start, page_end);

    return page_data;
  };

  // closePageSwipe = (data) => {
  //   if(data){
  //     data.map(item => {
  //       item.isOpened = false
  //       return item
  //     })
  //     return data
  //   }
  //   return null
  // }

  handleSwipeOpened = (index, e) => {
    if (this.state.openFlag) {
      let PageData = this.state.currentPageData;
      console.log(`index is ${index}`);
      console.log(this.state.openFlag);
      PageData[this.state.openFlag].isOpened = false;
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

  handlePageChange = e => {
    console.log('page change');

    console.log(e.type);
    console.log(e.current);
    switch (e.type) {
      case 'next':
        this.setState({
          currentPage: this.state.currentPage + 1,
          currentPageData: this.getPageData(
            this.state.data,
            this.state.currentPage + 1
          )
        });
        console.log(`next page = ${this.state.currentPage}`);
        break;
      case 'prev':
        this.setState({
          currentPage: this.state.currentPage - 1,
          currentPageData: this.getPageData(
            this.state.data,
            this.state.currentPage - 1
          )
        });
        break;
      default:
        break;
    }
  };

  render() {
    const { currentPage, pageSize, currentPageData } = this.state;
    const { onItemClick, isLoading } = this.props;
    console.log('currentPageData');
    console.log(currentPageData);
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
          {currentPageData.length != 0 ? (
            <AtList>
              {currentPageData.map((item, index) => {
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
