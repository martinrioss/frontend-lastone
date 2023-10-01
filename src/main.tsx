import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './router/Root'
import { RouterProvider } from 'react-router-dom'
import { CssBaseline, createTheme, ThemeProvider } from '@mui/material'
import './index.css'

declare module '@mui/material/styles' {
  interface PaletteOptions {
    blue?: {
      main: string
    }
    font?: {
      main: string
    }
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#1E1E24'
    },
    secondary: {
      main: '#ffffff'
    },
    blue: {
      main: '#5865F2'
    },
    font: {
      main: '#FFF8F0'
    }
  },
  typography: {
    fontFamily: 'Raleway, sans-serif'
  }
})

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline/>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
