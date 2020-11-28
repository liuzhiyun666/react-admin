import { Effect } from 'dva';
import { Reducer } from 'redux';
// import { getUserInfo } from '@/services/interfaceName/user';
// import { apiGetBankSelect } from '@/services/interfaceName/common';
// import { apiGetSiteSelect } from '@/services/interfaceName/site';
// import { apiGetBDRole } from '@/services/interfaceName/permission';
export interface UserInfoState {
  agentId: string,
  button: string,
  mobile: string,
  menuList: any[],
  siteLIst: any[],
  roleList: any[],
  bankList: any[],
  nick: string,
  officeId: string,
  userType: boolean,
  logo: string,
  balance: string;
}
interface UserInfoModel {
  namespace: string;
  state: any,
  effects: {
    getUserPerm: Effect;
  };
  reducers: {
    setUserInfo: Reducer<UserInfoState | undefined | any>
  }
}
const initState = {
  agentId: '',
  button: '',
  id: '',
  mobile: '',
  menuList: [],
  siteLIst: [],
  roleList: [],
  bankList: [],
  nick: '',
  officeId: '',
  userType: false,
  logo: ''
}
const Index: UserInfoModel = {
  namespace: 'userInfo',
  state: initState,
  effects: {
    *getUserPerm(_, { call, put }) {
      yield put({
        type: 'setUserInfo',
        payload: initState,
      });
      // const response = yield call(getUserInfo);
      // response.data.userType = response.data.userType == '0' ? true : false;
      // if (response.success) {
      //   const sites = yield apiGetSiteSelect();
      //   if (sites.success) {
      //     response.data.siteLIst = sites.data;
      //   }
        // const role = yield apiGetBDRole();
        // if (role.success) {
        //   response.data.roleList = role.data;
        // }
        // const bank = yield apiGetBankSelect();
        // if (bank.success) {
        //   response.data.bankList = bank.data
        // }
        //put相当于一个 dispatch函数，用来将 Action 发送给 State。
        yield put({
          type: 'setUserInfo',
          payload: response.data,
        });
      }

    // },
  },
  reducers: {
    setUserInfo(state, { payload }) {
      return {
        ...payload
      }
    },
  }

}
export default Index;
