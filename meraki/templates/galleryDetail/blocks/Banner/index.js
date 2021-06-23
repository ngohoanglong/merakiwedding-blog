import { createFields, createImageFieldConfig } from "@providers/tinacms/helpers";
import React from 'react';
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import Banner3 from "./Banner3";
import Banner4 from "./Banner4";
import Banner5 from "./Banner5";
import styles from './index.module.css';
const layouts = {
  layout1: Banner1,
  layout2: Banner2,
  layout3: Banner3,
  layout4: Banner4,
  layout5: Banner5,
  default: Banner4,
}

const Banner = (data = {
}) => {
  const Component = layouts[data.layout] || layouts.default
  return <div className={styles.root}><Component {...data} /></div>
};
export const banner_template = {
  defaultItem: {
    title: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUER',
    subTitle: 'Lorem ipsum',
    image: {
      src: '/home/explore-our-wedding/3.jpg'
    },
    image2: {
      src: '/home/explore-our-wedding/3.jpg'
    },
    layout: 'layout4',
    details: [{ label: 'Quốc tịch:', value: ' New Zealand / Anh ' },
    { label: 'Số lượng khách:', value: ' 70 khách ' },
    { label: 'Tính chất:', value: ' Destination wedding ' },
    { label: 'Địa điểm lễ ceremony:', value: ' Bảo tàng Mỹ thuật TPHCM ' },
    { label: 'Địa điểm tiệc tối:', value: ' Park Hyatt Saigon' },]
  },
  fiels: createFields([
    {
      name: 'layout',
      component: 'select',
      options: Object.keys(layouts).map(key => ({
        label: key,
        value: key
      }))
    },
    'title',
    'subTitle',
    {
      name: 'details',
      component: 'group-list',
      itemProps: (item, i) => ({
        key: i,
        label: item.label + ' ' + item.value
      }),
      fields: createFields(['label', 'value'])
    },
    createImageFieldConfig(),
    createImageFieldConfig({ name: 'image2' })
  ])
}
export default Banner