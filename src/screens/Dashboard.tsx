import { Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'
import RankedCharts from '../components/RankedCharts'
import ReportedCases from '../components/ReportedCases'
import { CountryData, GeneralData } from '../components/interfaces'

type Props = {
    data: GeneralData,
    selectedCountry: string
}

function Dashboard({ data, selectedCountry }: Props) {
    return (
        // <Flex >
        <Tabs isLazy isFitted>
            <TabList>
                <Tab>Reported Cases</Tab>
                <Tab>Ranked Charts</Tab>
            </TabList>
            <TabPanels>
                {/* initially mounted */}
                <TabPanel>
                    <ReportedCases data={data} selectedCountry={selectedCountry} />
                </TabPanel>
                {/* initially not mounted */}
                <TabPanel>
                    <RankedCharts />
                </TabPanel>
            </TabPanels>
        </Tabs>
        // </Flex>
    )
}

export default Dashboard