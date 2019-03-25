import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import Header from '@/components/header/index';
import { AtButton, AtInput, AtToast } from 'taro-ui';
import List from '@/components/list/index';
import { connect } from '@tarojs/redux';
import HXFilter from '@/components/filter';
import HXmodal from '@/components/modal';
@connect(({ death, loading }) => ({
  ...death,
  isLoading: loading.effects['death/get_data']
}))
export default class Death extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpened: false
      // isLoading: false
    };
  }

  config = {
    navigationBarTitleText: '死亡登记'
  };

  onPageScroll(obj) {
    console.log(obj);
  }

  getData = () => {
    this.props.dispatch({
      type: 'death/get_data',
      payload: 'haha'
    });
    console.log(this.props);
  };

  testData = () => {
    this.props.dispatch({
      type: 'death/test_data',
      payload: 'test_effect'
    });
  };

  onListItemClick = (index, e) => {
    switch (e.text) {
      case '修改':
        console.log('修改');
        this.setState({
          isModalOpened: true
        });
        break;
      case '删除':
        console.log('点击删除');
        break;
      default:
        break;
    }
  };

  componentWillReceiveProps(nextProps, nextContext) {}

  handleClose = () => {
    this.setState({ isModalOpened: false });
    console.log('触发关闭');
  };

  render() {
    const { isModalOpened } = this.state;
    const { isLoading } = this.props;
    const data = this.props.test;
    return (
      <View>
        <Header />
        <HXFilter />
        <AtButton onClick={this.getData}>测试</AtButton>
        <AtButton onClick={this.testData}>测试数据</AtButton>
        <List
          data={data}
          onItemClick={this.onListItemClick}
          isLoading={isLoading}
        />
        <HXmodal
          isOpened={isModalOpened}
          data={data}
          onClose={this.handleClose}
        >
          <AtInput name="age" title="年龄" placeholder="请输入患者年龄" />
          <AtInput name="sex" title="性别" />
          <AtInput name="id" title="住院号" />
          <AtInput name="time" title="死亡时间" />
        </HXmodal>
      </View>
    );
  }
}
