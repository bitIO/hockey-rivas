import { Group, Text, ThemeIcon, UnstyledButton } from '@mantine/core';
import { createStyles } from '@mantine/styles';
import {
  CommentDiscussionIcon,
  DatabaseIcon,
  GitPullRequestIcon,
  IssueOpenedIcon,
} from '@primer/octicons-react';

interface MainLinkProps {
  color: string;
  icon: React.ReactNode;
  label: string;
}

const useStyles = createStyles((theme) => ({
  button: {
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

function MainLink({ icon, color, label }: MainLinkProps) {
  const { classes } = useStyles();

  return (
    <UnstyledButton className={classes.button}>
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  );
}

const data = [
  { color: 'blue', icon: <GitPullRequestIcon />, label: 'Pull Requests' },
  { color: 'lime', icon: <IssueOpenedIcon />, label: 'Open Issues' },
  { color: 'violet', icon: <CommentDiscussionIcon />, label: 'Discussions' },
  { color: 'grape', icon: <DatabaseIcon />, label: 'Databases' },
];

export default function MainLinks() {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);

  return <div>{links}</div>;
}
