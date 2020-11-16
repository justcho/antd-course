import { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';


const { Header, Footer, Sider, Content } = Layout;

const SubMenu = Menu.SubMenu

export default class BasicLayout extends Component {
render() {
  return (
      <Layout>
      <Sider width={256} style={{ minHeight: '100vh', color: 'white' }}>
        这是侧边栏
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