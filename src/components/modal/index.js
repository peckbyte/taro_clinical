import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import {
  AtModalHeader,
  AtModalContent,
  AtModal,
  AtModalAction,
  AtButton,
  AtInput,
  AtForm
} from 'taro-ui';

class HXModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSave = e => {
    console.log(e);
  };

  render() {
    return (
      <View>
        <AtModal isOpened={this.props.isOpened} onClose={this.props.onClose}>
          <AtModalHeader>修改模态框</AtModalHeader>
          <AtModalContnt>{this.props.children}</AtModalContnt>
          <AtModalAction>
            <AtButton type="primary">取消</AtButton>
            <AtButton type="primary">保存</AtButton>
          </AtModalAction>
        </AtModal>
      </View>
    );
  }
}

export default HXModal;
