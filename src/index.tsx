import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/reset.scss';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import App from './App';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const queryClient = new QueryClient();

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Provider>
  </BrowserRouter>
);
