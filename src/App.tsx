import './App.css'

import { ThemeProvider } from '@/components/theme-provider'
import { Transactions } from '@/components/Transactions'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'

function App() {
  return (
    <ThemeProvider storageKey='vite-ui-theme'>
      <ThemeSwitcher />
      <main className='container mx-auto w-2xl'>
        <h1>Transactions</h1>
        <Transactions />
      </main>
    </ThemeProvider>
  )
}

export default App
