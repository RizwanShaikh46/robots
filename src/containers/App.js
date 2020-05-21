import React, { useState, useEffect } from 'react'
import CardList from '../components/CardList'
import { robots } from '../data/robots'
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'


const App = () => {
  const [robot, setRobot] = useState(robots)
  const [searchField, setSearchField] = useState('')

  const onSearchChange = (event) => {
    setSearchField(event.target.value)
  }

  useEffect(() => {

    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(user => setRobot(user))
  })

  const filteredRobot = robot.filter(item => {
    return item.name.toLowerCase().includes(searchField.toLowerCase())
  })

  return !robot.length ? <h1 className='tc'>Loading</h1> :
    (<div className='tc'>
      <h1 className='f1'>Robo Friends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
        <CardList robots={filteredRobot} />
        </ErrorBoundary>
      </Scroll>
    </div>
    )

}


export default App 