


import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import {
    AtButton,AtDivider,AtTimeline,AtModal,
    AtModalHeader, AtModalContent, AtModalAction,
    AtTabBar,
} from 'taro-ui'
import { add, minus, asyncAdd } from '../../actions/counter'

import './index.scss'
@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {
    constructor(props){
        super(props)
        this.state={
            toggle:false,
        }
    }
    config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
    handleToggleModal = () =>{
        this.setState({
            toggle:!this.state.toggle,
        })


    }
  render () {
        let {toggle} = this.state
    return (
        <View className='index'>
          <AtButton type='primary' onClick={this.handleToggleModal}></AtButton>
            <AtDivider height={30} />
        <AtButton type='primary' className='add_btn' onClick={this.props.add}>+</AtButton>
            <AtDivider/>

            <AtButton  type='primary' className='dec_btn' onClick={this.props.dec}>-</AtButton>
            <AtDivider/>

            <AtButton type='primary' className='dec_btn' onClick={this.props.asyncAdd}>async</AtButton>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>Hello, World</Text></View>

            <AtTimeline
                items={[
                    { title: '刷牙洗脸' },
                    { title: '吃早餐', color: 'green' },
                    { title: '上班', color: 'red' },
                    { title: '睡觉', color: 'yellow' }
                ]}
            >
            </AtTimeline>
            <AtTimeline
                items={[
                    { title: '刷牙洗脸', icon: 'check-circle' },
                    { title: '吃早餐', icon: 'clock' },
                    { title: '上班', icon: 'clock' },
                    { title: '睡觉', icon: 'clock' }
                ]}
            >
            </AtTimeline>
            <AtTimeline
                items={[
                    { title: '刷牙洗脸' },
                    { title: '吃早餐', color: 'green' },
                    { title: '上班', color: 'red' },
                    { title: '睡觉', color: 'yellow' }
                ]}
            >
            </AtTimeline>
            <AtTimeline
                items={[
                    { title: '刷牙洗脸', icon: 'check-circle' },
                    { title: '吃早餐', icon: 'clock' },
                    { title: '上班', icon: 'clock' },
                    { title: '睡觉', icon: 'clock' }
                ]}
            >
            </AtTimeline>
            <AtModal isOpened = {toggle}
                     onClose={ this.handleClose }
            >
                <AtModalHeader>标题</AtModalHeader>
                <AtModalContent>
                    这里是正文内容，欢迎加入京东凹凸实验室
                    这里是正文内容，欢迎加入京东凹凸实验室
                    这里是正文内容，欢迎加入京东凹凸实验室
                </AtModalContent>
                <AtModalAction> <Button>取消</Button> <Button>确定</Button> </AtModalAction>
            </AtModal>
            <AtTabBar
                fixed
                tabList={[
                    { title: '待办事项', iconType: 'bullet-list', text: 'new' },
                    { title: '拍照', iconType: 'camera' },
                    { title: '文件夹', iconType: 'folder', text: '100', max: '99' }
                ]}
                onClick={this.handleClick.bind(this)}
                current={this.state.current}
            />
      </View>
    )
  }
}

export default Index
