import { Component } from "react";
import { View, Text } from "@tarojs/components";
import { ThreadList } from "../../components/threadList";
import { AtButton } from "taro-ui";
import { AtFab } from "taro-ui";
import { AtIcon } from "taro-ui";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "taro-ui/dist/style/components/fab.scss";
import "taro-ui/dist/style/components/icon.scss";
import "./index.less";

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return <View className="index">{<ThreadList></ThreadList>}</View>;
  }
}
