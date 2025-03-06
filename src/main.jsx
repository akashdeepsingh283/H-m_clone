
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter}from 'react-router-dom'
import ShopContextProvider from './context/ShopContext.jsx'
import DarkProvider from './context/DarkmodeContext.jsx';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <DarkProvider>
  <ShopContextProvider> 
    <App />
    </ShopContextProvider> 
  </DarkProvider>  
  </BrowserRouter>,
)
