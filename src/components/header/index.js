import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import PropTypes from "prop-types";
import "./index.scss";
class Header extends Taro.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title } = this.props;
    return (
      <View className="header">
        <View className="header_title">{title}</View>
      </View>
    );
  }
}

Header.defaultProps = {
  title: "标题"
};

Header.propTypes = {
  title: PropTypes.string
};
export default Header;
