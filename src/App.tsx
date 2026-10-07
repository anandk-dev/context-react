import { useContext } from 'react'
import './App.css'
import { ThemeContext } from './context/ThemeContext.ts'

function App() {
  const context = useContext(ThemeContext);
  if (!context) return null;
  const x: number = "hello"

  const {theme, toggleTheme} = context
  return (
    <>
    <label>DARK THEME</label>
    <input type='checkbox' onChange={() => { toggleTheme()}} />
      <div className={`${theme === 'light' ? 'light' : 'dark'} main-section`}>
        <h1>Vite + React + Context</h1>
      </div>
    </>
  )
}

export default App
