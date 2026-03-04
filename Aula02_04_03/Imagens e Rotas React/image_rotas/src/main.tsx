import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Image from './views/image.tsx';
import Tela2 from './views/tela2.tsx';
import Tela3 from './views/tela.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Image />
    <Tela2 />
    <Tela3 />
  </StrictMode>,
)
