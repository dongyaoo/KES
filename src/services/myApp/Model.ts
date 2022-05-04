// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 模型下载API 输入要下载的模型名；输出模型<br/> GET /api/model/download */
export async function getModelDownload(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.undefinedParams,
  options?: { [key: string]: any },
) {
  return request<string>('/api/model/download', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 模型展示API 输出模型文件名列表<br/> GET /api/model/show */
export async function getModelShow(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.undefinedParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/api/model/show', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
