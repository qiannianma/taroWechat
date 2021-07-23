import React,{ Component } from "react";
import Taro from '@tarojs/taro';
import { ScrollView, View } from "@tarojs/components";
import VirtualList from "@tarojs/components/virtual-list";
import { AtButton } from 'taro-ui';
import "taro-ui/dist/style/components/button.scss";
import "./index.less";

// import { ThreadList } from "../../components/threadList";



interface state {
    mockData: object
}

let createRow=({ id, index, data }) => {
        return (
            <View id={id}
              className={index % 2 ? "ListItemOdd" : "ListItemEven"}
            >
                Number: {index} :{data[index]}
            </View>
        );
    }


const Row = React.memo(createRow);
// export default Index

export default class Index extends Component <state> {
    constructor(props:any) {
        super(props);
        this.state = {
            mockData: this.buildData(0)
        }
    }
    
    componentWillMount() {
    //onLoad
        // Taro.getStorage({key:'userInfo'}).then(rst => {   //从缓存中获取用户信息
        //     this.props.setBasicInfo(rst.data)
        // })
    }

    componentDidMount() {
        //接口请求
    }

    componentWillUnmount() { }
    
    componentDidShow() {
        const page = Taro.getCurrentPages()[0];
        if (typeof page.getTabBar === 'function' && page.getTabBar()) {
            page.getTabBar().$component.setState({selected: 0})
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

     buildData(offset = 0) {
        return Array(100)
            .fill(0)
            .map((_, i) => i + offset);
     }
    
    

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
            >
                <AtButton>pull refresh</AtButton>
                    {/* <ThreadList mockData={this.state.mockData}></ThreadList> */}
                <VirtualList
                  className='VirtualList'
                  height={500}
                  width='100%'
                  itemData={this.state.mockData} /* 渲染列表的数据 */
                  itemCount={this.state.mockData.length} /*  渲染列表的长度 */
                  itemSize={100}
                >
                    {Row}
                </VirtualList>
            </ScrollView>
        </View>
    );
  }
}

