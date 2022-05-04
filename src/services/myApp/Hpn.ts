// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 域适应实体抽取API 输入算法参数；输出实体列表数组<br/> POST /api/hpn/nerForMany */
export async function postHpnNerForMany(body: API.BLCForMany, options?: { [key: string]: any }) {
  return request<{ data?: API.EntityArr[] }>('/api/hpn/nerForMany', {
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 域适应实体抽取API 输入算法参数；输出实体列表数组<br/> POST /api/hpn/nerForSingle */
export async function postHpnNerForSingle(
  body: API.BLCForSingle,
  options?: { [key: string]: any },
) {
  return request<{ data?: API.EntityArr[] }>('/api/hpn/nerForSingle', {
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 域适应关系抽取API 输入算法参数；输出实体关系数组<br/> POST /api/hpn/rcForMany */
export async function postHpnRcForMany(body: API.HpnForMany, options?: { [key: string]: any }) {
  return request<{ data?: string[] }>('/api/hpn/rcForMany', {
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}

/** 域适应关系抽取API 输入算法参数；输出实体关系数组<br/> POST /api/hpn/rcForSingle */
export async function postHpnRcForSingle(body: API.HpnForSingle, options?: { [key: string]: any }) {
  return request<{ data?: string[] }>('/api/hpn/rcForSingle', {
    method: 'POST',
    data: body,
    ...(options || {}),
  });
}
