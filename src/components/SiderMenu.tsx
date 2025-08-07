import React from 'react';
import { Menu, Layout } from 'antd';
import {
  AppstoreOutlined,
  CarOutlined,
  DatabaseOutlined,
  UserOutlined,
  TeamOutlined,
  SettingOutlined,
  DollarOutlined,
  ClusterOutlined,
  ShoppingCartOutlined,
  BarChartOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const menuItems = [
  { key: 'dashboard', icon: <BarChartOutlined />, label: '数据看板' },
  { key: 'car', icon: <CarOutlined />, label: '车型管理' },
  { key: 'sku', icon: <DatabaseOutlined />, label: 'SKU管理' },
  { key: 'order', icon: <ShoppingCartOutlined />, label: '订单管理' },
  { key: 'supplier', icon: <ClusterOutlined />, label: '供应商管理' },
  { key: 'user', icon: <UserOutlined />, label: '用户管理' },
  { key: 'referrer', icon: <TeamOutlined />, label: '推客管理' },
  { key: 'operation', icon: <AppstoreOutlined />, label: '运营管理' },
  { key: 'finance', icon: <DollarOutlined />, label: '财务中心' },
  { key: 'system', icon: <SettingOutlined />, label: '系统设置' },
];

interface SiderMenuProps {
  selectedKey?: string;
  onSelect?: (key: string) => void;
}

const SiderMenu: React.FC<SiderMenuProps> = ({ selectedKey = 'dashboard', onSelect }) => {
  return (
    <Sider width={220} style={{ background: '#fff', borderRight: '1px solid #f0f0f0' }}>
      <div className="logo-area">
        <div className="logo-circle-menu">新车帮买</div>
      </div>
      <Menu
        mode="inline"
        selectedKeys={[selectedKey]}
        style={{ height: '100%', borderRight: 0 }}
        items={menuItems}
        onSelect={({ key }) => onSelect?.(key as string)}
      />
    </Sider>
  );
};

export default SiderMenu;
