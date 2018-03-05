import * as highlight from "highlight.js"
import * as React from "react"
import * as ReactDOM from "react-dom"

class Props { }

class State { }

export default class Page extends React.PureComponent<Props, State> {
  public static defaultProps = new Props()
  public state = new State()

  public componentDidMount() {
    this.freshHighlight()
  }

  public render() {
    return (
      <div>
        <h1>Compare to callback</h1>

        <p>Normal callback data format:</p>

        <pre className="highlight highlight-source-jsx">
          {[
            "<Table",
            "  dataSource={this.props.value}",
            "  dataSourceFormatter={toObjectArray}",
            "/>"
          ].join("\n")}
        </pre>

        <p><code>rc-stream</code> ways:</p>

        <pre className="highlight highlight-source-jsx">
          {[
            "<ToObjectArray stream={this.props.value$}>",
            "  <Table />",
            "</ToObjectArray>"
          ].join("\n")}
        </pre>

        <h2>Reactive programming</h2>

        <p>This is the only way to bind Observable source to components.</p>

        <h2>Non-invasive</h2>

        <p>
          What if <code>Table</code> doesn't have this callback <code>dataSourceFormatter</code>?
        </p>
        <p>
          <code>rc-stream</code> help you handle data formatter in midway.
        </p>

        <h2>Expansibility</h2>

        <p>
          You can intercept any props, by using your custom stream components.
        </p>

        <h2>Visualization</h2>

        <p>Stream is a real component, so you can use it visually! Imagine a data processing container that can be dragged.</p>
      </div>
    )
  }

  private freshHighlight = () => {
    const markdownContainer = ReactDOM.findDOMNode(this)
    if (!markdownContainer) {
      return
    }
    Array.from(markdownContainer.querySelectorAll("pre")).forEach(eachPre => {
      highlight.highlightBlock(eachPre)
    })
  }
}
