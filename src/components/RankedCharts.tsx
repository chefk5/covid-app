import {
    Flex,
    FormControl,
    Radio,
    RadioGroup,
    Stack,
    Text,
} from '@chakra-ui/react'
import { GroupBase, OptionBase, Select } from 'chakra-react-select'
import React, { useCallback, useEffect, useState } from 'react'
import {
    Bar,
    Gradient,
    GuideBar,
    RangeLines,
    StackedBarChart,
    StackedBarSeries,
} from 'reaviz'
import { ICovidData, IGeneralData } from '../interfaces'

interface IOptionType extends OptionBase {
    label: string
    value: string
}

const options: IOptionType[] = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '5', value: '5' },
    { label: '10', value: '10 ' },
]

interface ITotalPerCountry {
    [country: string]: number
}

interface IGraphData {
    key?: string
    data?: IGraphItemData[]
}

interface IGraphItemData {
    key: string
    data: number
}

type Props = {
    data: IGeneralData
    selectedCountry: string
}

const RankedCharts = ({ data, selectedCountry }: Props) => {
    const [metric, setMetric] = React.useState('total_deaths')
    const [selectedOption, setSelectedOption] = useState<IOptionType | null>({
        label: '10',
        value: '10 ',
    })
    const [graphData, setGraphData] = useState<IGraphData[]>([])

    const getTotalPerCountryList = () => {
        const countryList: ITotalPerCountry[] = []
        Object.keys(data).forEach((country) => {
            if (!country.startsWith('OWID')) {
                let sum = 0

                data[country].data.forEach((element) => {
                    if (element[metric as keyof ICovidData] != undefined) {
                        sum += Number(element[metric as keyof ICovidData])
                    }
                })

                countryList.push({ [country]: sum })
            }
        })
        countryList.sort((a, b) => {
            const valueA: number = Object.values(a)[0]
            const valueB: number = Object.values(b)[0]
            return valueB - valueA
        })

        return countryList
    }

    const createGraphData = useCallback(() => {
        const graphData: IGraphData[] = []

        const newCountryList = getTotalPerCountryList().slice(
            0,
            Number(selectedOption?.value)
        )
        if (selectedCountry) {
            newCountryList.pop()
            newCountryList.push({ [selectedCountry]: 1 })
        }
        for (const countryCode in data) {
            const country = data[countryCode].data
            const countryObject = newCountryList.find(
                (obj) => Object.keys(obj)[0] === countryCode
            )

            if (countryObject) {
                for (const record of country) {
                    let totalDeaths = 0
                    const date = new Date(record.date)
                    const month =
                        date.toLocaleString('default', { month: 'short' }) +
                        ' ' +
                        date.getFullYear()
                    if (record[metric] != undefined) {
                        totalDeaths = record[metric]
                    }
                    let existingData: IGraphData | undefined = graphData.find(
                        (d) => d.key === month
                    )

                    if (!existingData) {
                        existingData = { key: month, data: [] }
                        graphData.push(existingData)
                    }

                    existingData?.data?.push({ key: countryCode, data: totalDeaths })
                }
            }
        }

        setGraphData(graphData)
    }, [data, metric, selectedOption, selectedCountry])

    useEffect(() => {
        createGraphData()
    }, [createGraphData])

    const handleSelect = (option: IOptionType | null) => {
        setSelectedOption(option)
    }

    return (
        <>
            <Flex mt={10}>
                <StackedBarChart
                    height={400}
                    data={graphData}
                    series={
                        <StackedBarSeries
                            bar={
                                <Bar
                                    // rx={rx}
                                    // ry={ry}
                                    gradient={<Gradient />}
                                    rangeLines={<RangeLines />}
                                    guide={<GuideBar />}
                                    width={10}
                                />
                            }
                            colorScheme={[
                                '#5a2c9f',
                                '#d7b8b1',
                                '#25f6d4',
                                '#ebae49',
                                '#455c4e',
                                '#156a98',
                                '#91e7d3',
                                '#3a3de1',
                                '#d1a08e',
                                '#b92f30',
                            ]}
                        />
                    }
                />
            </Flex>
            <Flex justify={'center'} gap={20} marginTop={10}>
                <Text alignSelf={'center'}>Chart Controls:</Text>
                <RadioGroup onChange={setMetric} value={metric}>
                    <Stack direction="column">
                        <Radio value="total_deaths">Total number of deaths</Radio>
                        <Radio value="total_cases">Toal number of cases</Radio>
                    </Stack>
                </RadioGroup>
                <FormControl width="20%">
                    <Select<IOptionType, false, GroupBase<IOptionType>>
                        value={selectedOption}
                        options={options}
                        onChange={handleSelect}
                    />
                </FormControl>
            </Flex>
        </>
    )
}

export default RankedCharts
