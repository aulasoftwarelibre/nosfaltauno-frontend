import {
  Button,
  Heading,
  Hide,
  Image,
  PageContent,
  PageWithHeader,
  Paragraph,
  TopNav,
} from 'bumbag';
import React from 'react';

export default function Index() {
  return (
    <>
      <PageWithHeader
        sticky
        header={
          <TopNav backgroundColor="#2d3748" color="#ffffff">
            <TopNav.Section>
              <TopNav.Item href="/" fontWeight="semibold">
                <Image src="/dos-lineas-tinta-blanca.svg" height="44px" />
              </TopNav.Item>
              <Hide below="desktop">
                <TopNav.Item href="#">Option 1</TopNav.Item>
                <TopNav.Item href="#">Option 2</TopNav.Item>
              </Hide>
            </TopNav.Section>
            <TopNav.Section marginRight="major-2">
              <TopNav.Item>
                <Button palette="white">Login</Button>
              </TopNav.Item>
            </TopNav.Section>
          </TopNav>
        }
        border="none"
      >
        <PageContent>
          <Heading>Bumbag's Basic Next.js Example</Heading>
          <Paragraph>Welcome to your new Bumbag Next.js site.</Paragraph>
          <Paragraph>Now go build something great with your Bumbag!</Paragraph>
        </PageContent>
      </PageWithHeader>
    </>
  );
}
