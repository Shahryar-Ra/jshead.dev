import Link from 'next/link';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  List,
  Box,
  ListItem
} from '@chakra-ui/core';

import Container from '../components/Container';
import Date from '../components/Date';
import { getSortedPostsData } from '../lib/posts';

const Index = ({ allPostsData }) => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
    <Container>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            Hey, I’m Shahryar
          </Heading>
          <Text color={secondaryTextColor[colorMode]}>
            I’m a Frontend Engineer, Musician and Songwriter. You’ve found my
            personal slice of the internet – everything you want to know and
            more is here.
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          mt={8}
        ></Flex>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading letterSpacing="tight" mb={5} as="h1" size="lg">
            Latest Articles
          </Heading>
          <List>
            {allPostsData.map(({ id, date, title }) => (
              <Link href={`blog/${id}`} key={id}>
                <a>
                  <ListItem
                    mb="40px"
                    _hover={{
                      background: 'white',
                      color: 'purple.400'
                    }}
                  >
                    <Heading
                      as="h4"
                      size="md"
                      fontWeight="bold"
                      mb={2}
                      letterSpacing="tighter"
                    >
                      {title}
                    </Heading>

                    <small>
                      <Date dateString={date} />
                    </small>
                  </ListItem>
                </a>
              </Link>
            ))}
          </List>
        </Flex>
      </Stack>
    </Container>
  );
};

export default Index;

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}
