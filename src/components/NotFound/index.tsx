import { Group, Title } from "@mantine/core";

import { ReactComponent as NotFoundSvg } from "./not-found.svg";

import "./index.css";

function NotFound() {
  return (
    <Group position="center">
      <Title>Page Not Found</Title>
      <NotFoundSvg />
    </Group>
  );
}

export default NotFound;
