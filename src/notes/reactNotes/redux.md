---
type: note
title: Redux
icon: logos:redux
order: 1
date: 2025-03-20
category:
  - React
tag:
  - React
  - Redux
  - 状态管理
sticky: true
star: true
breadcrumb: false
comment: true
headerDepth: 5
# toc: false
---

## 什么是 Redux？

Redux 是 JavaScript 状态容器，提供可预测化的状态管理。它将应用的所有状态存储在一个单一的 store 中，并且只允许通过纯函数来修改状态。

### 核心概念

- **Store**：Redux store 是一个保存应用所有状态的对象
- **State**：Redux store 的内容，就是应用的全部状态
- **Action**：描述状态变化的对象，包含 type 属性和可选的 payload 属性
- **Reducer**：接收当前 state 和 action，返回新 state 的纯函数
- **Dispatch**：Redux store 提供的用于触发 action 的方法
- **Middleware**：Redux 的扩展机制，用于处理异步操作、日志等

### 为什么使用 Redux？

**优点：**
- 可预测的状态管理
- 集中的状态存储
- 易于调试和测试
- 强大的开发者工具
- 大型应用的状态管理更清晰

**使用场景：**
- 应用中有大量的状态需要管理
- 状态频繁更新
- 多个组件需要共享状态
- 需要实现撤销/重做功能

## Redux 基础使用

### 1. 安装依赖

```bash
npm install redux react-redux
```

### 2. 创建 Store

```javascript
import { createStore } from 'redux';

const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const store = createStore(counterReducer);
```

### 3. 在 React 中使用

```javascript
import { Provider, useSelector, useDispatch } from 'react-redux';

// 根组件中提供 store
function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

// 组件中使用 Redux 状态
function Counter() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
  );
}
```

## Redux Toolkit 使用

Redux Toolkit 是 Redux 官方推荐的工具集，它简化了 Redux 的使用方式。

### 1. 安装

```bash
npm install @reduxjs/toolkit react-redux
```

### 2. 创建 Slice

```javascript
import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: state => {
      state.count += 1;
    },
    decrement: state => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    }
  }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer
});
```

### 3. 异步操作

```javascript
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// 创建异步 action
const loginUser = createAsyncThunk(
  'auth/login',
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await fetch('https://api.example.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      
      if (!response.ok) {
        throw new Error('登录失败');
      }
      
      const data = await response.json();
      // 将token存储到localStorage
      localStorage.setItem('token', data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: { 
    user: null,
    token: localStorage.getItem('token'),
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null 
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.status = 'idle';
      localStorage.removeItem('token');
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || '登录失败';
      });
  }
});

export const { logout } = authSlice.actions;
export { loginUser };
export default authSlice.reducer;
```

在组件中使用异步action：

```javascript
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, logout } from './authSlice';

function LoginForm() {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    
    const resultAction = await dispatch(loginUser({ username, password }));
    if (loginUser.fulfilled.match(resultAction)) {
      // 登录成功，可以进行页面跳转
      console.log('登录成功');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {status === 'failed' && <div style={{ color: 'red' }}>{error}</div>}
        <div>
          <label>用户名：</label>
          <input name="username" type="text" required />
        </div>
        <div>
          <label>密码：</label>
          <input name="password" type="password" required />
        </div>
        <button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? '登录中...' : '登录'}
        </button>
      </form>
      <button onClick={() => dispatch(logout())}>退出登录</button>
    </div>
  );
}
```

这个示例展示了：

1. 使用`createAsyncThunk`创建异步action
2. 在异步action中处理API请求和错误
3. 使用`extraReducers`处理异步action的不同状态
4. 在组件中使用异步action并处理loading状态
5. 实现登录和退出功能
6. 使用localStorage持久化token

```javascript
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice';

function Counter() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>
  );
}
```

## Redux DevTools

Redux DevTools 是一个强大的调试工具，可以帮助你追踪状态变化。

### 1. 安装浏览器扩展
- Chrome/Edge: Redux DevTools
- Firefox: Redux DevTools

### 2. 配置 Store

```javascript
// 使用 Redux
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// 使用 Redux Toolkit (已内置支持)
const store = configureStore({
  reducer: rootReducer
});
```

### 3. 调试功能
- 查看 action 历史
- 时间旅行调试
- action 回放
- 状态快照
- 导入/导出状态