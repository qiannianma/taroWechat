import React, { Component } from "react";
import { View } from "@tarojs/components";
import VirtualList from "@tarojs/components/virtual-list";
import "./thread.less";

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

class ThreadList extends Component {
    
  render() {
    const  data  = this.props.data;
    const dataLen = data.length;
    return (
        <VirtualList
          className='VirtualList'
          height={500}
          width='100%'
          itemData={data} /* 渲染列表的数据 */
          itemCount={dataLen} /*  渲染列表的长度 */
          itemSize={100}
        >
        {Row}
      </VirtualList>
    );
  }
}

export { ThreadList };
