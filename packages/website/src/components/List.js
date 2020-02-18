import React from 'react'
import { Flex } from '@containous/faency'

function List({ children, ...props }) {
  return (
    <Flex flexDirection="column" py={2} {...props}>
      {children}
    </Flex>
  )
}

export default List
