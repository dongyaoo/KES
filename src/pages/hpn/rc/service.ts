import { request } from 'umi';

/** 文件上传API 输入文件；输出上传消息<br/> POST /api/file/create */
export async function postFileCreate(body: { file?: any }, options?: { [key: string]: any }) {
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
    // formData 传递数据不需要加 Content-Type 请求头，加了会报错。
    // headers: {
    //   'Content-Type': 'multipart/form-data',
    // },
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 域适应实体抽取API 输入算法参数；输出实体列表数组<br/> POST /api/hpn/nerForSingle */

export async function getHpnRcForManyFake(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/hpn/rcForManyFake', {
    method: 'GET',
    ...(options || {}),
  });
}