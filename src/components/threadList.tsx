import React, { Component } from "react";
import { View } from "@tarojs/components";
import VirtualList from "@tarojs/components/virtual-list";
import "./thread.less";

function buildData(offset = 0) {
  return Array(100)
    .fill(0)
    .map((_, i) => i + offset);
}


const Row = React.memo(({ id, index, data }) => {
  return (
      <View id={id}
        className={index % 2 ? "ListItemOdd" : "ListItemEven"}
      >
          Number: {index} :{data[index]}
      </View>
  );
});

class ThreadList extends Component {
  state = {
    data: buildData(0)
  };

  render() {
    const { data } = this.state;
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
