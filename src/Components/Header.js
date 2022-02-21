import React, {useContext} from 'react';
import {
  Grid,
  GridItem,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Container,
  Heading,
  Center
} from '@chakra-ui/react';
import { RepeatIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { RefreshIntervalContext } from '../Contexts/RefreshIntervalContext'
import { SubredditContext } from '../Contexts/SubredditContext'


const Header = () => {
  const { refreshInterval, setRefreshInterval } = useContext(RefreshIntervalContext)
  const { subreddit, setSubreddit } = useContext(SubredditContext)
  
  return (
    <Container maxW='container.xl' >
      <Grid templateColumns='repeat(3, 1fr)' gap={6}>

        <GridItem w='100%'><Heading size='xl'>F5</Heading></GridItem>

        <GridItem w='100%' >
          <Center h='100%'>
            <Menu>
              <MenuButton size={'sm'} as={Button} rightIcon={<ChevronDownIcon />}>r/{subreddit}</MenuButton>
              <MenuList>
                <MenuItem onClick={(e)=>{setSubreddit('superstonk')}}>r/superstonk</MenuItem>
                <MenuItem onClick={(e)=>{setSubreddit('politics')}}>r/politics</MenuItem>
                <MenuItem onClick={(e)=>{setSubreddit('all')}}>r/all</MenuItem>
              </MenuList>
            </Menu>
          </Center>
        </GridItem>

        <GridItem w='100%' textAlign="right">
          <Menu>
            <MenuButton size={'sm'} as={Button}  rightIcon={<RepeatIcon />}>{refreshInterval}s</MenuButton>
            <ColorModeSwitcher />
            <MenuList>
              <MenuItem onClick={(e)=>{setRefreshInterval(30)}}>30s</MenuItem>
              <MenuItem onClick={(e)=>{setRefreshInterval(60)}}>1m</MenuItem>
              <MenuItem onClick={(e)=>{setRefreshInterval(120)}}>2m</MenuItem>
              <MenuItem onClick={(e)=>{setRefreshInterval(600)}}>5m</MenuItem>
            </MenuList>
          </Menu>
        </GridItem>

      </Grid>
    </Container>
  );
}

export default Header;
