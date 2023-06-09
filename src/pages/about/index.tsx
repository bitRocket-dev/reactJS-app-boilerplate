/** @format */

import logo from '../../assets/icons/logo.svg';
import { useAppTranslation } from '../../i18n/hooks';
import { StyledHeader } from '../home';

export const About = () => {
  const { t } = useAppTranslation();

  return (
    <StyledHeader>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        <code>{t('navigation')}</code>
      </p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        {t('example')}
      </a>
    </StyledHeader>
  );
};
