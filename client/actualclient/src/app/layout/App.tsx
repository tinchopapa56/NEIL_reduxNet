import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import Header from './Header'
import { useState } from 'react'
// import { Outlet } from '@mui/icons-material'
// import About from '../../features/about/About'
import Catalog from '../../features/catalog/Catalog'

import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

const App = () => {

  const [darkMode, setIsDarkMode] = useState<boolean>(false)
  const palette = darkMode ? "dark" : "light"

  const theme = createTheme({
    palette: { mode: palette },
  })
  

  return (
    <ThemeProvider theme={theme}>
        <ToastContainer position="bottom-right" hideProgressBar theme="colored"/>
        <CssBaseline />
        <Header toggleMode={setIsDarkMode} />
        
        
        <Container>
          {/* <Outlet /> */}
          {/* <About /> */}
          <Catalog />
          {/* <About /> */}
        </Container>

    </ThemeProvider>
  )
}

export default App
