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
        <h1>Introduction</h1>

        <p>
          <code>rc-stream</code> is a data stream component, used for react.
        </p>

        <h2>Setup</h2>

        <pre className="highlight highlight-source-shell">
          npm i rc-stream --save
        </pre>
      </div>
    )
  }

  private freshHighlight = () => {
    const markdownContainer = ReactDOM.findDOMNode(this)
    Array.from(markdownContainer.querySelectorAll("pre")).forEach(eachPre => {
      highlight.highlightBlock(eachPre)
    })
  }
}
