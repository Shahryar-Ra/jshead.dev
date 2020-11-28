import { getAllPostIds, getPostData } from '../../lib/posts';
import Container from '../../components/Container';
import Date from '../../components/Date';
import Head from 'next/head';
import NextLink from 'next/link';
import { Button, Heading, Box } from '@chakra-ui/core';
import styled from '@emotion/styled';

const Layout = styled.div`
  max-width: 40rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
}
`;

export default function Post({ postData }) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Container>
        <Layout>
          <article>
            <Heading size="lg" mb="10px">
              {postData.title}
            </Heading>
            <Box color="gray.700" mb="25px">
              <Date dateString={postData.date} />
            </Box>

            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </article>
          <Box width="100%" textAlign="center">
            <NextLink href="/" passHref>
              <Button
                as="a"
                p={[1, 4]}
                w="250px"
                fontWeight="bold"
                m="3rem auto 0"
              >
                Return Home
              </Button>
            </NextLink>
          </Box>
        </Layout>
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData
    }
  };
}
