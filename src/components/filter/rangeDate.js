import Taro, { Component } from "@tarojs/taro";
import PropTypes from "prop-types";
import { Picker, View } from "@tarojs/components";
import "./rangeDate.scss";
import moment from "moment";
class HXRangeDate extends Component {
  constructor(props) {
    super(props);
  }

  onChange = e => {
    console.log(e);
  };

  render() {
    const { date_start } = this.props;
    const { date_end } = this.props;
    const { onPickerChange } = this.props;
    console.log(this.props);
    return (
      <View className="at-row">
        <View className="at-col">
          <Picker
            mode="date"
            onChange={onPickerChange.bind(this, "date_start")}
          >
            <View className="picker">当前选择：{date_start}</View>
          </Picker>
        </View>
        <View className="at-col">
          <Picker mode="date" onChange={onPickerChange.bind(this, "date_end")}>
            <View className="picker">-：{date_end}</View>
          </Picker>
        </View>
      </View>
    );
  }
}

HXRangeDate.propTypes = {
  // handlePickerChange: PropTypes.func,
  date_start: PropTypes.string,
  date_end: PropTypes.string
};

HXRangeDate.defaultProps = {
  date_start: "2019-01-01",
  date_end: moment().format("YYYY-MM-DD")
};

export default HXRangeDate;
