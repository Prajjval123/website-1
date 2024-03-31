import { Button, HStack, Icon, Stack, Tag, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineInfoCircle } from "react-icons/ai"

const PortfolioSection = () => {
  return (
    <HStack 
      bg="white" 
      borderRadius="xl" 
      p="6" 
      justify="space-between"
      align={{
        base: "flex-start",
        xl: "center"
      }}
      flexDirection={{
        base: 'column',
        xl: 'row'
      }}
      spacing={{
        base: 4,
        xl: 0
      }}
    >
        <HStack 
          spacing={{
            base: '0',
            xl: '16'
          }}
          align={{
            base: "flex-start",
            xl: "center"
          }}
          flexDirection={{
            base: 'column',
            xl: 'row'
          }}
        >
           
        <Stack>
            <HStack color="black.80 ">
                <Text fontSize="sm">Wallet Balance</Text>
                <Icon as={AiOutlineInfoCircle}/>
            </HStack>
        <HStack 
          spacing={4}
          align={{
            base: "flex-start",
            xl: "center"
          }}
          flexDirection={{
            base: 'column',
            xl: 'row'
          }}
        >
                <HStack>
                        <Text textStyle="h2" fontWeight="md">22.39401000</Text><Tag colorScheme='gray'>BTC</Tag>
                </HStack>
                <HStack>
                        <Text textStyle="h2" fontWeight="md">₹ 1,300.00</Text><Tag colorScheme='gray'>INR</Tag>
                </HStack>
        </HStack>
        </Stack>
        </HStack>
        <HStack>
            <Button leftIcon={<Icon as={AiOutlineArrowDown}/>}>Deposit</Button>
            <Button leftIcon={<Icon as={AiOutlineArrowUp} />}>Withdraw</Button>
        </HStack>
    </HStack>
  )
}

export default PortfolioSection