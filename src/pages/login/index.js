// import Taro, { Component } from '@tarojs/taro';
// import PieChart from '@/components/charts/PieChart';
// export default class Login extends Component {
//   constructor(props) {
//     super(props);
//   }
//   componentDidMount() {
//     const chartData = [
//       { value: 335, name: '直接访问' },
//       { value: 310, name: '邮件营销' },
//       { value: 234, name: '联盟广告' },
//       { value: 135, name: '视频广告' },
//       { value: 1548, name: '搜索引擎' }
//     ];
//     this.pieChart.refresh(chartData);
//   }
//   refPieChart = node => (this.pieChart = node);
//   render() {
//     return <PieChart ref={this.refPieChart} />;
//   }
// }

import Taro from '@tarojs/taro';

export default class Login extends Taro.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>haha</div>;
  }
}
