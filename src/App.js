import React from 'react';
import {
  ChakraProvider,
  Box,
  Flex
} from '@chakra-ui/react';
import PostView from './Components/PostView';
import { RefreshIntervalProvider} from './Contexts/RefreshIntervalContext'
import { SubredditProvider} from './Contexts/SubredditContext'
import CustomTheme from './Themes/CustomTheme'
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <ChakraProvider theme={CustomTheme}>
      <RefreshIntervalProvider>
        <SubredditProvider>
          <Flex minHeight='100vh' direction='column' p={0}>
            <Box>
              <Navbar/>
            </Box>
            <Box flex='1'>
              <PostView/>
            </Box>
            <Box >
              <Footer/>
            </Box>
          </Flex>
        </SubredditProvider>
      </RefreshIntervalProvider>
    </ChakraProvider>
  );
}

export default App;
