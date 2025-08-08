import React from 'react';
import { Breadcrumb } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { breadcrumbNameMap } from '../routeMeta';

interface BreadcrumbItem {
  path: string;
  title: string;
}

const nameMap = breadcrumbNameMap;

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter(Boolean);

  // Always show root "首页" linking to /home
  const items: BreadcrumbItem[] = [
    { path: '/home', title: '首页' },
  ];

  pathSnippets.forEach((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    // skip duplicating the root when at /home
    if (url === '/home') {
      // Show "数据看板" as the second item for /home
      items.push({ path: url, title: nameMap[url] || '数据看板' });
      return;
    }
    
    // Handle nested routes - add parent menu item for brand management
    if (url === '/car-management' || url === '/brand-control') {
      // Add "品牌管理" as parent breadcrumb
      if (!items.find(item => item.path === '/brand')) {
        items.push({ path: '/brand', title: '品牌管理' });
      }
    }
    
    items.push({ path: url, title: nameMap[url] || url });
  });

  const breadcrumbItems = items.map((item, index) => {
    const isLast = index === items.length - 1;
    return {
      title: isLast ? (
        <span>{item.title}</span>
      ) : (
        <Link to={item.path}>{item.title}</Link>
      ),
    };
  });

  // Hide breadcrumb for login page
  if (location.pathname === '/login') return null;

  return (
    <div className="breadcrumb-bar">
      <Breadcrumb items={breadcrumbItems} />
    </div>
  );
};

export default Breadcrumbs;


