import React, { useState } from 'react';
import { 
  Card, 
  Input, 
  Button, 
  Table, 
  Tag, 
  Avatar, 
  Space, 
  Pagination,
  Row,
  Col
} from 'antd';
import { 
  SearchOutlined, 
  ReloadOutlined, 
  PlusOutlined,
  EditOutlined,
  ShopOutlined,
  CarOutlined,
  StopOutlined,
  CheckCircleOutlined
} from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import MainLayout from '../../components/MainLayout';
import './index.css';

const { Search } = Input;

interface BrandData {
  key: string;
  id: string;
  logo: string;   
  name: string;
  firstLetter: string;
  storeCount: number;
  carCount: number;
  status: 'active' | 'inactive';
  createTime: string;
}

const BrandManagement: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // 模拟品牌数据
  const brandData: BrandData[] = [
    {
      key: '1',
      id: 'BR001',
      logo: 'https://miaoduo.fbcontent.cn/private/resource/image/19879608c36e245-257aea49-bbfc-44cd-addb-353126ba46b6.jpeg',
      name: '奥迪',
      firstLetter: 'A',
      storeCount: 24,
      carCount: 56,
      status: 'active',
      createTime: '2023-01-15 14:23',
    },
    {
      key: '2',
      id: 'BR002',
      logo: 'https://miaoduo.fbcontent.cn/private/resource/image/19879608c3e606a-a0a7903a-d798-4d90-a2c2-4a2c572bdbd2.jpeg',
      name: '宝马',
      firstLetter: 'B',
      storeCount: 18,
      carCount: 42,
      status: 'active',
      createTime: '2023-02-10 09:45',
    },
    {
      key: '3',
      id: 'BR003',
      logo: 'https://miaoduo.fbcontent.cn/private/resource/image/19879608c3fd832-e9c0fe34-cf0f-4aed-b5d1-86c1bbd2b974.jpeg',
      name: '奔驰',
      firstLetter: 'B',
      storeCount: 21,
      carCount: 38,
      status: 'active',
      createTime: '2023-02-12 11:30',
    },
    {
      key: '4',
      id: 'BR004',
      logo: 'https://miaoduo.fbcontent.cn/private/resource/image/19879608c3f8d17-1e354740-bf73-4cd6-9f72-548ffc6d086e.jpeg',
      name: '丰田',
      firstLetter: 'F',
      storeCount: 15,
      carCount: 33,
      status: 'active',
      createTime: '2023-03-05 16:20',
    },
    {
      key: '5',
      id: 'BR005',
      logo: 'https://miaoduo.fbcontent.cn/private/resource/image/19879608c3fd516-1fd1d29a-a0c5-4a8f-a90c-4ed813a28e6f.jpeg',
      name: '本田',
      firstLetter: 'B',
      storeCount: 12,
      carCount: 27,
      status: 'inactive',
      createTime: '2023-03-20 10:15',
    },
  ];

  const handleSearch = (value: string) => {
    setSearchValue(value);
    console.log('搜索品牌:', value);
  };

  const handleReset = () => {
    setSearchValue('');
    console.log('重置搜索');
  };

  const handleAddBrand = () => {
    console.log('新增品牌');
  };

  const handleEdit = (record: BrandData) => {
    console.log('编辑品牌:', record);
  };

  const handleManageStores = (record: BrandData) => {
    console.log('管理门店:', record);
  };

  const handleManageCars = (record: BrandData) => {
    console.log('管理车型:', record);
  };

  const handleToggleStatus = (record: BrandData) => {
    console.log('切换状态:', record);
  };

  const columns: ColumnsType<BrandData> = [
    {
      title: '品牌ID',
      dataIndex: 'id',
      key: 'id',
      width: 84,
      render: (text: string) => <span>{text}</span>,
    },
    {
      title: '品牌Logo',
      dataIndex: 'logo',
      key: 'logo',
      width: 81,
      render: (logo: string) => (
        <Avatar 
          size={38} 
          src={logo}
          style={{ borderRadius: 6 }}
        />
      ),
    },
    {
      title: '品牌名称',
      dataIndex: 'name',
      key: 'name',
      width: 79,
      render: (text: string) => <span>{text}</span>,
    },
    {
      title: '首字母',
      dataIndex: 'firstLetter',
      key: 'firstLetter',
      width: 57,
      render: (text: string) => <span>{text}</span>,
    },
    {
      title: '门店数量',
      dataIndex: 'storeCount',
      key: 'storeCount',
      width: 66,
      render: (count: number) => <span>{count}</span>,
    },
    {
      title: '车型数量',
      dataIndex: 'carCount',
      key: 'carCount',
      width: 66,
      render: (count: number) => <span>{count}</span>,
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      width: 87,
      render: (status: string) => (
        <Tag 
          color={status === 'active' ? 'success' : 'default'}
          style={{ 
            borderRadius: 4,
            fontSize: 12,
            padding: '1px 7px'
          }}
        >
          {status === 'active' ? '启用' : '禁用'}
        </Tag>
      ),
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
      width: 107,
      render: (text: string) => <span>{text}</span>,
    },
    {
      title: '操作',
      key: 'action',
      width: 'auto',
      render: (_: unknown, record: BrandData) => (
        <Space size={16}>
          <Button 
            type="text" 
            size="small"
            icon={<EditOutlined />}
            style={{ color: '#00BD97' }}
            onClick={() => handleEdit(record)}
          >
            编辑
          </Button>
          <Button 
            type="text" 
            size="small"
            icon={<ShopOutlined />}
            style={{ color: '#00BD97' }}
            onClick={() => handleManageStores(record)}
          >
            管理门店
          </Button>
          <Button 
            type="text" 
            size="small"
            icon={<CarOutlined />}
            style={{ color: '#00BD97' }}
            onClick={() => handleManageCars(record)}
          >
            管理车型
          </Button>
          <Button 
            type="text" 
            size="small"
            icon={record.status === 'active' ? <StopOutlined /> : <CheckCircleOutlined />}
            style={{ color: record.status === 'active' ? '#FF4D4F' : '#52C41A' }}
            onClick={() => handleToggleStatus(record)}
          >
            {record.status === 'active' ? '禁用' : '启用'}
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
      notificationCount={3}
      onLogout={handleLogout}
      onSettings={handleSettings}
      onProfile={handleProfile}
    >
      <div className="brand-management-container">
        {/* 搜索区域 */}
        <Card className="search-card">
          <Row gutter={16} align="middle">
            <Col>
              <span className="search-label">品牌名称</span>
            </Col>
            <Col flex="auto">
              <Search
                placeholder="请输入品牌名称"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onSearch={handleSearch}
                style={{ width: 240 }}
              />
            </Col>
            <Col>
              <Button 
                type="primary" 
                icon={<SearchOutlined />}
                onClick={() => handleSearch(searchValue)}
                style={{ backgroundColor: '#00BD97', borderColor: '#00BD97' }}
              >
                查询
              </Button>
            </Col>
            <Col>
              <Button 
                icon={<ReloadOutlined />}
                onClick={handleReset}
              >
                重置
              </Button>
            </Col>
          </Row>
        </Card>

        {/* 品牌列表 */}
        <Card 
          className="brand-list-card"
          title="品牌列表"
          extra={
            <Button 
              type="primary" 
              icon={<PlusOutlined />}
              onClick={handleAddBrand}
              style={{ backgroundColor: '#00BD97', borderColor: '#00BD97' }}
            >
              新增品牌
            </Button>
          }
        >
          <Table
            columns={columns}
            dataSource={brandData}
            pagination={false}
            className="brand-table"
            rowClassName="brand-table-row"
          />
          
          {/* 分页 */}
          <div className="pagination-container">
            <span className="total-count">共 {brandData.length} 条记录</span>
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={50}
              showSizeChanger
              showQuickJumper
              showTotal={(total, range) => `${range[0]}-${range[1]} / ${total}`}
              onChange={(page, size) => {
                setCurrentPage(page);
                setPageSize(size || 10);
              }}
            />
          </div>
        </Card>
      </div>
    </MainLayout>
  );
};

export default BrandManagement;
