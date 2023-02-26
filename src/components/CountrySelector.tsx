import React from 'react'
import { Container, FormControl, FormLabel, Code } from '@chakra-ui/react'
import { Select } from 'chakra-react-select'
// type Props = {}



export const colorOptions = [
    { value: 'blue', label: 'Blue' },
    { value: 'purple', label: 'Purple' },
    { value: 'red', label: 'Red' },
    { value: 'orange', label: 'Orange' },
    { value: 'yellow', label: 'Yellow' },
    { value: 'green', label: 'Green' },
    { value: 'red', label: 'Red' },
    { value: 'orange', label: 'Orange' },
    { value: 'yellow', label: 'Yellow' },
    { value: 'green', label: 'Green' }
]


const CountrySelector = () => {
    return (
        // <Container >
        <FormControl p={4}>
            <FormLabel>
                Select Country
            </FormLabel>
            <Select
                name="colors"
                options={colorOptions}
                placeholder="Select some colors..."
                closeMenuOnSelect={false}
                size="sm"
            />
        </FormControl>
        // </Container>
    )
}

export default CountrySelector