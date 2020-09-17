import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@traefiklabs/faency'

function Container({ children, ...props }) {
  return (
    <Box px={25} mx="auto" sx={{ flexGrow: 1, flexShrink: 1, flexBasis: '0%', maxWidth: '55rem' }} {...props}>
      {children}
    </Box>
  )
}

Container.propTypes = {
  children: PropTypes.node,
}

export default Container
