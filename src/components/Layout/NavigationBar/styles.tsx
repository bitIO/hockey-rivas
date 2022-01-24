import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme, _params, _getRef) => {
  return {
    navbarResponsive: {
      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
        backgroundColor: 'yellow',
        height: 'calc(100vh-70px)',
        position: 'fixed',
        top: '70px',
        width: '100vw',
      },
      [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
        backgroundColor: 'aqua',
        height: 'calc(100vh - 70px)',
        top: '70px',
        width: '310px',
      },
      [`@media (min-width: ${theme.breakpoints.md}px)`]: {
        backgroundColor: 'pink',
        height: 'calc(100vh - 70px)',
        top: '70px',
        width: '310px',
      },
      [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
        backgroundColor: 'blue',
        height: 'calc(100vh - 70px)',
        top: '70px',
        width: '310px',
      },
      [`@media (min-width: ${theme.breakpoints.xl}px)`]: {
        backgroundColor: 'red',
        height: 'calc(100vh - 70px)',
        top: '70px',
        width: '350px',
      },
    },
  };
});

export default useStyles;
