import React from 'react';
import { NextSeo } from 'next-seo';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Link,
  Icon
} from '@chakra-ui/core';

import Container from '../components/Container';
import { CustomLink } from '../components/MDXComponents';

const url = 'https://jshead.dev/about';
const title = 'About Me – Shahryar Rajabpoor';

const About = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title
        }}
      />
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
              About Me
            </Heading>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Hey, I’m Shahryar. I'm a developer, musician and songwriter.
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              As someone who has been involved in art and music since I was a
              teenager, I was still very interested in the world of technology.
              For years, I thought that I should only be involved in music as a
              profession and that I could not enter the tech world
              professionally.
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              But a few years ago, I made the decision to start learning
              programming on my own. I remember I started working with
              WordPress. When I installed the first WordPress site, I felt like
              a professional hacker!
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              After a while, I started learning programming and more complex
              concepts in the web world via the courses on udemy, online
              bootcamps and dear friend, Youtube.
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              I went through the usual HTML, CSS and Javascript path and then
              entered the world of React and fell in love with how it worked
              from the beginning.
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              My current focus is on becoming a front-end professional engineer.
              I am very interested in Serverless technologies and Cloud
              Computing and functional programming.
            </Text>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default About;
