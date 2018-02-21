import { Breadcrumb, Icon, Layout, Menu } from "antd"
import "antd/dist/antd.css"
import "highlight.js/styles/github.css"
import * as React from "react"
import { Link, RouteComponentProps, withRouter } from "react-router-dom"
import { injectGlobal } from "styled-components"

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  code {
    font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;
    padding: 0.2em 0.4em;
    margin: 0;
    background-color: rgba(27,31,35,0.05);
    border-radius: 3px;
  }

  .hljs {
    background-color: #f6f8fa;
  }
`

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
          <a
            href="https://github.com/ascoders/rc-stream"
            target="_blank"
            style={{ color: "white", display: "flex", alignItems: "center", height: 50, fontSize: 18, paddingLeft: 20 }}
          >
            rc-stream
          </a>
          <Menu theme="dark" selectedKeys={[this.props.location.pathname]} mode="inline">
            <Menu.Item key="/">
              <Link to="/">Introduction</Link>
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
              <Menu.Item key="/examples/table">
                <Link to="/examples/table">Table</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="/compare-to-callback">
              <Link to="/compare-to-callback">Compare to callback</Link>
            </Menu.Item>
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
