import { FormControl, FormLabel } from '@chakra-ui/react'
import { GroupBase, OptionBase, Select } from 'chakra-react-select'
import { useEffect, useState } from 'react'
import { IGeneralData } from '../interfaces'

type Props = {
    data: IGeneralData | null,
    selectCountry: (country: string) => void
}
interface OptionType extends OptionBase {
    label: string
    value: string
}

const CountrySelector = ({ data, selectCountry }: Props) => {
    const [countries, setCountries] = useState<OptionType[]>([])
    const [selectedOption, setSelectedOption] = useState<OptionType | null>()

    const handleSelect = (option: OptionType | null) => {
        if (option != undefined) {
            setSelectedOption(option)
            selectCountry(option?.value)
        }
    }

    const createCountriesList = (data: IGeneralData) => {
        const arr: OptionType[] = []
        for (const [key, value] of Object.entries(data)) {
            arr.push({ value: key, label: value.location })
        }

        setCountries(arr)

    }

    useEffect(() => {
        createCountriesList(data)
    }, [data])

    return (
        // <Container >
        <FormControl p={4}>
            <FormLabel>
                Select Country
            </FormLabel>
            <Select<OptionType, false, GroupBase<OptionType>>
                name="countries"
                options={countries}
                placeholder="Select country"
                closeMenuOnSelect={true}
                size="sm"
                value={selectedOption}
                onChange={handleSelect}

            />
        </FormControl>
        // </Container>
    )
}

export default CountrySelector