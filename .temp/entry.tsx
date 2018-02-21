import { setEnvLocal, setEnvProd, setCustomEnv } from "pri"
import * as React from "react"
import * as ReactDOM from "react-dom"
import Loadable from "react-loadable"
import { Redirect, Route, Switch, Router } from "react-router-dom"
import createBrowserHistory from "history/createBrowserHistory"

const customHistory = createBrowserHistory({
  basename: "/"
})

setEnvLocal()

import LayoutComponent from "/Users/huangziyi/workspace/rc-stream/src/layouts/index"

const LayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <LayoutComponent>
          <Component {...matchProps} />
        </LayoutComponent>
      )}
    />
  )
}

const SrcPagesComponent1964b = Loadable({
  loader: () =>
    import("/Users/huangziyi/workspace/rc-stream/src/pages/component"),
  loading: () => null
})

const SrcPagesIndex37f21 = Loadable({
  loader: () => import("/Users/huangziyi/workspace/rc-stream/src/pages/index"),
  loading: () => null
})

const SrcPagesNested73dfd = Loadable({
  loader: () => import("/Users/huangziyi/workspace/rc-stream/src/pages/nested"),
  loading: () => null
})

const SrcPagesUsagee3a5a = Loadable({
  loader: () => import("/Users/huangziyi/workspace/rc-stream/src/pages/usage"),
  loading: () => null
})

const SrcPagesExamplesForm7c473 = Loadable({
  loader: () =>
    import("/Users/huangziyi/workspace/rc-stream/src/pages/examples/form"),
  loading: () => null
})

class Root extends React.PureComponent<any, any> {
  public componentWillMount() {
    window.addEventListener(
      "message",
      event => {
        const data = event.data
        switch (data.type) {
          case "changeRoute":
            customHistory.push(data.path)
            break
          default:
        }
      },
      false
    )
  }

  public render() {
    return (
      <Router history={customHistory}>
        <Switch>
          <LayoutRoute
            exact
            path="/component"
            component={SrcPagesComponent1964b}
          />

          <LayoutRoute exact path="/" component={SrcPagesIndex37f21} />

          <LayoutRoute exact path="/nested" component={SrcPagesNested73dfd} />

          <LayoutRoute exact path="/usage" component={SrcPagesUsagee3a5a} />

          <LayoutRoute
            exact
            path="/examples/form"
            component={SrcPagesExamplesForm7c473}
          />
        </Switch>
      </Router>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById("root"))
