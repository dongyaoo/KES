// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 主动学习API 输入超参数；输出训练记录以及模型文件<br/> GET /api/al/ner */
export async function getAlNer(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.undefinedParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/api/al/ner', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
