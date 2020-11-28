/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 * 有些通用的配置我们不想每个请求里都去添加，那么可以通过 extend 新建一个 umi-request 实例
 */
import { extend } from 'umi-request';
import { notification } from 'antd';
import { history } from 'umi';
import moment from 'moment';
import crypto from 'crypto';
const cookies = require('js-cookie');
const codeMessage: any = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

/**
 * 异常处理程序
 */
const errorHandler = (error: { response: Response }): Response => {
  const { response } = error;
  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;

    notification.error({
      message: `请求错误 ${status}: ${url}`,
      description: errorText,
    });
  } else if (!response) {
    notification.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常',
    });
  }
  return response;
};

/**
 * 配置request请求时的默认参数
 */
const request = extend({
  errorHandler, // 默认错误处理
  credentials: 'include', // 默认请求是否带上cookie
});
let md5 = (val: string) => {
  val = val.toString();
  const hash = crypto.createHash('md5');
  hash.update(val, 'utf8');
  return hash.digest('hex');
};
// 全局请求拦截器 params参数
request.interceptors.request.use((url?: string, options?: any) => {
  let info: any = {
    api: url,
    v: '1.0',
    ttid: '1.0',
    data: JSON.stringify(options.data),
    mat: cookies.get('mat') ? 'null' : cookies.get('mat'),
    ts: moment().unix(),
    did: '1.0',
  };
  info.sign = md5(
    `api=${info.api}&v=${info.v}&ttid=${info.ttid}&data=${info.data}&mat=${info.mat}&ts=${info.ts}&did=${info.did}&lng=&lat=`,
  );
  return {
    url: url,
    options: { ...info },
  };
});
//响应拦截
request.interceptors.response.use(async (response: any, options: any) => {
  let data = await response.json(); //采用Response流并将其读入完成。它返回一个promise，它解析正文文本的结果为JSON
  if (
    data.result.code == 'user_need_login_token_invalid' ||
    data.result.code == 'no_auth_access' ||
    data.result.code == 'user_need_login_token_expire'
  ) {
    notification.error({
      message: `请求错误`,
      description: data.result.msg,
    });
    history.replace('/login');
    return { data: {}, success: false, msg: data.result.msg };
  }
  if (!data.result.success) {
    notification.error({
      message: `请求错误`,
      description: data.result.msg,
    });
    return { data: {}, success: false, msg: data.result.msg };
  }
  return data.result;
});
export default request;
