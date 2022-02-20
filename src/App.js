import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import PostView from './Components/PostView';
import { RefreshIntervalProvider} from './Contexts/RefreshIntervalContext'
import Header from './Components/Header'
import CustomTheme from './Themes/CustomTheme'

const App = () => {
  return (
    <ChakraProvider theme={CustomTheme}>
      <RefreshIntervalProvider>
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
      </RefreshIntervalProvider>
    </ChakraProvider>
  );
}

export default App;
