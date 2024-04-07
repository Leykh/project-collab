import React, { Component } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined, GoogleOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';
import _ from 'lodash';

class HeaderView extends Component {
    render(){
      
const { Header, Content, Footer, Sider } = Layout;

const items1 = _.map(this.props.textMenu,(key) => ({
  key,
  label: `nav ${key}`,
}));

  return (
  <Layout>
    <Header style={{ display: 'flex', alignItems: 'center' }}>
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={items1}
        style={{ flex: 1, minWidth: 0 }}
      />
      <GoogleOutlined  onClick={this.props.auth} style={{ color: 'white', alignItems: 'right' }}/>
    </Header>
  </Layout>
  );
}
}

export default HeaderView;
