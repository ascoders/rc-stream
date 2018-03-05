import { Input, Table } from "antd"
import * as highlight from "highlight.js"
import Stream from "rc-stream"
import * as React from "react"
import * as ReactDOM from "react-dom"
import { Observable } from "rxjs"

class Props { }

class State { }

const fetchUsers$ = Observable.fromPromise(Promise.resolve({
  name: ["Lucy", "Bob"],
  age: [24, 32]
}))
const ToObjectArray = Stream.create(stream => stream.map(data => {
  const arr: any[] = []
  Object.keys(data).map(key => {
    data[key].forEach((value: any, index: number) => {
      if (!arr[index]) {
        arr[index] = {}
      }
      arr[index][key] = value
    })
  })
  return arr
}))
const MapToTable = Stream.create(stream => stream.map(data => ({ dataSource: data })))

export default class Page extends React.PureComponent<Props, State> {
  public static defaultProps = new Props()
  public state = new State()

  public componentDidMount() {
    this.freshHighlight()
  }

  public render() {
    const columns = [{
      title: "Name",
      dataIndex: "name",
      key: "name",
    }, {
      title: "Age",
      dataIndex: "age",
      key: "age",
    }] as any

    return (
      <div>
        <h1>Table</h1>

        <p>For example, the back end gives us the data:</p>

        <pre className="highlight highlight-source-json">
          {[
            "{",
            "  \"name\": [\"Lucy\", \"Bob\"],",
            "  \"age\": [24, 32]",
            "}"
          ].join("\n")}
        </pre>

        <p>But we want:</p>

        <pre className="highlight highlight-source-json">
          {[
            "[{",
            "  \"name\": \"Lucy\",",
            "  \"age\": 24",
            "}, {",
            "  \"name\": \"Bob\",",
            "  \"age\": 32",
            "}]"
          ].join("\n")}
        </pre>

        <p>Let's try to resolve this problem once and for all!</p>

        <h3>ToObjectArray</h3>

        <pre className="highlight highlight-source-json">
          {[
            "const ToObjectArray = Stream.create(stream => stream.map(data => {",
            "  const arr: any[] = []",
            "  Object.keys(data).map(key => {",
            "    data[key].forEach((value: any, index: number) => {",
            "      if (!arr[index]) {",
            "        arr[index] = {}",
            "      }",
            "      arr[index][key] = value",
            "    })",
            "  })",
            "  return arr",
            "}))"
          ].join("\n")}
        </pre>

        <h3>MapToTable</h3>

        <pre className="highlight highlight-source-json">
          {[
            "const MapToTable = Stream.create(stream => stream.map(data => ({ dataSource: data })))"
          ].join("\n")}
        </pre>

        <p>You can save the two React components and reuse it!</p>

        <pre className="highlight highlight-source-jsx">
          {[
            "<ToObjectArray stream={fetchUsers$}>",
            "  <MapToTable>",
            "    <Table rowKey=\"name\" columns={columns} />",
            "  </MapToTable>",
            "</ToObjectArray>"
          ].join("\n")}
        </pre>

        <ToObjectArray stream={fetchUsers$}>
          <MapToTable>
            <Table rowKey="name" columns={columns} />
          </MapToTable>
        </ToObjectArray>
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
