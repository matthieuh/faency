import React from 'react'
import { Link } from 'gatsby'
import { Button, Text } from '@containous/faency'

function NavItem({ children, isExternal, active, ...props }) {
  return (
    <Button
      as={Link}
      {...props}
      variant={active ? 'active' : undefined}
      px={5}
      minHeight={6}
      style={{ justifyContent: 'flex-start' }}
    >
      <Text size={2} textColor={active ? 'blue' : undefined} mr={isExternal ? 1 : 0}>
        {children}
      </Text>
      {/* {isExternal && <ExternalLinkIcon />} */}
    </Button>
  )
}

export default NavItem
