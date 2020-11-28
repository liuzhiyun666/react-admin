import {UserInfoState} from './userInfo';

interface GlobalModelState {
  collapsed: boolean;
  notices: any[];
}
export interface ConnectState {
  global: GlobalModelState;
  userInfo: UserInfoState;
  COS:any
}
