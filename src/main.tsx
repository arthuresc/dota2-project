import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './style/index.css';
import App from './App.tsx';
let router = createBrowserRouter([
  {
    path: '/',
    Component: App,
  },
]);

// ! é o not null deles, é um valor que não pode ser nulo, por isso se tirar ele continua a funcionar mas pode dar problema no futuro
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* // <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
);
