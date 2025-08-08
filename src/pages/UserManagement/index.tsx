import React from 'react';
import { Table, Card, Button, Input, Space, Tag, Avatar } from 'antd';
import { SearchOutlined, PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import MainLayout from '../../components/MainLayout';
import './index.css';

const { Search } = Input;

const UserManagement: React.FC = () => {
  // 模拟用户数据
  const userData = [
    {
      key: '1',
      id: '001',
      name: '张三',
      phone: '13800138001',
      email: 'zhangsan@example.com',
      role: '普通用户',
      status: 'active',
      registerTime: '2024-01-15',
      lastLogin: '2024-03-20 14:30',
    },
    {
      key: '2',
      id: '002',
      name: '李四',
      phone: '13800138002',
      email: 'lisi@example.com',
      role: 'VIP用户',
      status: 'active',
      registerTime: '2024-02-10',
      lastLogin: '2024-03-19 09:15',
    },
    {
      key: '3',
      id: '003',
      name: '王五',
      phone: '13800138003',
      email: 'wangwu@example.com',
      role: '普通用户',
      status: 'inactive',
      registerTime: '2024-01-20',
      lastLogin: '2024-03-15 16:45',
    },
  ];

  const columns = [
    {
      title: '用户ID',
      dataIndex: 'id',
      key: 'id',
      width: 80,
    },
    {
      title: '头像',
      dataIndex: 'avatar',
      key: 'avatar',
      width: 60,
      render: () => <Avatar size={32} icon={<span>用</span>} />,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      width: 100,
    },
    {
      title: '手机号',
      dataIndex: 'phone',
      key: 'phone',
      width: 120,
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
      width: 180,
    },
    {
      title: '用户角色',
      dataIndex: 'role',
      key: 'role',
      width: 100,
      render: (role: string) => (
        <Tag color={role === 'VIP用户' ? 'gold' : 'blue'}>{role}</Tag>
      ),
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      width: 80,
      render: (status: string) => (
        <Tag color={status === 'active' ? 'green' : 'red'}>
          {status === 'active' ? '活跃' : '非活跃'}
        </Tag>
      ),
    },
    {
      title: '注册时间',
      dataIndex: 'registerTime',
      key: 'registerTime',
      width: 120,
    },
    {
      title: '最后登录',
      dataIndex: 'lastLogin',
      key: 'lastLogin',
      width: 150,
    },
    {
      title: '操作',
      key: 'action',
      width: 120,
      render: () => (
        <Space size="small">
          <Button type="text" icon={<EditOutlined />} size="small">
            编辑
          </Button>
          <Button type="text" icon={<DeleteOutlined />} size="small" danger>
            删除
          </Button>
        </Space>
      ),
    },
  ];

  // 头部事件处理函数
  const handleLogout = () => {
    console.log('用户退出登录');
  };

  const handleSettings = () => {
    console.log('打开系统设置');
  };

  const handleProfile = () => {
    console.log('打开个人资料');
  };

  return (
    <MainLayout
      userName="管理员"
      notificationCount={5}
      onLogout={handleLogout}
      onSettings={handleSettings}
      onProfile={handleProfile}
    >
      {/* 统一面包屑替代页面头部 */}

      <Card className="user-management-card">
        <div className="card-header">
          <div className="header-left">
            <Search
              placeholder="搜索用户姓名、手机号或邮箱"
              allowClear
              enterButton={<SearchOutlined />}
              style={{ width: 300 }}
            />
          </div>
          <div className="header-right">
            <Button type="primary" icon={<PlusOutlined />}>
              新增用户
            </Button>
          </div>
        </div>

        <Table
          columns={columns}
          dataSource={userData}
          pagination={{
            total: userData.length,
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) =>
              `第 ${range[0]}-${range[1]} 条/共 ${total} 条`,
          }}
          scroll={{ x: 1200 }}
          className="user-table"
        />
      </Card>
    </MainLayout>
  );
};

export default UserManagement;

