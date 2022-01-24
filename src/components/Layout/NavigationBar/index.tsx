import { Navbar } from '@mantine/core';
import { useContext } from 'react';

import { LayoutContext } from '../context';

import MainLinks from './MainLinks';
import useStyles from './styles';
import User from './User';

const NavigationBar = () => {
  const { classes } = useStyles();
  const { isNavbarOpened } = useContext(LayoutContext);

  return (
    <Navbar
      className={classes.navbarResponsive}
      hidden={!isNavbarOpened}
      hiddenBreakpoint="sm"
      padding="xs"
    >
      <Navbar.Section grow mt="lg">
        <MainLinks />
      </Navbar.Section>

      <Navbar.Section>
        <User />
      </Navbar.Section>
    </Navbar>
  );
};

export default NavigationBar;
