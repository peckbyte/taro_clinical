// 组件接收一组包含card组件分布信息的data，根据data生成特定的card并返回结果

import Taro, { Component } from '@tarojs/taro';
import { View, Picker } from '@tarojs/components';
import { AtInput, AtRadio, AtCheckbox, AtButton, AtDivider } from 'taro-ui';

//根据item_data渲染组件并返回
let renderItemType = item_data => {
  console.log(item_data);
  switch (item_data.type) {
    case 'input':
      return (
        <View>
          <AtInput name={item_data.name} onChange={this.handleChange} />
        </View>
      );
      break;
    case 'radio':
      break;
    case 'checkbox':
      break;
    case 'picker':
      break;
    case 'time_picker':
      break;
    default:
      break;
  }
};

class CardItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data } = this.props;
    return (
      <View>
        {data
          ? data.map(item => {
              return renderItemType.bind(this, item);
            })
          : null}
      </View>
    );
  }
}

export default CardItem;
