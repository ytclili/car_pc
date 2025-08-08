import React, { useState } from 'react';
import { Layout, Avatar, Dropdown, Badge, Button, Space, Divider } from 'antd';
import {
  BellOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  DownOutlined,
  MessageOutlined,
} from '@ant-design/icons';
import './HeaderBar.css';

const { Header } = Layout;

interface HeaderBarProps {
  userName?: string;
  userAvatar?: string;
  notificationCount?: number;
  onLogout?: () => void;
  onSettings?: () => void;
  onProfile?: () => void;
}

const HeaderBar: React.FC<HeaderBarProps> = ({
  userName = '管理员',
  userAvatar,
  notificationCount = 0,
  onLogout,
  onSettings,
  onProfile,
}) => {
  const [notificationVisible, setNotificationVisible] = useState(false);

  // 用户菜单项
  const userMenuItems = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: '个人资料',
      onClick: onProfile,
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: '系统设置',
      onClick: onSettings,
    },
    {
      type: 'divider' as const,
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: '退出登录',
      onClick: onLogout,
    },
  ];

  // 通知菜单项
  const notificationItems = [
    {
      key: '1',
      label: (
        <div className="notification-item">
          <div className="notification-title">新订单提醒</div>
          <div className="notification-content">您有3个新订单待处理</div>
          <div className="notification-time">2分钟前</div>
        </div>
      ),
    },
    {
      key: '2',
      label: (
        <div className="notification-item">
          <div className="notification-title">系统通知</div>
          <div className="notification-content">系统将于今晚22:00进行维护</div>
          <div className="notification-time">1小时前</div>
        </div>
      ),
    },
    {
      key: '3',
      label: (
        <div className="notification-item">
          <div className="notification-title">推客申请</div>
          <div className="notification-content">有5个新的推客申请待审核</div>
          <div className="notification-time">3小时前</div>
        </div>
      ),
    },
  ];

  return (
    <Header className="header-bar">
      <div className="header-left">
        <div className="logo">
          <span className="logo-text">新车帮买管理系统</span>
        </div>
      </div>
      
      <div className="header-right">
        <Space size="large">
          {/* 通知 */}
          <Dropdown
            menu={{ items: notificationItems }}
            placement="bottomRight"
            trigger={['click']}
            overlayClassName="notification-dropdown"
          >
            <Badge count={notificationCount} size="small">
              <Button
                type="text"
                icon={<BellOutlined />}
                className="header-icon-btn"
                size="large"
              />
            </Badge>
          </Dropdown>

          <Divider type="vertical" className="header-divider" />

          {/* 用户信息 */}
          <Dropdown
            menu={{ items: userMenuItems }}
            placement="bottomRight"
            trigger={['click']}
          >
            <div className="user-info">
              <Avatar
                size={32}
                src={userAvatar}
                icon={<UserOutlined />}
                className="user-avatar"
              />
              <span className="user-name">{userName}</span>
              <DownOutlined className="user-dropdown-icon" />
            </div>
          </Dropdown>
        </Space>
      </div>
    </Header>
  );
};

export default HeaderBar;
