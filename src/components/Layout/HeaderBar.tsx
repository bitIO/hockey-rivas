import {
  Burger,
  Group,
  Header,
  MediaQuery,
  useMantineTheme,
} from "@mantine/core";
import { useContext } from "react";

import Brand from "./Brand";
import { LayoutContext } from "./context";

function HeaderBar() {
  const { isNavbarOpened, setNavbarOpened } = useContext(LayoutContext);
  const theme = useMantineTheme();

  return (
    <Header height={75} padding="md">
      {/*
        You can handle other responsive styles with MediaQuery component or
        createStyles function
      */}
      <Group position="left">
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            color={theme.colors.gray[6]}
            mr="xl"
            onClick={() => setNavbarOpened(!isNavbarOpened)}
            opened={isNavbarOpened}
            size="sm"
          />
        </MediaQuery>

        <Brand />
      </Group>
    </Header>
  );
}

export default HeaderBar;
