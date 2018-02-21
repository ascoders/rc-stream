import { Input } from "antd"
import * as highlight from "highlight.js"
import Stream from "rc-stream"
import * as React from "react"
import * as ReactDOM from "react-dom"
import { Observable } from "rxjs"

class Props { }

class State { }

export default class Page extends React.PureComponent<Props, State> {
  public static defaultProps = new Props()
  public state = new State()

  public componentDidMount() {
    this.freshHighlight()
  }

  public render() {
    const inputStream$ = Observable.interval(1000).startWith(0).map(data => ({ value: data }))
    const stream$ = Observable.interval(500).startWith(0)

    return (
      <div>
        <h1>Usage</h1>

        <p>First, create observable from your own.</p>

        <pre className="highlight highlight-source-typescript">
          {[
            "const inputStream$ = Observable.interval(1000).startWith(0).map(data => ({value:  data }))"
          ].join("\n")}
        </pre>

        <p>
          Then, pass observable to <code>stream</code> props, Stream will subscribe it, and map to child's <code>props</code>.
        </p>

        <pre className="highlight highlight-source-tsx">
          {[
            "<Stream stream={inputStream$}>",
            "  <Input />",
            "</Stream>"
          ].join("\n")}
        </pre>

        <Stream stream={inputStream$}>
          <Input />
        </Stream>
        <br /><br />

        <h2>With handle</h2>

        <p>If <code>stream</code> can't passed to component directly, like following code:</p>

        <pre className="highlight highlight-source-typescript">
          {[
            "const stream$ = Observable.interval(500).startWith(0)"
          ].join("\n")}
        </pre>

        <p>
          You can pass <code>handle</code> to Stream, to transform observable from <code>stream</code>.
        </p>

        <pre className="highlight highlight-source-tsx">
          {[
            "<Stream",
            "  stream={stream$}",
            "  handle={stream => stream.map(data => ({ value: data }))}",
            ">",
            "  <Input />",
            "</Stream>"
          ].join("\n")}
        </pre>

        <Stream stream={stream$} handle={stream => stream.map(data => ({ value: data }))}>
          <Input />
        </Stream>
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
