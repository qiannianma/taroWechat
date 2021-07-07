import { Component } from "react";
import { View } from "@tarojs/components";
import { ThreadList } from "../../components/threadList";
import "./index.less";

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View>
        <ThreadList></ThreadList>
      </View>
    );
  }
}
