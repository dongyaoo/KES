import { Table } from 'antd';
import { useContext, useState } from 'react';
import { TokenContext } from '../index';
const columns = [
  {
    title: '抽象符号',
    dataIndex: 'absToken',
  },
  {
    title: '数据包内容',
    dataIndex: 'content',
    render: (text: string) => <a>{text}</a>,
  },
];

const TokenTable: React.FC = () => {
  // const [entityList, setEntityList] = useState<object[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const token:any = useContext(TokenContext);
  console.log('entity', token);
  const onPageChange = (current: any) => {
    setCurrentPage(current);
  };
  const paginationProps = {
    pageSize: 5,
    total: token ? token.length : 0,
    current: currentPage,
    onChange: onPageChange,
  };
  return <Table columns={columns} dataSource={token} pagination={paginationProps}></Table>;
};
export default TokenTable;
