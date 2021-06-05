//Dependencies
import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Layout} from 'antd';

//Resources
import './App.css';
import "antd/dist/antd.css";

//Internal Components
import Home from "../home/home";
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
          </Header>

          <Content className="main-layout">
            {/* Content part  */}
            <div className="site-layout-content">
              <Switch>
                <Route exact path="/" component={Home} />
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
