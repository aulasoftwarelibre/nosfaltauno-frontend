import React from 'react';
import { Navbar } from '../Navbar/Navbar'
import {
  PageWithHeader,
} from 'bumbag';

type Props = {
  children: React.ReactNode
};

export const MainLayout: React.FunctionComponent<Props> = ({ children }) => <PageWithHeader
  sticky
  header={<Navbar />}
  border="none"
>
  {children}
</PageWithHeader>;