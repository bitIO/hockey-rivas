import { useAuth0 } from '@auth0/auth0-react';
import { Avatar, Button, Group, Text, UnstyledButton } from '@mantine/core';
import { createStyles, useMantineTheme } from '@mantine/styles';
import { ChevronRightIcon } from '@modulz/radix-icons';
import { LockOpen2Icon } from '@modulz/radix-icons';

const useStyles = createStyles((theme) => ({
  loginButton: {
    height: '3rem',
    width: '100%',
  },
  user: {
    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
    borderRadius: theme.radius.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    display: 'block',
    padding: theme.spacing.xs,
    width: '100%',
  },
}));

export default function User() {
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  const theme = useMantineTheme();
  const { classes } = useStyles();

  if (!user) {
    return (
      <Button
        className={classes.loginButton}
        leftIcon={<LockOpen2Icon />}
        loaderPosition="right"
        loading={isLoading}
        onClick={() => loginWithRedirect()}
      >
        {isLoading ? 'Connecting' : 'Acceder'}
      </Button>
    );
  }

  console.log({ user });
  console.log({ isAuthenticated });
  console.log({ isLoading });

  return (
    <div
      style={{
        borderTop: `1px solid ${
          theme.colorScheme === 'dark'
            ? theme.colors.dark[4]
            : theme.colors.gray[2]
        }`,
        paddingTop: theme.spacing.sm,
      }}
    >
      <UnstyledButton className={classes.user}>
        <Group spacing={5}>
          <Avatar radius="xl" src={user.picture} />
          <Group direction="column" position="left" spacing={1}>
            <Text size="sm" weight={500}>
              {user.name}
            </Text>
            <Text color="dimmed" size="xs">
              {user.email}
            </Text>
          </Group>

          <ChevronRightIcon height={18} width={18} />
        </Group>
      </UnstyledButton>
    </div>
  );
}
