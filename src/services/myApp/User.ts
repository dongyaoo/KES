// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 用户注册API 输入用户名、密码，输出注册消息<br/> POST /api/user/create */
export async function postUserCreate(body: API.LoginParams, options?: { [key: string]: any }) {
  return request<string>('/api/user/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户登录API 输入用户名、密码等登录参数；输出登录结果 POST /api/user/login */
export async function postUserLogin(body: API.LoginParams, options?: { [key: string]: any }) {
  return request<API.LoginResult>('/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户退出API 输入用户名、密码；输出退出消息<br/> GET /api/user/logout */
export async function getUserLogout(options?: { [key: string]: any }) {
  return request<string>('/api/user/logout', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 用户信息API 获取当前的用户信息 GET /api/user/info */
export async function userInfo(options?: { [key: string]: any }) {
  return request<API.UserInfo>('/api/user/info', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 验证码登录API 发送验证码 POST /api/user/captcha */
export async function postUserCaptcha(
  body: {
    /** 手机号 */
    phone?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.Captcha>('/api/user/captcha', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户更新API 输入用户名、密码；输出更新消息<br/> PUT /api/user/update */
export async function putUserUpdate(body: API.User, options?: { [key: string]: any }) {
  return request<string>('/api/user/update', {
    method: 'PUT',
    data: body,
    ...(options || {}),
  });
}
