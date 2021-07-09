import Taro, { Component } from '@tarojs/taro'
import { CoverView, CoverImage } from '@tarojs/components'
import './index.less'

export default class customTabBar extends Component {

    state = {
        list: [
            {
                iconPath: "resource/home.png",
                selectedIconPath: "resource/home_on.png",
                pagePath: "/pages/index/index",
                text: "主页1"
            },
            {
                iconPath: "resource/category.png",
                selectedIconPath: "resource/category_on.png",
                pagePath: "/pages/category/category",
                text: "分类"
            },
            {
                iconPath: "resource/person.png",
                selectedIconPath: "resource/person_on.png",
                pagePath: "/pages/personal/personal",
                text: "我"
            }
        ],
        num: 9,
        selected: '',
        color: '#999',
        selectedColor: '#B90220',
    }

    switchTab = (index) => {
        const url = this.state.list[index].pagePath
        Taro.switchTab({
            url: url
        })
        let that = this
        that.setState({
            selected: index
        })
    }

    render() {
        return (
            <CoverView className='custom-tab'>
                {
                    this.state.list.map((item, index) => {
                        return <CoverView className='custom-tab-item' onClick={this.switchTab.bind(this, index)} data-path={item.pagePath} key={index}>
                            <CoverImage className='custom-tab-item-img' src={this.state.selected === index ? item.selectedIconPath : item.iconPath} />
                            {index === 1 ? <CoverView className='custom-tab-item-num'>{this.state.num}</CoverView> : ''}
                            <CoverView className='custom-tab-item-text' style={{ color: this.state.selected === index ? this.state.selectedColor : this.state.color }}>
                                {item.text}
                            </CoverView>
                        </CoverView>
                    })
                }
            </CoverView>
        )
    }

    
}