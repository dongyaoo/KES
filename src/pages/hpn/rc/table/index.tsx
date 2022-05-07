import { Table } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { RelationContext } from '../index';
const columns = [
  {
    title: '故障文本',
    dataIndex: 'faultText',
  },
  {
    title: '头实体',
    dataIndex: 'head',
  },
  {
    title: '尾实体',
    dataIndex: 'tail',
  },
  {
    title: '关系',
    dataIndex: 'relation',
    render: (text: string) => <a>{text}</a>,
  },
];

const RelationTable: React.FC = () => {
  // const [entityList, setEntityList] = useState<object[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const relation = useContext(RelationContext);
  // useEffect(() => {
  //   console.log('现在的entity', entity);

  //   setEntityList(entity);
  // }, [entity]);
  // console.log('entity', entity);
  const onPageChange = (current: any) => {
    setCurrentPage(current);
  };
  const paginationProps = {
    pageSize: 5,
    total: relation ? relation.length : 0,
    current: currentPage,
    onChange: onPageChange,
  };
  return <Table columns={columns} dataSource={relation} pagination={paginationProps}></Table>;
};
export default RelationTable;
