import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import './index.styl'

@connect(({counter}) => ({
  counter
}))
class Index extends Component {

    config = {
    navigationBarTitleText: '首页'
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick = () => {
    this.props.dispatch({
      type: 'counter/add',
      payload: 1
    })
  }

  render () {
    return (
      <View className='index'>
        <Button className='add_btn' onClick={this.handleClick}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>Hello, World</Text></View>
      </View>
    )
  }
}

export default Index
