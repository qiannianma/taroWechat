/*
 * @Descripttion:
 * @version:
 * @Author: Jinfeng Ma
 * @Date: 2021-07-01 16:17:01
 * @LastEditors: Jinfeng Ma
 * @LastEditTime: 2021-07-08 16:47:35
 */
import { Component } from "react";
import { View } from "@tarojs/components";
import { AtButton } from 'taro-ui';
import "taro-ui/dist/style/components/button.scss"; // 按需引入

export default class Personal extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
        <View>
            <AtButton className='btn-max-w' type='primary'>Logon</AtButton>
      </View>
    );
  }
}