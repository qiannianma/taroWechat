import { Component } from "react";
import Taro from '@tarojs/taro';
import { ScrollView,View } from "@tarojs/components";
import { AtButton } from 'taro-ui';
import "taro-ui/dist/style/components/button.scss";
import "./index.less";
import { ThreadList  } from "../../components/threadList";
import { NavBar } from "../../components/navbar";

export default class Index extends Component {
    componentWillMount() {}

    componentDidMount() {}

    componentWillUnmount() {}

    componentDidShow() {}

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

    render() {
        const scrollTop = 0
        const Threshold = 20
        const currentTabIndex=1
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
            <NavBar current={currentTabIndex} background='#f8f8f8' color='#999' tintColor='#6190e8' fixed onClick={this.handleTabbar}
              tabList={[
                    {icon: '\ue627', title: '首页', badge: 8},
                    {icon: '\ue61e', title: '商品'},
                    {icon: '\ue605', title: '个人中心', dot: true},
                ]}
            />
        </View>
    );
  }
}
