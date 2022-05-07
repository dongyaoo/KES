import { RadialTreeGraph } from '@ant-design/graphs';
import { useContext, useEffect, useState } from 'react';
import { RelationContext } from '../index';
import styles from './styles.less';

const SPOGraph: React.FC = () => {
  const spo = useContext(RelationContext);
  let data = {
    id: 'SPO',
    value: 'SPO',
    children: new Array(),
  };
  let obj = {};
  spo &&
    spo.map((item: object) => {
      if (!obj.hasOwnProperty(item['relation'])) {
        obj[item['relation']] = [];
      } else {
        obj[item['relation']].push({ id: `${item['head'] + Math.random()}`, value: item['head'] });
        obj[item['relation']].push({ id: `${item['tail'] + Math.random()}`, value: item['tail'] });
      }
    });
  Object.keys(obj).forEach((item: string) => {
    data.children.push({ id: item, value: item, children: obj[item] });
  });

  const config = {
    data,
    nodeCfg: {
      type: 'diamond',
    },
    behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
  };
  return <RadialTreeGraph {...config}></RadialTreeGraph>;
};
export default SPOGraph;
