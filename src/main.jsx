import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
import Navigation from './components/Navigation/Navigation.jsx'
import './index.css'
import App from './App.jsx'
import ContactHeader from './components/ContactHeader/ContactHeader.jsx'
import ContactForm from './components/ContactForm/ContactForm.jsx'
import Button from './components/Button/Button.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navigation />
    <ContactHeader />
    <ContactForm />
    <Button />
  </StrictMode>
=======
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
>>>>>>> fa0e237c07be541e27a2f1a8953c7815d0c6fb95
)
