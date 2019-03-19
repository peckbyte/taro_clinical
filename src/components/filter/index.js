import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtForm } from "taro-ui";
import "./index.scss";
import HxSwitch from "./switch";
import RangeDate from "./rangeDate";
import moment from "moment";
export default class HXFilter extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {
      ourData: false,
      checkeds: { benzu: true, recent: true },
      date_start: "2016-01-01",
      date_end: moment().format("YYYY-MM-DD")
    };
  }

  onHandleChange = (b, e) => {
    switch (b) {
      case "benzu":
        console.log(`查询${b}的数值`);
        break;
      case "month":
        console.log(`查询${b}的数值`);
        break;
      default:
        break;
    }
  };

  onPickerChange = (name, e) => {
    console.log(name);
    if (name == "date_start") {
      this.setState(
        {
          date_start: e.detail.value
        },
        () => {
          console.log(this.state.date_start);
        }
      );
    } else if (name == "date_end") {
      this.setState(
        {
          date_end: e.detail.value
        },
        () => {
          console.log(this.state.date_start);
        }
      );
    }

    console.log(e);
  };
  render() {
    // let date_now = moment().format("YYYY-MM-DD");
    // console.log(date_now);
    const { checkeds } = this.state;
    return (
      <View>
        <AtForm>
          <View>
            <HxSwitch
              checkeds={checkeds}
              onFatherChange={this.onHandleChange}
            />
          </View>
          <View>
            <RangeDate
              date_start={this.state.date_start}
              date_end={this.state.date_end}
              onPickerChange={this.onPickerChange}
            />
          </View>
        </AtForm>
      </View>
    );
  }
}
