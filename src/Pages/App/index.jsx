import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import NotFound from '../NotFound'
import './App.css'
import { ArcadeProvider } from '../../Context'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes
}

const App = () => {
  return (
    <ArcadeProvider>
    <BrowserRouter>
    <main>
      <AppRoutes />
    </main>
    </BrowserRouter>
    </ArcadeProvider>
  )
}

export default App
