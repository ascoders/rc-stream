import { Breadcrumb, Icon, Layout, Menu } from "antd"
import "antd/dist/antd.css"
import * as React from "react"
import { Link, RouteComponentProps, withRouter } from "react-router-dom"

const { Header, Content, Footer, Sider } = Layout
const SubMenu = Menu.SubMenu

class Props { }

class State {

}

@(withRouter as any)
export default class Page extends React.PureComponent<Props & RouteComponentProps<any>, State> {
  public static defaultProps = new Props()
  public state = new State()

  public render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider>
          <div style={{ color: "white", display: "flex", alignItems: "center", height: 50, fontSize: 18, paddingLeft: 20 }}>
            rc-stream
          </div>
          <Menu theme="dark" selectedKeys={[this.props.location.pathname]} mode="inline">
            <Menu.Item key="/">
              <Link to="/">Setup</Link>
            </Menu.Item>
            <Menu.Item key="/usage">
              <Link to="/usage">Usage</Link>
            </Menu.Item>
            <Menu.Item key="/nested">
              <Link to="/nested">Nested</Link>
            </Menu.Item>
            <Menu.Item key="/component">
              <Link to="/component">Component</Link>
            </Menu.Item>
            <SubMenu
              key="examples"
              title="Examples"
            >
              <Menu.Item key="/examples/form">
                <Link to="/examples/form">Form</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: 16 }}>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ascoders ©2018 Created by
            <a target="_blank" style={{ marginLeft: 5 }} href="https://github.com/ascoders/pri">Pri</a>
          </Footer>
        </Layout>
      </Layout>
    )
  }
}
