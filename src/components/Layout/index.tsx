import { AppShell, useMantineTheme } from "@mantine/core";

import ErrorBoundary from "../ErrorBoundary";
import Router from "../Router";

import { LayoutProvider } from "./context";
import HeaderBar from "./HeaderBar";
import NavigationBar from "./NavigationBar";

function AppShellResponsive() {
  const theme = useMantineTheme();

  return (
    <LayoutProvider>
      <AppShell
        header={<HeaderBar />}
        navbar={<NavigationBar />}
        navbarOffsetBreakpoint="sm"
        styles={{
          main: {
            background:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[2],
          },
        }}
      >
        <ErrorBoundary>
          <Router />
        </ErrorBoundary>
      </AppShell>
    </LayoutProvider>
  );
}

export default AppShellResponsive;
