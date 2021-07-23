/*
 * @Descripttion:
 * @version:
 * @Author: Jinfeng Ma
 * @Date: 2021-07-01 16:17:01
 * @LastEditors: Jinfeng Ma
 * @LastEditTime: 2021-07-16 15:30:22
 */
import { Component } from "react";
import { View } from "@tarojs/components";
import Taro from '@tarojs/taro';
import { AtButton } from 'taro-ui';
import "taro-ui/dist/style/components/button.scss"; // 按需引入

export default class Personal extends Component {
    // user.js

    componentWillMount() {
        

  }

  componentDidMount() {}

  componentWillUnmount() { }

  componentDidShow() {
    const page = Taro.getCurrentPages()[0];
    if (typeof page.getTabBar === 'function' && page.getTabBar()) {
        page.getTabBar().$component.setState({selected: 2})
    }
  }

    componentDidHide() { }
    
    

  render() {
    return (
        <View>
            <AtButton className='btn-max-w' type='primary'>Logon</AtButton>
      </View>
    );
  }
}