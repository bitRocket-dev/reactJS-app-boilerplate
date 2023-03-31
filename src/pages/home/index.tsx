/** @format */

import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

import logo from '../../assets/icons/logo.svg';
import { useAppTranslation } from '../../i18n/hooks';

export const StyledHeader = styled.header(({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.background,
  color: theme.text,
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'calc(10px + 2vmin)',
}));

export const Home = () => {
  const { t } = useAppTranslation();

  return (
    <StyledHeader>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        {t('example')}
      </a>
    </StyledHeader>
  );
};