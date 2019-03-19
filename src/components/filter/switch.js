import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import PropTypes from "prop-types";
import { AtSwitch } from "taro-ui";
import "./switch.scss";
class HxSwitch extends Taro.Component {
  static propTypes = {
    handleChange: PropTypes.func,
    checkeds: PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {
      onFatherChange,
      checkeds: { benzu, recent }
    } = this.props;
    return (
      <View className="at-row">
        <View className="at-col at-col-4">
          <AtSwitch
            title="本组"
            checked={benzu}
            onChange={onFatherChange.bind(this, "benzu")}
          />
        </View>
        <View className="at-col at-col-4">
          <AtSwitch
            title="近1月"
            checked={recent}
            onChange={onFatherChange.bind(this, "month")}
          />
        </View>
      </View>
    );
  }
}

HxSwitch.defaultProps = {
  checkeds: { benzu: true, recent: false }
};

export default HxSwitch;
