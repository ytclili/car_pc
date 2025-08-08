# 布局组件说明

## 概述

本项目提供了一个完整的后台管理系统布局，包含固定的头部导航、侧边栏菜单和主内容区域。

## 组件结构

### 1. MainLayout (主布局组件)
- **文件**: `MainLayout.tsx`
- **功能**: 整合头部、侧边栏和内容区域的完整布局
- **使用方式**:
```tsx
import MainLayout from './components/MainLayout';

const MyPage = () => {
  return (
    <MainLayout
      userName="管理员"
      notificationCount={3}
      onLogout={handleLogout}
      onSettings={handleSettings}
      onProfile={handleProfile}
    >
      {/* 页面内容 */}
    </MainLayout>
  );
};
```

### 2. HeaderBar (头部组件)
- **文件**: `HeaderBar.tsx`
- **功能**: 固定头部，包含系统标题、通知、用户信息等
- **特性**:
  - 固定定位，始终显示在页面顶部
  - 包含通知下拉菜单
  - 用户头像和下拉菜单
  - 响应式设计

### 3. SiderMenu (侧边栏组件)
- **文件**: `SiderMenu.tsx`
- **功能**: 左侧导航菜单，支持路由跳转
- **特性**:
  - 自动根据当前路由高亮对应菜单项
  - 支持路由导航
  - 响应式设计

## 布局特性

### 固定头部
- 头部固定在页面顶部，高度为 64px
- 包含系统标题、通知图标、用户信息
- 支持通知数量显示和下拉菜单

### 侧边栏导航
- 宽度为 220px，固定在左侧
- 支持菜单项高亮和路由跳转
- 包含系统主要功能模块

### 主内容区域
- 自适应宽度，位于侧边栏右侧
- 内容区域有适当的内边距
- 支持滚动

### 响应式设计
- 移动端适配
- 侧边栏在小屏幕上可折叠
- 头部在移动端简化显示

## 使用示例

### 创建新页面
1. 在 `src/pages` 目录下创建新的页面组件
2. 使用 `MainLayout` 包装页面内容
3. 在 `routes.tsx` 中添加路由配置
4. 在 `SiderMenu.tsx` 中添加对应的菜单项

```tsx
// 示例：创建订单管理页面
import React from 'react';
import { Card, Table } from 'antd';
import MainLayout from '../../components/MainLayout';

const OrderManagement: React.FC = () => {
  return (
    <MainLayout
      userName="管理员"
      notificationCount={2}
      onLogout={() => console.log('退出登录')}
      onSettings={() => console.log('打开设置')}
      onProfile={() => console.log('打开个人资料')}
    >
      <div className="page-header">
        <div className="page-title">订单管理</div>
        <div className="page-description">管理系统订单信息</div>
      </div>
      
      <Card>
        {/* 页面内容 */}
      </Card>
    </MainLayout>
  );
};

export default OrderManagement;
```

## 样式定制

### 头部样式
- 修改 `HeaderBar.css` 来自定义头部样式
- 支持自定义颜色、字体、间距等

### 侧边栏样式
- 修改 `SiderMenu.tsx` 中的内联样式
- 可以调整宽度、背景色、菜单样式等

### 主布局样式
- 修改 `MainLayout.css` 来调整整体布局
- 支持自定义内容区域的内边距、背景色等

## 注意事项

1. **路由配置**: 确保在 `routes.tsx` 中正确配置页面路由
2. **菜单同步**: 在 `SiderMenu.tsx` 中添加对应的菜单项和路径
3. **响应式**: 测试在不同屏幕尺寸下的显示效果
4. **权限控制**: 可以根据用户权限动态显示/隐藏菜单项

## 扩展功能

### 添加面包屑导航
可以在页面内容区域顶部添加面包屑组件：

```tsx
import { Breadcrumb } from 'antd';

<div className="breadcrumb-area">
  <Breadcrumb>
    <Breadcrumb.Item>首页</Breadcrumb.Item>
    <Breadcrumb.Item>用户管理</Breadcrumb.Item>
  </Breadcrumb>
</div>
```

### 添加页面标题
每个页面都应该有清晰的标题和描述：

```tsx
<div className="page-header">
  <div className="page-title">页面标题</div>
  <div className="page-description">页面描述信息</div>
</div>
```

### 添加操作按钮
在页面头部添加常用的操作按钮：

```tsx
<div className="page-actions">
  <Button type="primary" icon={<PlusOutlined />}>
    新增
  </Button>
  <Button icon={<ReloadOutlined />}>
    刷新
  </Button>
</div>
```
