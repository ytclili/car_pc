import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import "./index.css";
import { Card, Row, Col } from "antd";
import MainLayout from "../../components/MainLayout";

const useEchartResize = (chartRef: React.RefObject<HTMLDivElement | null>, option: any) => {
  useEffect(() => {
    if (!chartRef.current) return;
    const myChart = echarts.init(chartRef.current);
    myChart.setOption(option);
    const handleResize = () => {
      myChart.resize();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      myChart.dispose();
    };
  }, [chartRef, option]);
};

const Home = () => {
  // 订单金额柱状图
  const orderAmountChartRef = useRef<HTMLDivElement>(null);
  // 订单数折线图
  const orderCountChartRef = useRef<HTMLDivElement>(null);
  // 推客新用户折线图
  const referrerUserChartRef = useRef<HTMLDivElement>(null);
  // 推客佣金柱状图
  const referrerCommissionChartRef = useRef<HTMLDivElement>(null);

  useEchartResize(orderAmountChartRef, {
    tooltip: { trigger: "axis" },
    grid: { left: 40, right: 20, bottom: 40, top: 30 },
    xAxis: {
      type: "category",
      data: ["03-01", "03-05", "03-10", "03-15", "03-20", "03-25", "03-30"],
    },
    yAxis: { type: "value" },
    series: [
      {
        data: [3200, 4800, 3500, 5000, 6000, 7000, 7500],
        type: "bar",
        name: "订单金额",
        color: "#00BD97",
        barWidth: 32,
        itemStyle: { borderRadius: [8, 8, 0, 0] },
      },
    ],
  });

  useEchartResize(orderCountChartRef, {
    tooltip: { trigger: "axis" },
    grid: { left: 40, right: 20, bottom: 40, top: 30 },
    xAxis: {
      type: "category",
      data: ["03-01", "03-05", "03-10", "03-15", "03-20", "03-25", "03-30"],
    },
    yAxis: { type: "value" },
    series: [
      {
        data: [120, 180, 150, 200, 220, 260, 300],
        type: "line",
        name: "订单数",
        color: "#1890ff",
        smooth: true,
        areaStyle: { color: "rgba(24,144,255,0.08)" },
        symbol: "circle",
        symbolSize: 8,
        lineStyle: { width: 3 },
      },
    ],
  });

  useEchartResize(referrerUserChartRef, {
    tooltip: { trigger: "axis" },
    grid: { left: 40, right: 20, bottom: 40, top: 30 },
    xAxis: {
      type: "category",
      data: ["03-01", "03-05", "03-10", "03-15", "03-20", "03-25", "03-30"],
    },
    yAxis: { type: "value" },
    series: [
      {
        data: [80, 120, 100, 150, 180, 200, 210],
        type: "line",
        name: "新用户",
        color: "#00BD97",
        smooth: true,
        areaStyle: { color: "rgba(0,189,151,0.08)" },
        symbol: "circle",
        symbolSize: 8,
        lineStyle: { width: 3 },
      },
    ],
  });

  useEchartResize(referrerCommissionChartRef, {
    tooltip: { trigger: "axis" },
    grid: { left: 40, right: 20, bottom: 40, top: 30 },
    xAxis: {
      type: "category",
      data: ["03-01", "03-05", "03-10", "03-15", "03-20", "03-25", "03-30"],
    },
    yAxis: { type: "value" },
    series: [
      {
        data: [12000, 18000, 15000, 20000, 22000, 26000, 30000],
        type: "bar",
        name: "佣金",
        color: "#faad14",
        barWidth: 32,
        itemStyle: { borderRadius: [8, 8, 0, 0] },
      },
    ],
  });

  // 头部事件处理函数
  const handleLogout = () => {
    console.log('用户退出登录');
    // 这里可以添加退出登录的逻辑
  };

  const handleSettings = () => {
    console.log('打开系统设置');
    // 这里可以添加打开设置页面的逻辑
  };

  const handleProfile = () => {
    console.log('打开个人资料');
    // 这里可以添加打开个人资料页面的逻辑
  };

  return (
    <MainLayout
      userName="管理员"
      notificationCount={3}
      onLogout={handleLogout}
      onSettings={handleSettings}
      onProfile={handleProfile}
    >
      <Row gutter={[24, 24]}>
        <Col  span={12} style={{ marginBottom: 12 }}>
          <Card
            title={<span>订单看板</span>}
            extra={<a href="#">查看更多</a>}
            className="dashboard-card"
            bordered={false}
          >
            <Row gutter={16} className="card-stats-row">
              <Col span={6} className="card-stat">
                <div className="stat-label">今日拼单订单</div>
                <div className="stat-value main">
                  124 <span className="stat-rate up">↑6%</span>
                </div>
              </Col>
              <Col span={6} className="card-stat">
                <div className="stat-label">本月累计订单</div>
                <div className="stat-value main green">
                  2,567 <span className="stat-rate up">↑12%</span>
                </div>
              </Col>
              <Col span={6} className="card-stat">
                <div className="stat-label">待购车订单</div>
                <div className="stat-value">46</div>
              </Col>
              <Col span={6} className="card-stat">
                <div className="stat-label">待审核订单</div>
                <div className="stat-value red">35</div>
              </Col>
            </Row>
            <Col span={24} className="card-chart-box">
              <div className="chart-title">近30天订单金额趋势</div>
              <div ref={orderAmountChartRef} className="chart" />
            </Col>
          </Card>
        </Col>
        <Col span={12} style={{ marginBottom: 12 }}>
          <Card
            title={<span>用户看板</span>}
            extra={<a href="#">查看更多</a>}
            className="dashboard-card"
            bordered={false}
          >
            <Row gutter={16} className="card-stats-row">
              <Col span={6} className="card-stat">
                <div className="stat-label">今日拼单订单</div>
                <div className="stat-value main">
                  124 <span className="stat-rate up">↑6%</span>
                </div>
              </Col>
              <Col span={6} className="card-stat">
                <div className="stat-label">本月累计订单</div>
                <div className="stat-value main green">
                  2,567 <span className="stat-rate up">↑12%</span>
                </div>
              </Col>
              <Col span={6} className="card-stat">
                <div className="stat-label">待购车订单</div>
                <div className="stat-value">46</div>
              </Col>
              <Col span={6} className="card-stat">
                <div className="stat-label">待审核订单</div>
                <div className="stat-value red">35</div>
              </Col>
            </Row>

            <Col span={24} className="card-chart-box">
              <div className="chart-title">近30天订单数趋势</div>
              <div ref={orderCountChartRef} className="chart" />
            </Col>
          </Card>
        </Col>
      </Row>

      <Row gutter={[24, 24]}>
        <Col span={12} style={{ marginBottom: 12 }}>
          <Card
            title={<span>推客看板</span>}
            extra={<a href="#">查看更多</a>}
            className="dashboard-card"
            bordered={false}
          >
            <Row gutter={16} className="card-stats-row">
              <Col span={6} className="card-stat">
                <div className="stat-label">总推客数</div>
                <div className="stat-value main">1,284</div>
              </Col>
              <Col span={6} className="card-stat">
                <div className="stat-label">本月新增推客</div>
                <div className="stat-value main green">
                  97 <span className="stat-rate up">↑23%</span>
                </div>
              </Col>
              <Col span={6} className="card-stat">
                <div className="stat-label">本月活跃推客</div>
                <div className="stat-value">586</div>
              </Col>
              <Col span={6} className="card-stat">
                <div className="stat-label">已结算佣金</div>
                <div className="stat-value orange">¥145,892</div>
              </Col>
            </Row>
            <Col span={24} className="card-chart-box">
              <div className="chart-title">近30天新用户趋势</div>
              <div ref={referrerUserChartRef} className="chart" />
            </Col>
          </Card>
        </Col>
        <Col span={12} style={{ marginBottom: 12 }}>
          <Card
            title={<span>财务看板</span>}
            extra={<a href="#">查看更多</a>}
            className="dashboard-card"
            bordered={false}
          >
            <Row gutter={16} className="card-stats-row">
              <Col span={6} className="card-stat">
                <div className="stat-label">总推客数</div>
                <div className="stat-value main">1,284</div>
              </Col>
              <Col span={6} className="card-stat">
                <div className="stat-label">本月新增推客</div>
                <div className="stat-value main green">
                  97 <span className="stat-rate up">↑23%</span>
                </div>
              </Col>
              <Col span={6} className="card-stat">
                <div className="stat-label">本月活跃推客</div>
                <div className="stat-value">586</div>
              </Col>
              <Col span={6} className="card-stat">
                <div className="stat-label">已结算佣金</div>
                <div className="stat-value orange">¥145,892</div>
              </Col>
            </Row>

            <Col span={24} className="card-chart-box">
              <div className="chart-title">近30天佣金趋势</div>
              <div ref={referrerCommissionChartRef} className="chart" />
            </Col>
          </Card>
        </Col>
      </Row>
    </MainLayout>
  );
};

export default Home;
