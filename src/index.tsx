import * as React from "react"
import { Observable, Subscription } from "rxjs"

class Props {
  public stream?: Observable<any>
  public handle?: (stream: Observable<any>) => (Observable<any>) = (stream: Observable<any>) => stream
}

class State {
  public data?: any = null
}

export default class Stream extends React.PureComponent<Props, State> {
  public static defaultProps = new Props()
  public static streamClass = Stream
  public static create?:
    (handle?: (stream: Observable<any>) => (Observable<any>)) =>
      React.ComponentClass<Props>
    = (handle) => {
      class Wrapper extends React.PureComponent<Props, State> {
        public static streamClass = Stream
        public render() {
          const { stream, handle: propsHandle, ...others } = this.props
          return (
            <Stream {...others} stream={stream} handle={handle || propsHandle} />
          )
        }
      }
      return Wrapper
    }
  public state = new State()

  private subscription: Subscription = null as any

  public componentWillMount() {
    const child = React.Children.only(this.props.children)

    // Subscribe on nearest stream component
    if ((child.type as any).streamClass !== Stream && this.props.handle && this.props.stream) {
      this.subscription = this.props.handle(this.props.stream).subscribe(data => {
        this.setState({ data })
      })
    }
  }

  public componentWillUnmount() {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

  public render() {
    const child = React.Children.only(this.props.children)

    // Stream children
    if ((child.type as any).streamClass === Stream && this.props.handle && this.props.stream) {
      return React.cloneElement(child, {
        stream: this.props.handle(this.props.stream)
      })
    }

    // Normal chilren
    if (!this.state.data) {
      return null
    }

    if (typeof this.state.data !== "object") {
      throw Error("Data should be object when pass to normal component")
    }

    return React.cloneElement(child, { ...this.state.data })
  }
}
