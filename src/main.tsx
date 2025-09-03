import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import App from './App.tsx'

// ! é o not null deles, é um valor que não pode ser nulo, por isso se tirar ele continua a funcionar mas pode dar problema no futuro
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
