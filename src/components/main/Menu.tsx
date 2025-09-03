import React from 'react';
import Logo from './Logo';
import type { MenuProps } from 'antd';
import { Menu as MenuA } from 'antd';
import {
  AppstoreOutlined,
  MailOutlined,
  ExperimentOutlined,
  EllipsisOutlined,
  FundViewOutlined,
  Icon
} from '@ant-design/icons';

type Props = {};

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'logo',
    label: <Logo/>,
    style: {height: '200px', cursor: 'default'},
    disabled: true,
  },
  { type: 'divider' },
  {
    key: 'sub1',
    label: 'Navigation One',
    icon: <ExperimentOutlined />,
  },
  {
    key: 'sub1/2',
    label: 'Navigation One',
    icon: <EllipsisOutlined />,
  },
  {
    type: 'group',
    label: 'Meu grupin',
    children: [
      {
        key: 'sub2',
        label: 'Navigation Two',
        icon: <MailOutlined />,
        children: [
          { key: '1', label: 'Option 1', icon: <AppstoreOutlined /> },
          { key: '2', label: 'Option 2', icon: <FundViewOutlined /> },
        ],
      },
    ],
  },
];

export default function Menu({}: Props) {
  return (
    <MenuA
      items={items}
      mode="inline"
      defaultOpenKeys={['sub1']}
      defaultSelectedKeys={['1']}
    />
  );
}
