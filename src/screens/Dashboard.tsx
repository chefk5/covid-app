import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { IGeneralData } from '../interfaces'
import RankedCharts from '../components/RankedCharts'
import ReportedCases from '../components/ReportedCases'

type Props = {
    data: IGeneralData,
    selectedCountry: string
}

function Dashboard({ data, selectedCountry }: Props) {
    return (
        <Tabs isLazy isFitted>
            <TabList>
                <Tab>Reported Cases</Tab>
                <Tab>Ranked Charts</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <ReportedCases data={data} selectedCountry={selectedCountry} />
                </TabPanel>
                <TabPanel>
                    <RankedCharts data={data} selectedCountry={selectedCountry} />
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default Dashboard