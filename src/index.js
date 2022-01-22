import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from './redux/store';

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

