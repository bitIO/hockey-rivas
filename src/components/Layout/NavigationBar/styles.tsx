import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, _params, _getRef) => {
  return {
    navbarResponsive: {
      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
        height: "calc(100vh-70px)",
        position: "fixed",
        top: "70px",
        width: "100vw",
      },
      [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
        height: "calc(100vh - 70px)",
        top: "70px",
        width: "290px",
      },
      [`@media (min-width: ${theme.breakpoints.md}px)`]: {
        height: "calc(100vh - 70px)",
        top: "70px",
        width: "295px",
      },
      [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
        height: "calc(100vh - 70px)",
        top: "70px",
        width: "300px",
      },
      [`@media (min-width: ${theme.breakpoints.xl}px)`]: {
        backgroundColor: "red",
        height: "calc(100vh - 70px)",
        top: "70px",
        width: "350px",
      },
    },
  };
});

export default useStyles;
