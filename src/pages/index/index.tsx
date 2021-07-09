import { Component } from "react";
import Taro from '@tarojs/taro';
import { ScrollView,View } from "@tarojs/components";
import { AtButton } from 'taro-ui';
import "taro-ui/dist/style/components/button.scss";
import "./index.less";
import { ThreadList  } from "../../components/threadList";

export default class Index extends Component {
    
    
    componentWillMount() {}

    componentDidMount() {}

    componentWillUnmount() {}
    
    componentDidShow () {
     if (typeof this.$scope.getTabBar === 'function' && this.$scope.getTabBar()) {
            this.$scope.getTabBar().$component.setState({selected: 0})
        }
    }

    componentDidHide() { }

    onPullDownRefresh() {
        console.log('下拉刷新')
        setTimeout(() => {
            // 停止下拉刷新
            Taro.stopPullDownRefresh()
        }, 1000)
    }
 
    onReachBottom() {
        console.log('触底事件，做上拉加载')
    }

    onScroll(e){
        console.log(e.detail)
    }
    handleTabbar() { }

    // index.js
    

    render() {
        const scrollTop = 0
        const Threshold = 20
        return (
        <View>
            <ScrollView
              className='scrollview'
              scrollWithAnimation
              scrollTop={scrollTop}
              lowerThreshold={Threshold}
              upperThreshold={Threshold}
              onScrollToUpper={this.onPullDownRefresh.bind(this)} 
              onScroll={this.onScroll}		 
            >
                <AtButton>pull refresh</AtButton>
                <ThreadList></ThreadList>
            </ScrollView>
        </View>
    );
  }
}
