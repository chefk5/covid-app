import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import './App.css'
import useAxiosGet from './hooks/useAxiosGet'
import ToggleColor from './components/ToggleColor'
import Dashboard from './screens/Dashboard'
import CountrySelector from './components/CountrySelector'

function App() {
  const { data, loading, error } = useAxiosGet('https://covid.ourworldindata.org/data/owid-covid-data.json')

  return (
    <Box >
      <ToggleColor />
      <CountrySelector />
      <Dashboard />
      {/* {loading ? <Text>Loading...</Text> : <p>not Loading...</p>} */}

    </Box>
  )
}

export default App
