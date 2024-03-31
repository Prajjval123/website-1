import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { Button, Card, Flex, Tag } from '@chakra-ui/react'
import { AiOutlineDownload } from 'react-icons/ai'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import TransactionTable from './component/TransactionTable'

const Transaction = () => {
  const tabs = [
    {
      name: 'All',
      count: 349
    },
    {
      name: 'Deposit',
      count: 114
    },
    {
      name: 'Withdraw',
      count: 213
    },{
      name: 'Trade',
      count: 22
    },
  ]
  return (
    <DashboardLayout title="Transaction">
      <Flex justify="end" mt="6" mb="3">
        <Button leftIcon={AiOutlineDownload}>
          Export CSV
        </Button>
      </Flex>
      <Card>
          <Tabs>
            <TabList pt="4">
              {tabs.map(tab => (
                <Tab key={tab.name} display="flex" gap="2">
                  {tab.name}<Tag colorScheme='gray' borderRadius="full">{tab.count}</Tag>
                </Tab>
              ))}
            </TabList>

            <TabPanels>
              <TabPanel>
                <TransactionTable />
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
      </Card>
    </DashboardLayout>
  )
}

export default Transaction