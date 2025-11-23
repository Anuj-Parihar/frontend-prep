import React, { useState } from 'react'
import './index.css'
import explorer from "./data/data.js";
import Folder from './components/Folder.jsx';
const App = () => {
  const [explorerData, setExplorerData] = useState(explorer);
  // console.log(explorerData);
  
  return (
    <div className='App'>
      <Folder  explorer = {explorerData}/>
    </div>
  )
}

export default App