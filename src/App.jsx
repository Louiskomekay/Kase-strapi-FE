//IMPORTS
import { ThemeProvider } from 'styled-components'
import { RouterProvider } from 'react-router-dom'
import { Router, ThemeWrapper } from './utils'
import { useGlobalContext } from './context'


//THEMES STYLING
import { LightTheme, DarkTheme } from './utils'

const App = () => {
  const { theme } = useGlobalContext();

  return (
    <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
      <ThemeWrapper>
        <RouterProvider router={Router} />
      </ThemeWrapper>
    </ThemeProvider>
  )
}

export default App;

