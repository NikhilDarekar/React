import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
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
)
