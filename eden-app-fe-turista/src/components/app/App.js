//Dependencies
import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Layout, Menu} from 'antd';
import { Link } from "react-router-dom";

//Resources
import './App.css';
import "antd/dist/antd.css";

//Internal Components
import Home from "../home/home";
import Organization from "../organization/organizations";
import FooterContent from "../footer/footer"
import OrganizationItemDetail from "../organization/organizationItemDetail";

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
              <Menu.Item key="1">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/organizations">Organización</Link>
              </Menu.Item>
              <Menu.Item key="3">Acerca de</Menu.Item>
            </Menu>
          </Header>

          <Content className="main-layout">
            {/* Content part  */}
            <div className="site-layout-content">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/organizations" component={Organization} />
                <Route exact path="/organizations/detail" render={(props) => <OrganizationItemDetail {...props}/>} />
                <Route path="*" component={Error} />
              </Switch>
            </div>
          </Content>

          {/* Footer part  */}
          <Footer style={{ textAlign: 'center' }}>
            <FooterContent />
          </Footer>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
