import React from 'react'
import { Box } from '@containous/faency'

function Container({ children, ...props }) {
  return (
    <Box px={25} mx="auto" fleGrow={1} flexShrink={1} flexBasis="0%" maxWidth="55rem" {...props}>
      {children}
    </Box>
  )
}

export default Container
