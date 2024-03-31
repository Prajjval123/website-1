import { Box, Container, Flex, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import Sidenav from './Sidenav'
import Topnav from './Topnav'
import SideDrawer from './SideDrawer'

const DashboardLayout = ({ title, children }) => {
  const {isOpen, onClose, onOpen} = useDisclosure();
  return (
    <div>
        <Flex>
          <Box 
            display={{
              base: "none",
              lg: "flex"
            }}
          >
            <Sidenav />
          </Box>
            <SideDrawer isOpen={isOpen} onClose={onClose}/>
            <Box>
                <Topnav title={title} onOpen={onOpen}/>
                <Container overflowX="hidden" overflowY="auto" h="calc(100vh - 88px)" maxW="1180px" mt="6">{children}</Container>
            </Box>
        </Flex>
    </div>
  )
}

export default DashboardLayout