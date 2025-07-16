import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider , createBrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { Dashboard, Home, InvoiceDetails, Invoices, Login, NewInvoice, Register, Setting, Protected } from './components/index.js'
import store from '../store/store.js'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Login/>
  },{
    path:"/register",
    element:<Register />
  },
  {
    path:"/dashboard",
    element:<Protected > <Dashboard /> </Protected>,
    children:[
      {
        path:"",
        element:<Home />
      },
      {
        path:"home",
        element:<Home />
      },
      {
        path:"invoices",
        element:<Invoices />
      },
      {
        path:"new-invoice",
        element:<NewInvoice />
      },
      {
        path:"settings",
        element:<Setting />
      },
      {
        path:"invoice-details",
        element:<InvoiceDetails />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} /> 
    <App />
    </Provider>
  </StrictMode>,
)
