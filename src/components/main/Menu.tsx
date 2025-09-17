import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import type { MenuProps } from 'antd';
import { Menu as MenuA } from 'antd';
import { NavLink } from 'react-router';
import {
  AppstoreOutlined,
  MailOutlined,
  ExperimentOutlined,
  EllipsisOutlined,
  FundViewOutlined,
  HomeOutlined,
  AliwangwangOutlined,
} from '@ant-design/icons';
import { useLocation } from 'react-router';

type Props = {};

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'logo',
    label: <Logo />,
    style: { height: '200px', cursor: 'default' },
    disabled: true,
  },
  { type: 'divider' },
  {
    key: 'home',
    label: <NavLink to="/">Home</NavLink>,
    icon: <HomeOutlined />,
    // danger: true,
  },
  {
    key: 'pizza',
    label: <NavLink to="/pizza">Pizza</NavLink>,
    icon: <AliwangwangOutlined />,
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

const menuStyle: React.CSSProperties = {
  minHeight: '100%',
};

export default function Menu({}: Props) {
  const [defaultRoute, setDefaultRoute] = useState(['home']);
  const location = useLocation();
  useEffect(() => {
    // const path = location.pathname.startsWith('/')
    //   ? location.pathname.slice(1)
    //   : location.pathname;
    if (location.pathname !== 'home' && location.pathname !== '/') {
      setDefaultRoute([location.pathname.slice(1)]);
    } else {
      setDefaultRoute(['home']);
    }
  }, [location.pathname]);

  console.log(defaultRoute, location.pathname.slice(1), '😁');

  return (
    <MenuA
      items={items}
      mode="inline"
      defaultOpenKeys={['home']}
      defaultSelectedKeys={['home']}
      openKeys={defaultRoute}
      selectedKeys={defaultRoute}
      style={menuStyle}
    />
  );
}
