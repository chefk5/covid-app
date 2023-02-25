import React from 'react'
import { Text } from '@chakra-ui/react'
import './App.css'
import useAxiosGet from './hooks/useAxiosGet'
import ToggleColor from './components/ToggleColor'

function App() {
  const { data, loading, error } = useAxiosGet('https://covid.ourworldindata.org/data/owid-covid-data.json')

  return (
    <div >
      {loading ? <Text>Loading...</Text> : <p>not Loading...</p>}
      <ToggleColor />
    </div>
  )
}

export default App
