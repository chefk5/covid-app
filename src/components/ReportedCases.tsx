import React, { useEffect, useMemo } from 'react'
import { LineChart, LineSeries } from 'reaviz'
import { Radio, Stack, Box, Flex, RadioGroup } from '@chakra-ui/react'
import { CountryData, CovidData, GeneralData } from './interfaces'

type Props = {
    data: GeneralData,
    selectedCountry: string
}

interface graphData {
    key: Date, data: number | string
}

const ReportedCases = ({ data, selectedCountry }: Props) => {
    const [metric, setMetric] = React.useState<string>('cases')
    const [type, setType] = React.useState<string>('new')
    const [graphData, setGraphData] = React.useState<graphData[]>([])

    const selectedCountryData: CovidData[] = useMemo(() => {
        console.log('memo hook')
        return selectedCountry === '' ? data['OWID_INT'].data : data[selectedCountry]?.data
    }, [selectedCountry, data])

    const prepapreGraphData = () => {
        const arr: graphData[] = []
        const selected_metrics = `${type}_${metric}`

        selectedCountryData.map(el => {
            if (el[selected_metrics as keyof CovidData] != undefined) {
                arr.push({ key: new Date(el.date), data: el[selected_metrics as keyof CovidData] })
            }
        })
        setGraphData(arr)
    }

    useEffect(() => {
        prepapreGraphData()
        console.log('ho')
    }, [selectedCountryData, metric, type])

    return (
        <>
            <Flex mt={10}>
                <LineChart
                    height={400}
                    data={graphData}
                    series={<LineSeries symbols={null} />}
                />

            </Flex>
            <Flex justify={'center'} gap={20} marginTop={10} >
                <RadioGroup onChange={setMetric} value={metric}>
                    <Stack direction=s>

                        <Radio value="deaths">Death count</Radio>
                        <Radio value="cases">Confirmed cases</Radio>
                    </Stack>
                </RadioGroup>
                <RadioGroup onChange={setType} value={type}>
                    <Stack direction="column">
                        <Radio value="new">Daily new values</Radio>
                        <Radio value="total">Cumulative mode</Radio>
                    </Stack>
                </RadioGroup>
            </Flex>
        </>
    )
}

export default ReportedCases
