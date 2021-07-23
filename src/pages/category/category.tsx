/*
 * @Descripttion:
 * @version:
 * @Author: Jinfeng Ma
 * @Date: 2021-07-01 16:17:01
 * @LastEditors: Jinfeng Ma
 * @LastEditTime: 2021-07-12 17:17:17
 */
import { Component } from "react";
import Taro from '@tarojs/taro';
import { View } from "@tarojs/components";
import { AtButton } from 'taro-ui';
import "taro-ui/dist/style/components/button.scss"; // 按需引入

export default class Category extends Component {
    

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() { }

  componentDidShow() {
    const page = Taro.getCurrentPages()[0];
    if (typeof page.getTabBar === 'function' && page.getTabBar()) {
        page.getTabBar().$component.setState({selected: 1})
    }
  }

  componentDidHide() {}

  render() {
    return (
        <View>
            <AtButton className='btn-max-w' type='primary'>Category</AtButton>
      </View>
    );
  }
}