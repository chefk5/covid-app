import { Flex, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useMemo } from 'react'
import { LineChart, LineSeries } from 'reaviz'
import { ICovidData, IGeneralData } from '../interfaces'

type Props = {
    data: IGeneralData
    selectedCountry: string
}

interface IGraphData {
    key: Date
    data: number | string
}

const ReportedCases = ({ data, selectedCountry }: Props) => {
    const [metric, setMetric] = React.useState<string>('cases')
    const [type, setType] = React.useState<string>('new')
    const [graphData, setGraphData] = React.useState<IGraphData[]>([])

    const selectedCountryData: ICovidData[] = useMemo(() => {

        return selectedCountry === ''
            ? data['OWID_INT'].data
            : data[selectedCountry]?.data

    }, [selectedCountry, data])

    const prepapreGraphData = () => {
        const arr: IGraphData[] = []
        const selected_metrics = `${type}_${metric}`

        selectedCountryData.map((el) => {
            if (el[selected_metrics as keyof ICovidData] != undefined) {
                arr.push({
                    key: new Date(el.date),
                    data: el[selected_metrics as keyof ICovidData],
                })
            }
        })
        setGraphData(arr)
    }

    useEffect(() => {
        prepapreGraphData()
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
            <Flex justify={'center'} gap={20} marginTop={10}>
                <Text alignSelf={'center'}>Chart Controls:</Text>
                <RadioGroup onChange={setMetric} value={metric}>
                    <Stack direction="column">
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
