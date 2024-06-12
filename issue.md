# 一. go 语言相关问题
## 1.1 go 中的 struct 第三个字段只是描述吗 和 反射有关系吗，如果有 js 怎么实现
```
type GasFeeData struct {
  Code string  json:"code"
  Msg string  json:"msg"
}
```
```
type GasFeeData struct {
  Code string  json:"code"
  Msg string  json:"msg"
}
```
# 二. go 项目中的问题
## 2.1 wallet2 "github.com/savour-labs/wallet-chain-node/rpc/wallet" wallet2从哪里来
  wallet.pb.go 是怎么生成的 protoc-gen-go 使用方法
  source: savourrpc/wallet.proto
  wallet.proto 我没看到

// 	protoc-gen-go v1.26.0
// 	protoc        v3.19.1
  这两个包干什么的
## 2.2 go 项目中 wallet/fallback 做什么用的
type WalletAdaptor struct{}

func (w *WalletAdaptor) GetSupportCoins(request *wallet.SupportCoinsRequest) (*wallet.SupportCoinsResponse, error) {
	panic("implement me")
}

GetSupportCoins 这相当于 ts 中的 抽象方法吗 应该是

## 2.3 go 项目中的 wallet/MultiClient 作用
能够管理多个客户端并选择最佳的客户端

# 三. go-ethereum 相关问题 和 ehterjs 相关问题
## 3.1 /go-ethereum/accounts/abi/bind  bind 怎么用 是啥
## 3.2 go 代码中 这些事什么意思（github.com/ethereum/go-ethereum/log）
```
h := log.StreamHandler(os.Stdout, log.TerminalFormat(true))
	log.Root().SetHandler(h)
```
日志模块怎么使用，ether js 的日志模块呢


# 四. 项目中 用到的其他库
## 4.1. gprc 对比 rpc 的优点是什么, gprc 的使用
  创建 增加拦截器 断开 调用等
  Dispatcher  Adaptor reflection 怎么使用
## 4.2. /go-resty/resty 是什么 js 中对应什么
   HTTP 和 RESTful 客户端库 
   对应的是 axios fetch
## 4.3. go 中的 go.uber.org/atomic


# 五. go 语言 和 js（ts） 对比问题
## 5.1. go 中的 int uint8 uint 256等 ts 有吗
  没有 ts 怎么精确使用 第三方库吗
## 5.2. go 中的 interface 和 ts 中的 struct 有什么区别， 和 ts 又有什么不一样
## 5.3. go 中的 sync.RWMutex  ts 怎么实现类似功能
## 5.4. go 中的 atomic 和 js 中的原子操作有什么区别
在 TypeScript 中，你可以使用 Atomics 类来进行原子操作。Atomics 类是 ECMAScript 2017 标准的一部分，它提供了一组静态方法，用于在 SharedArrayBuffer 上进行原子操作。
```
// 创建一个共享缓冲区和一个类型数组
let sharedBuffer = new SharedArrayBuffer(16);
let sharedArray = new Int32Array(sharedBuffer);

// 存储一个值
Atomics.store(sharedArray, 0, 10);
console.log(Atomics.load(sharedArray, 0));  // 输出: 10

// 原子地增加该值
Atomics.add(sharedArray, 0, 5);
console.log(Atomics.load(sharedArray, 0));  // 输出: 15
```

## 5.5. go 中的 channel 和 js 中的 eventemitter 有什么区别
  channel 是 goroutine 之间的通信机制，eventemitter 是 js 中的事件机制，两者没有可比性。

# 六. 其他问题
## 6.1. go 项目中 interface 函数经常返回两个参数 js 中 返回元组吗
```
type Client interface {
	GetLatestBlockHeight() (int64, error)
}
```

```
type Client = {
  GetLatestBlockHeight: () => [int64, Error | null]
}
```

