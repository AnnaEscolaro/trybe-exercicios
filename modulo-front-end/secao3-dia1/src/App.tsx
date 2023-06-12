// src/App.tsx

import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import CoffeeList from './pages/coffee-list';
import Coffee from './pages/coffee';
import NavBar from './components/nav-bar';
import NotFound from './pages/not-found';
import Layout from './components/layout';

function App() {
  return (
      <>
    {/* <NavBar />
       <Routes>
         <Route path="/" element={ <Home /> } />
         <Route path="/coffees" element={ <CoffeeList /> } />
    <Route path="/coffees/:coffee" element={ <Coffee /> } />
    <Route path="/*" element={ <NotFound /> } />    
       </Routes> */}
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path="coffees" element={ <CoffeeList /> } />
          <Route path="coffees/:coffee" element={ <Coffee /> } />
        </Route>
        <Route path="/*" element={ <NotFound /> } />
      </Routes>
      </>
  )
}

export default App;