import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtCard } from 'taro-ui';
import CardItem from './cardItem';

class HxCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { note, extra, title, thumb, data } = this.props;
    return (
      <View>
        <AtCard note={note} extra={extra} title={title} thumb={thumb}>
          {data
            ? data.map(item => {
                return <CardItem data={item} />;
              })
            : null}
        </AtCard>
      </View>
    );
  }
}

export default HxCard;
