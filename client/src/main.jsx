import React from 'react'
import { store , persistor} from './redux/store'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from "./components/AuthProvider/AuthProvider";

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={'Loading...'} persistor={persistor}>
    <AuthProvider>
  <Router>
    <App />
  </Router>
  </AuthProvider>
    </PersistGate>
  </Provider>
  </React.StrictMode>
)
