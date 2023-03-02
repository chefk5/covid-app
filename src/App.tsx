import { Box } from '@chakra-ui/react'
import { useState } from 'react'
import './App.css'
import { CountrySelector } from './components'
import ToggleColor from './components/ToggleColor'
import useAxiosGet from './hooks/useAxiosGet'
import Dashboard from './screens/Dashboard'
import InfoPage from './screens/InfoPage'

function App() {

  const [selectedCountry, setSelectedCountry] = useState<string>('')
  const { data, loading, error, loadingCount } = useAxiosGet('https://covid.ourworldindata.org/data/owid-covid-data.json')

  const selectCountry = (country: string) => {
    setSelectedCountry(country)
  }

  if (loading) {
    return <InfoPage msg={'Fetching latest Covid data ' + loadingCount + ' %'} />
  } else if (data == null || error) {
    return <InfoPage msg={'Error in getting data'} />
  } else {
    return (
      <Box >
        <ToggleColor />
        <CountrySelector data={data} selectCountry={selectCountry} />
        <Dashboard data={data} selectedCountry={selectedCountry} />
      </Box>
    )
  }
}

export default App