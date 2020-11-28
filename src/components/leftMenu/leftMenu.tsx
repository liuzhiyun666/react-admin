import React, {Component} from "react";
import {Menu} from 'antd';
import {connect,} from 'react-redux';
import {UserInfoState} from '@/models/userInfo';
import {ConnectState} from '@/models/connect';
import styles from './leftMenu.less';
const {SubMenu} = Menu;

interface Props {
  userInfo: UserInfoState,
}

class LeftMenu extends Component<Props> {
  render() {
    const {userInfo} = this.props;
    return (
      <div className={styles.leftMenu}>
        <img src="https://cdn.yingzhen99.com/other/2020-08-12/0ecae781-5038-4cd8-9bc9-2957637da6eb.png"/>
        <Menu theme="dark">
          <Menu.Item icon={<i className={`iconfont `}></i>}>管理中心</Menu.Item>
        </Menu>
      </div>)
  }
}

export default connect(({userInfo}: ConnectState) => ({
  userInfo
}))(LeftMenu)
