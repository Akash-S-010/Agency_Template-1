import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ReactLenis } from "lenis/react";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ReactLenis
        root
        options={{
          lerp: 0.15, // very smooth, slower interpolation
          smoothWheel: true, // makes mouse and trackpad smooth
          duration: 1.6, // scrolls take longer to settle
          smoothTouch: true, // optional: smooth scrolling on touch devices
        }}
      >
          <App />
      </ReactLenis>
    </StrictMode>
)
