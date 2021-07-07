/*
 * @Descripttion:
 * @version:
 * @Author: Jinfeng Ma
 * @Date: 2021-07-01 16:17:01
 * @LastEditors: Jinfeng Ma
 * @LastEditTime: 2021-07-07 16:22:22
 */
import { Component } from "react";
import { View } from "@tarojs/components";
import { AtButton } from 'taro-ui'
// import "./index.less";

export default class Personal extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
        <View>
            <AtButton type='primary'>Logon</AtButton>
      </View>
    );
  }
}