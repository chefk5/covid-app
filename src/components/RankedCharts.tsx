import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import {
    BarChart,
    Gridline,
    GridlineSeries,
    LineChart,
    LineSeries,
} from 'reaviz'

// type Props = {}

const RankedCharts = () => {
    return (
        <Flex mt={10}>
            <BarChart
                height={450}
                data={[
                    { key: new Date('11/29/2019'), data: 4 },
                    { key: new Date('11/30/2019'), data: 1 },
                    { key: new Date('12/1/2019'), data: 12 },
                    { key: new Date('12/2/2019'), data: 0 },
                    { key: new Date('12/3/2019'), data: 0 },
                    { key: new Date('12/4/2019'), data: 0 },
                    { key: new Date('12/5/2019'), data: 0 },
                    { key: new Date('12/6/2019'), data: 0 },
                    { key: new Date('12/7/2019'), data: 0 },
                    { key: new Date('12/8/2019'), data: 0 },
                    { key: new Date('12/9/2019'), data: 0 },
                    { key: new Date('12/10/2019'), data: 0 },
                    { key: new Date('12/11/2019'), data: 0 },
                    { key: new Date('12/12/2019'), data: 0 },
                    { key: new Date('12/13/2019'), data: 0 },
                    { key: new Date('12/14/2019'), data: 10 },
                    { key: new Date('12/15/2019'), data: 0 },
                    { key: new Date('12/16/2019'), data: 0 },
                    { key: new Date('12/17/2019'), data: 10 },
                    { key: new Date('12/18/2019'), data: 0 },
                    { key: new Date('12/19/2019'), data: 20 },
                    { key: new Date('12/20/2019'), data: 20 },
                    { key: new Date('12/21/2019'), data: 0 },
                    { key: new Date('12/22/2019'), data: 0 },
                    { key: new Date('12/23/2019'), data: 0 }]}
                gridlines={<GridlineSeries line={<Gridline direction="y" />} />}
            />
        </Flex>
    )
}

export default RankedCharts
