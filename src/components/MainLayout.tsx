import React from 'react';
import { Layout } from 'antd';
import HeaderBar from './HeaderBar';
import Breadcrumbs from './Breadcrumbs';
import SiderMenu from './SiderMenu';
import './MainLayout.css';

const { Content } = Layout;

interface MainLayoutProps {
  children: React.ReactNode;
  userName?: string;
  userAvatar?: string;
  notificationCount?: number;
  onLogout?: () => void;
  onSettings?: () => void;
  onProfile?: () => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  userName,
  userAvatar,
  notificationCount,
  onLogout,
  onSettings,
  onProfile,
}) => {
  return (
    <Layout className="main-layout">
      {/* 侧边栏 */}
      <SiderMenu />
      
      {/* 右侧内容区域 */}
      <Layout className="main-content">
        {/* 头部 */}
        <HeaderBar
          userName={userName}
          userAvatar={userAvatar}
          notificationCount={notificationCount}
          onLogout={onLogout}
          onSettings={onSettings}
          onProfile={onProfile}
        />
        
        {/* 面包屑 + 主内容区域 */}
        <Content className="content-area">
          <Breadcrumbs />
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
