import { Box, Button, Container, Flex, HStack, Heading, Icon, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { FaBars, FaUserTie } from 'react-icons/fa'

const Topnav = ({ title, onOpen }) => {
  return (
    <Box px="4" bg="white">
        <HStack w="1280px" h="16" justify="space-between" mx="auto">
                <Icon as={FaBars} onClick={onOpen} display={{base: "block", lg: "none"}}/>
                <Heading fontSize="28px" px="114px" py="16px" marginLeft="3px">{title}</Heading>
                <Menu>
                    <MenuButton as={Button} marginRight="105px" my="7px" bg="white">
                        <Icon as={FaUserTie} fontSize="24px"/>
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Logout</MenuItem>
                        <MenuItem>Support</MenuItem>
                    </MenuList>
                </Menu>
        </HStack>
    </Box>
  )
}

export default Topnav