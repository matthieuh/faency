import React from 'react'
import { Box, Table, Thead, Tr, Th, Tbody, Td, Text, Heading, theme } from '@containous/faency'

export function SystemPropsTable({ props }) {
  return (
    <Box mt={8} mb={7}>
      <Heading as="h3" size={3} mt={45} mb={25}>
        System props
      </Heading>
      <Box my={4}>
        <Table>
          {/* <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Props</Th>
            </Tr>
          </Thead> */}
          <Tbody>
            {props.sort().map(prop => (
              <Tr key={prop}>
                <Td>
                  <Text textColor={theme.colors.grays[7]}>
                    <code>{prop}</code>
                  </Text>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  )
}
