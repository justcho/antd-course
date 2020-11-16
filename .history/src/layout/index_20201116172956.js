import { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import Link from 'umi/link'


const { Header, Footer, Sider, Content } = Layout;

const SubMenu = Menu.SubMenu

export default class BasicLayout extends Component {
render() {
  return (
      <Layout>
      <Sider width={256} style={{ minHeight: '100vh', color: 'white' }}>
      <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px'}}/>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>首页</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="dashboard" /><span>中控</span></span>}
            >
               <Menu.Item key="2"><link to="/dashboard/analysis">分析页</link></Menu.Item>
               <Menu.Item key="3"><link to="/dashboard/monitor">监控页</link></Menu.Item>
               <Menu.Item key="4"><link to="/dashboard/workplace">工作台</link></Menu.Item>
            </SubMenu>
          </Menu>
      </Sider>
      <Layout >
        <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>这是头部</Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            {this.props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2020 Created by Just</Footer>
      </Layout>
    </Layout>
  )
}
}