import React from "react";
import LeftMenu from '@/components/leftMenu/leftMenu.tsx';
import { UserInfoState } from '@/models/userInfo';
interface Props {
  children ?:any,
  userInfo ?: UserInfoState;
}
const Index = (props: Props)=>{
  const { userInfo } = props;
  return(
    <div id="global-div">
      <LeftMenu></LeftMenu>
      <div id="global-right">
        {props.children}
      </div>
    </div>
  )
}
export default Index;
