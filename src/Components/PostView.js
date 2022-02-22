import React, {useState, useEffect, useContext } from 'react';
import {
  Container,
  Table,
  TableCaption,
  Thead,
  Tbody,
  Tr,
  Td,
  Tfoot,
  Th,
  Link,
  Text,
  Progress,
  Tooltip
} from '@chakra-ui/react';
import { LinkIcon, ChatIcon, ArrowUpIcon, TimeIcon } from '@chakra-ui/icons'
import { RefreshIntervalContext } from '../Contexts/RefreshIntervalContext'
import { SubredditContext } from '../Contexts/SubredditContext'
import { timeAgoShort } from '../Util/FormattedTime'

const apiEndpoint = process.env.REACT_APP_API ? process.env.REACT_APP_API : window.REACT_APP_API

const PostView = () => {
  const { refreshInterval } = useContext(RefreshIntervalContext)
  const { subreddit } = useContext(SubredditContext)

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)

  const fetchMetrics = () => {
    setLoading(true)
    fetch(apiEndpoint + '/?sub=' + subreddit)
    .then((response) => response.json())
    .then((json) => {
      setData(json)
      setTimeout(() => {setLoading(false)}, 1700);
      
    });
  }
  // call every interval to api
  useEffect(() => {
    if (refreshInterval && refreshInterval > 0) {
      const interval = setInterval(fetchMetrics, refreshInterval*1000);
      return () => clearInterval(interval);
    }
  }, [refreshInterval, subreddit]);

  // call only on load/refresh
  useEffect(() => {
    fetchMetrics()
  }, [subreddit]);

  const hotnessBGColor = (upvoteCount) => {
    if (upvoteCount >= 100 && upvoteCount < 250) {
      return 'trending';
    } else if (upvoteCount >= 250 && upvoteCount < 500) {
      return 'hot';
    } else if (upvoteCount >= 500) {
      return 'f5oclock';
    } else {
      return false;
    }
  }

  return (
    <Container maxW='container.xl' >
      {loading? <Progress size='xs' isIndeterminate />:<Progress value={0} size='xs' />}
      <Table size='sm' textAlign="left">
        <TableCaption></TableCaption>
        <Thead>
          <Tr>
            <Th w={1}><ChatIcon  w={4} h={4}/></Th>
            <Th w={1}><ArrowUpIcon w={5} h={5}/></Th>
            <Th w={1}><TimeIcon w={4} h={4}/></Th>
            <Th>Title</Th>
            <Th>Source</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>

        <Tbody>
          {
          data.map((item, i) => {
            return [
                <Tr key={i} bg={hotnessBGColor(item.upvoteCount)}>
                  <Td>{item.commentCount}</Td>
                  <Td>{item.upvoteCount}</Td>
                  <Td>{timeAgoShort(item.created_utc)}</Td>
                  <Td>
                    <Tooltip label={item.title} fontSize='md'>
                      <Link href={item.url} isExternal color='link'>
                        <Text noOfLines={3}>{item.title}</Text>
                      </Link>
                    </Tooltip>
                  </Td>
                  <Td>{item.domain}</Td>
                  <Td>
                    <Link href={'https://reddit.com/' + item.commentLink} isExternal color='link'>
                      <ChatIcon/>
                    </Link>
                    &nbsp;
                    <Link href={item.url} color='link'>
                      <LinkIcon/>
                    </Link>
                  </Td>
                </Tr>
              ];
          })
          }
        </Tbody>

        <Tfoot>
          <Tr>
            <Th w={1}><ChatIcon  w={4} h={4}/></Th>
            <Th w={1}><ArrowUpIcon w={5} h={5}/></Th>
            <Th w={1}><TimeIcon w={4} h={4}/></Th>
            <Th>Title</Th>
            <Th>Source</Th>
            <Th>Action</Th>
          </Tr>
        </Tfoot>
      </Table>
    </Container>
  );
}

export default PostView;
