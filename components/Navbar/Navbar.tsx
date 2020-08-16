import React from 'react';
import { TopNav, Hide, Button, Image } from 'bumbag';

export const Navbar: React.FunctionComponent = () => <TopNav backgroundColor="#2d3748" color="#ffffff" data-testid="layout-navbar">
  <TopNav.Section>
    <TopNav.Item data-testid="navbar-logo" href="/" fontWeight="semibold">
      <Image src="/dos-lineas-tinta-blanca.svg" height="44px" />
    </TopNav.Item>
    <Hide below="desktop">
      <TopNav.Item href="#">Option 1</TopNav.Item>
      <TopNav.Item href="#">Option 2</TopNav.Item>
    </Hide>
  </TopNav.Section>
  <TopNav.Section data-testid="navbar-notifications" marginRight="major-2">
    <TopNav.Item>
      Notis
    </TopNav.Item>
  </TopNav.Section>
  <TopNav.Section data-testid="navbar-user-profile" marginRight="major-2">
    <TopNav.Item>
      <Button palette="white">Login</Button>
    </TopNav.Item>
  </TopNav.Section>
</TopNav>;