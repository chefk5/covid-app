import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { LineChart, LineSeries } from 'reaviz'

// type Props = {}

const ReportedCases = () => {
    return (
        <Flex mt={10}>
            <LineChart
                height={400}

                data={[
                    { key: new Date('11/29/2019'), data: 4 },
                    { key: new Date('11/30/2019'), data: 1 },
                    { key: new Date('12/1/2019'), data: 12 },
                    { key: new Date('12/2/2019'), data: 0 },
                    { key: new Date('12/3/2019'), data: 0 },
                ]}
                series={<LineSeries symbols={null} />}
            />
        </Flex>
    )
}

export default ReportedCases
