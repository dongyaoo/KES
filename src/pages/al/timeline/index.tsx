import { Timeline } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { RecordContext } from '../index';
import styles from './styles.less';
const Record: React.FC = () => {
  const record = useContext(RecordContext);

  return (
    <Timeline className={styles.time}>
      {record &&
        record.map((item: any, ind: number) => {
          return <Timeline.Item key={item.key}>{item.text}</Timeline.Item>;
        })}
    </Timeline>
  );
};
export default Record;
