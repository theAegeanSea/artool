# unionSet 数组合并去重


## 说明

1. 支持普通数组的合并去重
2. 支持对象数组根据某个相同的 key 值合并去重

## 使用方法

```javascript
unionSet(array1,  array2,  [key])
```

## 参数

|参数名|类型      |必填      |说明      |
| ---- | ---- | ---- | ---- |
|   array1   |   Array   |   是   |   传入数组1   |
|   array2   |   Array   |   是   |   传入数组2   |
|   key   |   String   |   否   |   根据此key合并去重对象数组   |

## 返回
(Array) 合并去重后的数组




## 示例

```javascript
// 普通数组去重合并
unionSet([ 1, 2, 5, 5 ], [ 1, 3, 4 ])
// => [ 2, 3, 4 ]

// 根据 key 值，对象数组去重合并
unionSet(
        [{a: 1, b: 2}, {a: 1, v: 2}, {c: 1, v: 2}],
        [{a: 1, d: 6}, {d: 1, x: 2}],
        'a'
      )
// => [{c: 1, v: 2}, {d: 1, x: 2}]
```


