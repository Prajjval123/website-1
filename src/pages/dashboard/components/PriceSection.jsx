import React from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { Button, Flex, HStack, Icon, Image, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import { AiOutlineInfoCircle, AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import { BsArrowUpRight } from 'react-icons/bs'


const PriceSection = () => {
  const timeStamps = ["7:15 PM", "7:55 PM", "8:55 PM", "9:55 PM", "10:55 PM"];
  return (
    <CustomCard>
      <Flex justify="space-between" align="start">
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
                      <Text textStyle="h2" fontWeight="md">22.39401000</Text>
                      <HStack fontWeight="medium" color="green.500">
                        <Icon as={BsArrowUpRight}/>
                        <Text fontSize="sm" fontWeight="md">22%</Text>
                      </HStack>
                  </HStack>
              </HStack>
        </Stack>
        <HStack>
              <Button leftIcon={<Icon as={AiOutlinePlusCircle}/>}>Buy</Button>
              <Button leftIcon={<Icon as={AiOutlineMinusCircle} />}>Sell</Button>
        </HStack>
      </Flex>
      <Tabs variant="soft-rounded">
      <Flex justify="end">
        <TabList bg="black.5" p="3px"> 
          {["1H", "1D", "1W", "1M"].map((tab) => (
            <Tab 
              _selected={{bg: "white"}}
              key={tab}
              fontSize="sm"
              p="6px"
              borderRadius="4"
            >
              {tab}
            </Tab>
          ))}
        </TabList>
      </Flex>
      <TabPanels>
        <TabPanel>
            <Image w="100%" src="/Vector.svg" mt="3rem"/>
            <HStack justify="space-between">
              {timeStamps.map((timeStamp) => (
                <Text key={timeStamp} fontSize="sm" color="black.80">
                  {timeStamp}
                </Text>
              ))}
            </HStack>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
      
    </CustomCard>
  )
}

export default PriceSection