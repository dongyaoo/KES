// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 三元组可视化API 输入 Excel 文件名；输出 SPO 三元组数组<br/> GET /api/spo/table */
export async function getSpoTable(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.undefinedParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/api/spo/table', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
