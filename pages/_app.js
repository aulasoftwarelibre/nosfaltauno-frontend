import { Provider as BumbagProvider } from "bumbag";
import NextApp from "next/app";

import { MainLayout } from "../components/MainLayout/MainLayout";

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <BumbagProvider isSSR collapseBelow="desktop">
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </BumbagProvider>
    );
  }
}
