import { Input } from "antd"
import * as highlight from "highlight.js"
import Stream from "rc-stream"
import * as React from "react"
import * as ReactDOM from "react-dom"
import { Observable } from "rxjs"

class Props { }

class State { }

const Double = Stream.create(data => data * 2)
const MapToValue = Stream.create(data => ({ value: data }))

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
        <h1>Component</h1>

        <p>Why not give Stream a meaningful name? Using <code>Stream.create</code>!</p>

        <pre className="highlight highlight-source-typescript">
          {[
            "const Double = Stream.create(data => data * 2)",
            "const MapToValue = Stream.create(data => ({ value: data }))"
          ].join("\n")}
        </pre>

        <p>Then, we can use these custom Stream!</p>

        <pre className="highlight highlight-source-tsx">
          {[
            "<Double stream={stream$}>",
            "  <MapToValue>",
            "    <Input />",
            "  </MapToValue>",
            "</Double>"
          ].join("\n")}
        </pre>

        <Double stream={stream$}>
          <MapToValue>
            <Input />
          </MapToValue>
        </Double>
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
