import React from 'react'
import Sidenav from '../../components/Sidenav'
import Topnav from '../../components/Topnav'
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react'
import DashboardLayout from '../../components/DashboardLayout'
import PortfolioSection from './components/PortfolioSection'
import PriceSection from './components/PriceSection'
import Transaction from './components/Transaction'
import InfoCard from './components/InfoCard'

const Dashboard = () => {
  return (
    <>
      <DashboardLayout title="Dashboard">
        <Grid
          gridTemplateColums={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)"
          }}
          gap="6"
        >
          <GridItem colSpan={{
            base: 1,
            xl: 2
          }}>
             <PortfolioSection />
          </GridItem>
          <GridItem colSpan={1}>
             <PriceSection />
          </GridItem>    
          <GridItem colSpan={1}>
             <Transaction />
          </GridItem> 
          <GridItem colSpan={1}>
             <InfoCard 
              inverted={true}
              imgUrl="/dot_bg.svg"
              text="Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"
              tagText="Loan" 
             />
          </GridItem>        
          <GridItem colSpan={1}>
             <InfoCard 
              inverted={false}
              imgUrl="/grid_bg.svg"
              text="Learn more about our real estate, mortgage, and  corporate account services" 
              tagText="Contact"
             />
          </GridItem> 
        </Grid>
      </DashboardLayout>
      
    </>
  )
}

export default Dashboard