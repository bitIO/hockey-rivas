import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme, _params, getRef) => {
  return {
    linkNoUnderline: {
      textDecoration: 'none',
    },
    version: {
      color: '#ccc',
      fontFamily: 'monospace',
      fontSize: '0.7rem',
      margin: '0px 5px',
    },
  };
});

export default useStyles;
