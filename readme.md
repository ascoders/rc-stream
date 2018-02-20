# rc-stream

```bash
npm i rc-stream --save
```

## 直接使用 Stream

`stream` 接收任意 `observable` 数据源，`handle` 是对当前 Stream 数据源的处理函数，返回新的数据源。

如果 Stream 的子元素是普通组件，自动开启监听，并将数据源 `map` 的结果解构传递给子组件 `props`。

```typescript
<Stream stream={stream$} handle={stream => stream.map(data => ({ value: data }))}>
    <Input />
</Stream>
```

## 嵌套使用 Stream

如果 Stream 的子元素也是 Stream，会将自己 `handle` 输出的新数据源，作为子元素 `stream` 的输入。

所以，嵌套时只需要给最外层 Stream 传递 `stream` 。

```typescript
<Stream stream={stream$} handle={stream => stream.map(data => data + 1)}>
  <Stream handle={stream => stream.map(data => ({ value: data }))}>
    <Input />
  </Stream>
</Stream>
```

## 封装 Stream

为了在可视化平台使用，我们建议通过 `Stream.create` 静态方法封装自己的 Stream，以屏蔽 `handle` 函数。

建议封装常用的数据流组件，通过巧妙的组合完成任意数据源转换需求。

```typescript
const Plus = Stream.create(
  stream => stream.map(data => data + 1)
)

const MapToValue = Stream.create(
  stream => stream.map(data => ({ value: data }))
)

<Plus stream={stream$}>
  <MapToValue>
    <Input />
  </MapToValue>
</Plus>
```