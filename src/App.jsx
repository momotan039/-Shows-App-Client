import { useState } from 'react'
import './App.css'
import Root from './pages/Root';
import Home from './pages/Home';
import { MyRouterProvider } from './components/MyRouterProvider';

function App() {
  return (
    <div className="App">
       <MyRouterProvider/>
    </div>
  )
}

export default App
