// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 文件上传API 输入文件；输出上传消息<br/> POST /api/file/create */
export async function postFileCreate(body: { file?: string }, options?: { [key: string]: any }) {
  const formData = new FormData();

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      formData.append(
        ele,
        typeof item === 'object' && !(item instanceof File) ? JSON.stringify(item) : item,
      );
    }
  });

  return request<string>('/api/file/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 文件删除API 输入要删除的文件名，以英文逗号隔开；输出删除消息<br/> DELETE /api/file/delete */
export async function deleteFileDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.undefinedParams,
  options?: { [key: string]: any },
) {
  return request<string>('/api/file/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 文件下载API 输入要下载的文件名；输出文件<br/> GET /api/file/download */
export async function getFileDownload(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.undefinedParams,
  options?: { [key: string]: any },
) {
  return request<string>('/api/file/download', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 文件展示API 输出用户文件名列表<br/> GET /api/file/show */
export async function getFileShow(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/file/show', {
    method: 'GET',
    ...(options || {}),
  });
}
