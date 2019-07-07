# unique 数组去重

## 说明

1. 支持普通数组的去重
2. 支持对象数组根据某个相同的 key 值去重

## 使用方法

```javascript
unionSet(array, [key])
```

## 参数

| 参数名 | 类型   | 必填 | 说明                  |
| ------ | ------ | ---- | --------------------- |
| array  | Array  | 是   | 传入数组              |
| key    | String | 否   | 根据此key去重对象数组 |

## 返回
(Array)：去重后的数组


## 示例

```javascript
// 普通数组去重合并
unique([ 1, 2, 5, 5 ]), [ 1, 2, 5 ]
// => [1, 2, 5]

// 根据 key 值，对象数组去重
unique(
        [{a: 1, b: 2}, {a: 1, v: 2}, {c: 1, v: 2}, {a: 1, c: 1}], 'a'
      )
// => [{a: 1, b: 2}, {c: 1, v: 2}, {a: 3, b: 2}]
```
