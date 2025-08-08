import React from 'react';
import { Menu, Layout } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
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
  { key: 'dashboard', icon: <BarChartOutlined />, label: '数据看板', path: '/home' },
  { key: 'car', icon: <CarOutlined />, label: '车型管理', path: '/car-management' },
  { key: 'sku', icon: <DatabaseOutlined />, label: 'SKU管理', path: '/sku-management' },
  { key: 'order', icon: <ShoppingCartOutlined />, label: '订单管理', path: '/order-management' },
  { key: 'supplier', icon: <ClusterOutlined />, label: '供应商管理', path: '/supplier-management' },
  { key: 'user', icon: <UserOutlined />, label: '用户管理', path: '/user-management' },
  { key: 'referrer', icon: <TeamOutlined />, label: '推客管理', path: '/referrer-management' },
  { key: 'operation', icon: <AppstoreOutlined />, label: '运营管理', path: '/operation-management' },
  { key: 'finance', icon: <DollarOutlined />, label: '财务中心', path: '/finance-management' },
  { key: 'system', icon: <SettingOutlined />, label: '系统设置', path: '/system-settings' },
];

interface SiderMenuProps {
  selectedKey?: string;
  onSelect?: (key: string) => void;
}

const SiderMenu: React.FC<SiderMenuProps> = ({ selectedKey, onSelect }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // 根据当前路径确定选中的菜单项
  const getSelectedKey = () => {
    const currentPath = location.pathname;
    const menuItem = menuItems.find(item => item.path === currentPath);
    return menuItem ? menuItem.key : 'dashboard';
  };

  const handleMenuSelect = ({ key }: { key: string }) => {
    const menuItem = menuItems.find(item => item.key === key);
    if (menuItem && menuItem.path) {
      navigate(menuItem.path);
    }
    onSelect?.(key);
  };

  return (
    <Sider width={220} style={{ background: '#fff', borderRight: '1px solid #f0f0f0' }}>
      <div className="logo-area">
        <div className="logo-circle-menu">新车帮买</div>
      </div>
      <Menu
        mode="inline"
        selectedKeys={[selectedKey || getSelectedKey()]}
        style={{ height: '100%', borderRight: 0 }}
        items={menuItems}
        onSelect={handleMenuSelect}
      />
    </Sider>
  );
};

export default SiderMenu;
