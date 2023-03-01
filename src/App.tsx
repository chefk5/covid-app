import React, { useState } from 'react'
import { Box, Text } from '@chakra-ui/react'
import './App.css'
import useAxiosGet from './hooks/useAxiosGet'
import ToggleColor from './components/ToggleColor'
import Dashboard from './screens/Dashboard'
import CountrySelector from './components/CountrySelector'

function App() {

  const [selectedCountry, setSelectedCountry] = useState<string>('')
  const { data, loading, error } = useAxiosGet('https://covid.ourworldindata.org/data/owid-covid-data.json')

  const selectCountry = (country: string) => {
    setSelectedCountry(country)
  }

  return (
    ss
    loading ? <p>loading</p>
    : <Box >
      <ToggleColor />
      <CountrySelector data={data} selectCountry={selectCountry} />
      <Dashboard data={data} selectedCountry={selectedCountry} />
      {/* {loading ? <Text>Loading...</Text> : <p>not Loading...</p>} */}

    </Box>
  )
}

export default App
