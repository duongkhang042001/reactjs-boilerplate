import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import Store from './stores/index.ts'

createRoot(document.getElementById('root')!).render(
  <Provider store={Store}>
    <App />
  </Provider>
)
