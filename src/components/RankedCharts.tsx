import React, { useState } from 'react'
import {
    BarChart,
    Gridline,
    GridlineSeries,
    LineChart,
    LineSeries,
} from 'reaviz'
import {
    Radio,
    Stack,
    Box,
    Flex,
    RadioGroup,
    FormControl,
    FormLabel,
} from '@chakra-ui/react'
import { Select, OptionBase, GroupBase, ActionMeta } from 'chakra-react-select'

interface OptionType extends OptionBase {
    label: string
    value: string
}

const options: OptionType[] = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
]

const RankedCharts = () => {
    const [metric, setMetric] = React.useState('totalDeath')

    const [selectedOption, setSelectedOption] = useState<OptionType | null>()

    const handleSelect = (option: OptionType | null) => {
        setSelectedOption(option)
    }

    return (
        <>
            <Flex mt={10}>
                <BarChart
                    height={450}
                    data={[
                        { key: new Date('11/29/2019'), data: 4 },
                        { key: new Date('11/30/2019'), data: 1 },
                    ]}
                    gridlines={<GridlineSeries line={<Gridline direction="y" />} />}
                />
            </Flex>
            <Flex justify={'center'} gap={20} marginTop={10}>
                <RadioGroup onChange={setMetric} value={metric}>
                    <Stack direction="column">
                        <Radio value="totalDeath">Total number of deaths</Radio>
                        <Radio value="totalCases">Toal number of cases</Radio>
                    </Stack>
                </RadioGroup>
                <FormControl width="20%">
                    <Select<OptionType, false, GroupBase<OptionType>>
                        value={selectedOption}
                        options={options}
                        onChange={handleSelect}
                    // isDisabled={isDisabled}
                    // isClearable={isClearable}
                    // placeholder={placeholder}
                    />
                </FormControl>
            </Flex>
        </>
    )
}

export default RankedCharts
