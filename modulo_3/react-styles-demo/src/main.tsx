import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from "react";

import "./styles/global.css";
import './index.css'
import App from './App.tsx'
import "./theme/theme.css";

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
