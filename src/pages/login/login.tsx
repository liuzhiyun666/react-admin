import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import login from './login.less';

const tailLayout = {
  labelCol: { justify: 'center' },
};
const Login = () => {
  // 声明一个叫 “count” 的 state 变量。
  const [count, setCount] = useState(0);
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div id={login.login}>
      <div className={login.login_block}>
        <div className={login.login_main}>
          <Form
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item>
              <p className={login.login_title}>流量网站管理端</p>
            </Form.Item>
            <Form.Item
              label="账号"
              name="username"
              rules={[{ required: true, message: '请输入账号!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="账号"
              name="password"
              rules={[{ required: true, message: '请输入密码!' }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={login.login_button}
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      {/*<i>You clicked {count} times</i>
      <button onClick={() => setCount(count + 1)}>Click me</button>*/}
    </div>
  );
};
export default Login;
