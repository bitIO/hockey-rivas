import { Group, Title } from "@mantine/core";

import { ReactComponent as ErrorSvg } from "./error.svg";

import "./index.css";

function ErrorGeneric({ error }: { error: Error | undefined }) {
  return (
    <Group position="center">
      <Group direction="column">
        <Group position="center">
          <ErrorSvg />
          <Title>Oppsss! An error has ocurred</Title>
        </Group>

        <Title order={5}>Error name: {error?.name}</Title>
        <Title order={5}>Error message: {error?.message}</Title>
        <Title order={5}>Error stack:</Title>
        <pre>{error?.stack}</pre>
      </Group>
    </Group>
  );
}

export default ErrorGeneric;
