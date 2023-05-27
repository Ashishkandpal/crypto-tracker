import React, { useState } from "react";

import { Box, createTheme, ThemeProvider } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "./Tabs.css";
import Grid from "../Grid/Grid";
import List from "../List/List";
import Button from "../../common/Button";

export default function TabsComponent({ coins, isWatchlistPage, setSearch }) {
  const [value, setValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });

  const style = {
    color: "var(--neongreen)",
    width: "50vw",
    fontSize: "1.2rem",
    fontWeight: 600,
    fontFamily: "Poppins",
    textTransform: "capitalize",
  };

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <div>
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="Grid" value="grid" sx={style} />
            <Tab label="List" value="list" sx={style} />
          </TabList>
        </div>
        <TabPanel value="grid" className="tabPanel">
          <Box className="grid-flex">
            {coins.length === 0 ? (
              <div>
                <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
                  No Items Found
                </h1>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    text={"Clear Search"}
                    onClick={(e) => {
                      setSearch("");
                    }}
                  />
                </div>
              </div>
            ) : (
              coins?.map((coin, i) => (
                <Grid
                  coin={coin}
                  key={i}
                  delay={((i + 5) % 5) * 0.1}
                  isWatchlistPage={isWatchlistPage}
                />
              ))
            )}
          </Box>
        </TabPanel>
        <TabPanel value="list">
          <table className="list-table">
            {coins.length === 0 ? (
              <div>
                <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
                  No Items Found
                </h1>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    text={"Clear Search"}
                    onClick={(e) => {
                      setSearch("");
                    }}
                  />
                </div>
              </div>
            ) : (
              coins.map((coin, i) => (
                <List
                  coin={coin}
                  key={i}
                  delay={(i % 10) * 0.1}
                  isWatchlistPage={isWatchlistPage}
                />
              ))
            )}
          </table>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
