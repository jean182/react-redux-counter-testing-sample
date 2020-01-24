import React from 'react';
import { Provider } from "react-redux";
import configureStore from "./redux/setupStore";
import Counter from './Counter';
import UserList from './UserList';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Counter />
      <UserList />
    </Provider>
  );
}

export default App;
