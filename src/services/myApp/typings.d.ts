declare namespace API {
  type BLCForMany = {
    /** BERT 路径 */
    bertModel?: string;
    /** 标签转化为 id 的对象 */
    label2id?: Record<string, any>;
    /** 故障数据 Excel 路径 */
    raw?: string;
  };

  type BLCForSingle = {
    /** BERT 路径 */
    bertModel?: string;
    /** 标签转化为 id 的对象 */
    label2id?: Record<string, any>;
    /** 故障数据 */
    raw?: Record<string, any>;
  };

  type Entity = Record<string, any>;

  type EntityArr = Entity[];

  type HpnForMany = {
    /** 元任务样本数 K */
    K?: number;
    /** 元任务类别数 N */
    N?: number;
    /** BERT 路径 */
    bertPath?: string;
    /** HPN checkPoint 路径 */
    model?: string;
    /** 标注好实体的故障数据 Excel 文件路径 */
    raw?: string;
    /** 目标域数据集名 */
    test?: string;
  };

  type HpnForSingle = {
    /** 元任务样本数 K */
    K?: number;
    /** 元任务类别数 N */
    N?: number;
    /** BERT 路径 */
    bertPath?: string;
    /** HPN checkPoint 路径 */
    model?: string;
    /** 标注好实体的故障数据 */
    raw?: Record<string, any>;
    /** 目标域数据集名 */
    test?: string;
  };

  type Spo = Record<string, any>;

  type LoginParams = {
    /** 用户名 */
    name?: string;
    /** 用户密码 */
    pwd?: string;
    autoLogin?: boolean;
    /** 用户操作类型 */
    type?: string;
  };

  type LoginResult = {
    status?: string;
    type?: string;
    currentAuthority?: string;
  };

  type Captcha = {
    code?: string;
    status?: string;
  };

  type ErrorResponse = {
    /** 业务错误码 */
    errorCode?: string;
    /** 业务错误信息 */
    errorMessage?: string;
    /** 业务请求是否成功 */
    success?: boolean;
  };

  type UserInfo = {
    name?: string;
    avatar?: string;
    userid?: string;
    email?: string;
    signature?: string;
    title?: string;
    group?: string;
    tags?: { key?: string; label?: string }[];
    notifyCount?: number;
    unreadCount?: number;
    country?: string;
    access?: string;
    geographic?: {
      province?: { label?: string; key?: string };
      city?: { label?: string; key?: string };
    };
    address?: string;
    phone?: string;
  };

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };

  type undefinedParams = {
    /** checkPoint */
    model: string;
    /** 迭代次数 */
    epoch?: number;
  };

  type undefinedParams = {
    /** 文件名列表 */
    dList: string;
  };

  type undefinedParams = {
    /** 文件名 */
    file: string;
  };

  type undefinedParams = {
    /** 算法模块名 */
    module: 'hpn';
    /** checkPoint名 */
    model: string;
  };

  type undefinedParams = {
    /** 算法模块 */
    module: 'hpn';
  };

  type undefinedParams = {
    /** SPO Excel */
    file: string;
  };
}
