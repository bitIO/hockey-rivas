import { Text, useMantineColorScheme } from '@mantine/core';
import { Group } from '@mantine/core';
import { Link } from 'react-router-dom';

import logo from '../../../images/logo.png';

import useStyles from './styles';

function Brand() {
  const { classes } = useStyles();
  const { colorScheme } = useMantineColorScheme();

  return (
    <Link className={classes.linkNoUnderline} to="/">
      <Group direction="row" position="center" spacing="xs">
        <img alt="" height={50} src={colorScheme === 'dark' ? logo : logo} />
        <Text>
          {process.env.REACT_APP_TITLE}
          <span className={classes.version}>
            {process.env.REACT_APP_VERSION}
          </span>
        </Text>
      </Group>
    </Link>
  );
}

export default Brand;
