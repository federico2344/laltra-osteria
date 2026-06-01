import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

/* Display fonts (titoli) */
import '@fontsource/playfair-display/500.css'
import '@fontsource/playfair-display/600.css'
import '@fontsource/playfair-display/700.css'
import '@fontsource/playfair-display/500-italic.css'
import '@fontsource/cormorant-garamond/500.css'
import '@fontsource/cormorant-garamond/600.css'
import '@fontsource/cormorant-garamond/700.css'
import '@fontsource/dm-serif-display/400.css'
import '@fontsource/bodoni-moda/500.css'
import '@fontsource/bodoni-moda/600.css'
import '@fontsource/bodoni-moda/700.css'
import '@fontsource/marcellus/400.css'
import '@fontsource/fraunces/500.css'
import '@fontsource/fraunces/600.css'
import '@fontsource/fraunces/700.css'
import '@fontsource/eb-garamond/500.css'
import '@fontsource/eb-garamond/600.css'
import '@fontsource/eb-garamond/700.css'
import '@fontsource/tenor-sans/400.css'
import '@fontsource/italiana/400.css'
import '@fontsource/petrona/500.css'
import '@fontsource/petrona/600.css'
import '@fontsource/petrona/700.css'

/* Body fonts (corpo testo) */
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/manrope/400.css'
import '@fontsource/manrope/500.css'
import '@fontsource/manrope/600.css'
import '@fontsource/lora/400.css'
import '@fontsource/lora/500.css'
import '@fontsource/lora/600.css'
import '@fontsource/karla/400.css'
import '@fontsource/karla/500.css'
import '@fontsource/karla/600.css'
import '@fontsource/nunito/400.css'
import '@fontsource/nunito/500.css'
import '@fontsource/nunito/600.css'
import '@fontsource/mulish/400.css'
import '@fontsource/mulish/500.css'
import '@fontsource/mulish/600.css'
import '@fontsource/lato/400.css'
import '@fontsource/lato/700.css'
import '@fontsource/source-sans-3/400.css'
import '@fontsource/source-sans-3/500.css'
import '@fontsource/source-sans-3/600.css'
import '@fontsource/work-sans/400.css'
import '@fontsource/work-sans/500.css'
import '@fontsource/work-sans/600.css'
import '@fontsource/plus-jakarta-sans/400.css'
import '@fontsource/plus-jakarta-sans/500.css'
import '@fontsource/plus-jakarta-sans/600.css'
import '@fontsource/public-sans/400.css'
import '@fontsource/public-sans/500.css'
import '@fontsource/public-sans/600.css'

import './index.css'
import ThemeProvider from './components/ThemeProvider.jsx'

import Layout from './components/Layout.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import HomePage from './pages/HomePage.jsx'
import MenuPage from './pages/MenuPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import WinesPage from './pages/WinesPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import PrivacyPage from './pages/PrivacyPage.jsx'
import CookiePage from './pages/CookiePage.jsx'
import AdminGuidePage from './pages/AdminGuidePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider />
    <BrowserRouter>
      {/* Riporta in cima ad ogni cambio pagina */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="chi-siamo" element={<AboutPage />} />
          <Route path="vini" element={<WinesPage />} />
          <Route path="contatti" element={<ContactPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="cookie" element={<CookiePage />} />
          <Route path="guida-admin" element={<AdminGuidePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
