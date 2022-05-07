import { Table } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { EntityContext } from '../index';
const columns = [
  {
    title: '故障文本',
    dataIndex: 'faultText',
  },
  {
    title: '头实体',
    dataIndex: 'head',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: '尾实体',
    dataIndex: 'tail',
    render: (text: string) => <a>{text}</a>,
  },
];

const EntityTable: React.FC = () => {
  // const [entityList, setEntityList] = useState<object[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const entity = useContext(EntityContext);
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
    total: entity ? entity.length : 0,
    current: currentPage,
    onChange: onPageChange,
  };
  return <Table columns={columns} dataSource={entity} pagination={paginationProps}></Table>;
};
export default EntityTable;
