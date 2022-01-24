import { Avatar, Group, Text, UnstyledButton } from '@mantine/core';
import { createStyles, useMantineTheme } from '@mantine/styles';
import { ChevronRightIcon } from '@modulz/radix-icons';

const useStyles = createStyles((theme) => ({
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
  const theme = useMantineTheme();
  const { classes } = useStyles();

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
        <Group>
          <Avatar
            radius="xl"
            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
          />
          <div style={{ flex: 1 }}>
            <Text size="sm" weight={500}>
              Amy Horsefighter
            </Text>
            <Text color="dimmed" size="xs">
              ahorsefighter@gmail.com
            </Text>
          </div>

          <ChevronRightIcon height={18} width={18} />
        </Group>
      </UnstyledButton>
    </div>
  );
}
