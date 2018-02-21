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
    const stream$ = Observable.interval(500).startWith(0)

    return (
      <div>
        <h1>Nested</h1>

        <p>If we want to double our stream, we write this code generally:</p>

        <pre className="highlight highlight-source-tsx">
          {[
            "<Stream stream={stream$} handle={stream =>",
            "  stream",
            "    .map(data => data * 2)",
            "    .map(data => ({ value: data }))",
            "}>",
            "  <Input />",
            "</Stream>"
          ].join("\n")}
        </pre>

        <Stream stream={stream$} handle={stream =>
          stream
            .map(data => data * 2)
            .map(data => ({ value: data }))
        }>
          <Input />
        </Stream>

        <br /><br />

        <h2>Nested Stream</h2>

        <p>We can also separate to two Stream:</p>

        <pre className="highlight highlight-source-tsx">
          {[
            "<Stream stream={stream$} handle={stream => stream.map(data => data * 2)}>",
            "  <Stream handle={stream => stream.map(data => ({ value: data }))}>",
            "    <Input />",
            "  </Stream>",
            "</Stream>"
          ].join("\n")}
        </pre>

        <Stream stream={stream$} handle={stream => stream.map(data => data * 2)}>
          <Stream handle={stream => stream.map(data => ({ value: data }))}>
            <Input />
          </Stream>
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
