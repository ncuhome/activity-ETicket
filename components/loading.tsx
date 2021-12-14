import React, { FC } from 'react';
// import ReactLoading from "react-loading"; 引入react-loading会导致页面提前跳转

/**
 * @description 该阶段获取不到客户端任何数据
 */
const Loading: FC = () => {
  return (
    <>
    {/* <div style={{width:"100vw" , display:"flex", justifyContent:"center"}}>
      <ReactLoading type = {"bubbles"} color='#4f7b86'/>
    </div> */}
    <p>加载中，请稍后</p>
    </>
  )
}

export default Loading