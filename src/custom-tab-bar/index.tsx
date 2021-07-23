import Taro from '@tarojs/taro';
import { Component } from "react";
import { CoverView, CoverImage } from '@tarojs/components';
import './index.less';

interface state {
    color: any,
    selectedColor: string,
    selected: number,
    num:number
}

export default class customTabBar extends Component <any , state> {
    
    constructor(props:any) {
        super(props);
        this.state = {
            color: '#999',
            selectedColor: '#6190e8',
            selected: 0,
            num:3
        }
  }

     List=[
        {
            iconPath: '/resource/home.png',
            selectedIconPath: '/resource/home_on.png',
            pagePath: '/pages/index/index',
            text: '主页'
        },
        {
            iconPath: '/resource/category.png',
            selectedIconPath: '/resource/category_on.png',
            pagePath: '/pages/category/category',
            text: '分类哦'
        },
        {
            iconPath: '/resource/person.png',
            selectedIconPath: '/resource/person_on.png',
            pagePath: '/pages/personal/personal',
            text: '我'
        }
    ];

    switchTab = index => {
        const url = this.List[index].pagePath;
        Taro.switchTab({
            url: url
        });
        this.setState({
            selected: index
        });
    };

    render() {
        return (
            <CoverView className='custom-tab'>
                {this.List.map((item, index) => {
                    return (
                        <CoverView
                          className='custom-tab-item'
                          onClick={this.switchTab.bind(this, index)}
                          data-path={item.pagePath}
                          key={index}
                        >
                            <CoverImage
                              className='custom-tab-item-img'
                              src={
                                    this.state.selected === index
                                        ? item.selectedIconPath
                                        : item.iconPath
                                }
                            />
                            {index === 1 ? (
                                <CoverView className='custom-tab-item-num'>
                                    {this.state.num}
                                </CoverView>
                            ) : (
                                ''
                            )}
                            <CoverView
                              className='custom-tab-item-text'
                              style={{
                                    color:
                                        this.state.selected === index
                                            ? this.state.selectedColor
                                            : this.state.color
                                }}
                            >
                                {item.text}
                            </CoverView>
                        </CoverView>
                    );
                })}
            </CoverView>
        );
    }
}
