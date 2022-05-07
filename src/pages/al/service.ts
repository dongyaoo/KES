import { request } from 'umi';

export async function getAlNer(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: any,
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