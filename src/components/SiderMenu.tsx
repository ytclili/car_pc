import React, { useMemo, useState, useCallback } from 'react';
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
  BranchesOutlined,
  ControlOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const menuItems = [
  { key: 'dashboard', icon: <BarChartOutlined />, label: '数据看板', path: '/home' },
  {
    key: 'brand',
    icon: <BranchesOutlined />,
    label: '品牌管理',
    children: [
      { key: 'car-management', icon: <CarOutlined />, label: '车型管理', path: '/car-management' },
      { key: 'brand-control', icon: <ControlOutlined />, label: '品牌管控', path: '/brand-control' },
    ],
  },
  { key: 'sku', icon: <DatabaseOutlined />, label: 'SKU管理', path: '/sku-management' },
  { key: 'order', icon: <ShoppingCartOutlined />, label: '订单管理', path: '/order-management' },
  { key: 'supplier', icon: <ClusterOutlined />, label: '供应商管理', path: '/supplier-management' },
  { key: 'user', icon: <UserOutlined />, label: '用户管理', path: '/user-management' },
  { key: 'referrer', icon: <TeamOutlined />, label: '推客管理', path: '/referrer-management' },
  { key: 'operation', icon: <AppstoreOutlined />, label: '运营管理', path: '/operation-management' },
  { key: 'finance', icon: <DollarOutlined />, label: '财务中心', path: '/finance-management' },
  { key: 'system', icon: <SettingOutlined />, label: '系统设置', path: '/system-settings' },
];

// 预计算路径到菜单key的映射，避免每次重新计算
const pathToKeyMap = new Map<string, string>();
const buildPathMap = (items: any[]) => {
  items.forEach(item => {
    if (item.path) {
      pathToKeyMap.set(item.path, item.key);
    }
    if (item.children) {
      buildPathMap(item.children);
    }
  });
};
buildPathMap(menuItems);

interface SiderMenuProps {}

const SiderMenu: React.FC<SiderMenuProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openKeys, setOpenKeys] = useState<string[]>(['brand']);

  // 直接从缓存中获取选中key，避免递归查找
  const selectedKey = useMemo(() => {
    return pathToKeyMap.get(location.pathname) || 'dashboard';
  }, [location.pathname]);

  // 使用 useCallback 优化点击处理函数
  const handleMenuSelect = useCallback(({ key }: { key: string }) => {
    const findMenuItem = (items: any[]): any => {
      for (const item of items) {
        if (item.key === key) return item;
        if (item.children) {
          const found = findMenuItem(item.children);
          if (found) return found;
        }
      }
      return null;
    };
    
    const menuItem = findMenuItem(menuItems);
    if (menuItem?.path) {
      navigate(menuItem.path);
    }
  }, [navigate]);

  const handleOpenChange = useCallback((keys: string[]) => {
    setOpenKeys(keys as string[]);
  }, []);

  return (
    <Sider width={220} style={{ background: '#fff', borderRight: '1px solid #f0f0f0' }}>
      <div className="logo-area">
        <div className="logo-circle-menu">新车帮买</div>
      </div>
      <Menu
        mode="inline"
        selectedKeys={[selectedKey]}
        defaultOpenKeys={openKeys}
        style={{ height: '100%', borderRight: 0 }}
        items={menuItems}
        onSelect={handleMenuSelect}
        onOpenChange={handleOpenChange}
      />
    </Sider>
  );
};

export default SiderMenu;
