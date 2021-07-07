import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Video from './components/Video'
import {Container} from 'react-bootstrap'
const App = () => {
  return (
    <div>
      <Header/>
      <div className="app_container">
      <Sidebar/>
      <Container fluid className="app__main">
      <Video/>
      </Container>
      </div>
    </div>
  )
}

export default App
