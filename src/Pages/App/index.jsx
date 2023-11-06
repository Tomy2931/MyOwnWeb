import { useRoutes, HashRouter } from 'react-router-dom'
import Home from '../Home'
import NotFound from '../NotFound'
import './App.css'
import { ArcadeProvider } from '../../Context'
import Email from '../Home/Screens/MainTitle/Spanish/contactSpanish/mailSumbit'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/email', element: <Email /> },
  ])

  return routes
}

function App() {



  return (
    <ArcadeProvider>
      <HashRouter> 
        <main>
          <AppRoutes/>
        </main>
      </HashRouter>
    </ArcadeProvider>
  );
}

export default App
