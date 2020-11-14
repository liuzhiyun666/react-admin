import {path} from '../nuxt.config';
import crypto from 'crypto';
let connect = require('connect');
let app = connect();

const request = require('request');
//MD5用于给任意数据一个签名 十六进制字符串表示
let md5 = (str)=>{
  str = str.toString()
  const hash = crypto.createHash('md5')
  hash.update(str,'utf8')
  return hash.digest('hex')
}
