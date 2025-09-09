import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from 'react-router';
import './style/index.css';
import App from './App.tsx';
let router = createBrowserRouter([
  {
    path: '/',
    Component: App,
  },
]);
// import * as 'types' from './types/app.d.ts';
// Teste, código não sera aqui e é só para eu testar, mas para testar se estava exportando do app.d.ts
//
import { AuthContextType } from 'types';

const teste: AuthContextType = {
  authed: true,
  login: (value: string) => value + 'oi',
  logout: (value: string) => value + 'tchau',
};
console.log(teste);

// ! é o not null deles, é um valor que não pode ser nulo, por isso se tirar ele continua a funcionar mas pode dar problema no futuro
createRoot(document.getElementById('root')! as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* <RouterProvider router={router} /> */}
  </StrictMode>,
);
