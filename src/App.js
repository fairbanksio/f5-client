import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import PostView from './Components/PostView';
import { RefreshIntervalProvider} from './Contexts/RefreshIntervalContext'
import { SubredditProvider} from './Contexts/SubredditContext'
import Header from './Components/Header'
import CustomTheme from './Themes/CustomTheme'

const App = () => {
  return (
    <ChakraProvider theme={CustomTheme}>
      <RefreshIntervalProvider>
        <SubredditProvider>
          <Box >
            <Grid p={3} gap={3} >
              <GridItem >
                <Header/>
              </GridItem>
              <GridItem >
                <PostView/>
              </GridItem>
            </Grid>
          </Box>
        </SubredditProvider>
      </RefreshIntervalProvider>
    </ChakraProvider>
  );
}

export default App;
