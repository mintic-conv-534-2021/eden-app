//Dependencies
import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';

//Resources
import './App.css';
import "antd/dist/antd.css";

//Internal Components
import Home from "../home/Home";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Router>
        <Layout className="layout">
          <Header>
            <div className="logo" />

            {/* Menu part  */}
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">Home</Menu.Item>
              <Menu.Item key="2">pag 2</Menu.Item>
              <Menu.Item key="3">pag 3</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>

            {/* Breadcrumb (if needed) part  */}
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb>

            {/* Content part  */}
            <div className="site-layout-content">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="*" component={Error} />
              </Switch>
            </div>

          </Content>

          {/* Footer part  */}
          <Footer style={{ textAlign: 'center' }}>
            Footer para condonación...
          </Footer>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
