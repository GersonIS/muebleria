import { UiProvider } from '@/context/ui'
import '@/styles/globals.css'
import { CssBaseline } from '@mui/material'

export default function App({ Component, pageProps }) {
  return (
    <UiProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </UiProvider>
  )
}
