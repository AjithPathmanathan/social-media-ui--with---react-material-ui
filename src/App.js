import { Box, Stack, createTheme  } from "@mui/material";
import Feed from "./Feed";
import Rightbar from "./Rightbar";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

import Add from "./Add";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";

function App() {
  const [mode, setMode] = useState("light")
const darkTheme = createTheme({
  palette:{
    mode:mode
  }
});
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar/>
      
      <Stack direction={"row"} spacing={2} justifyContent={"space-evenly"}>
      <Sidebar setMode={setMode} mode={mode}/>
      <Feed/>
      <Rightbar/>
      </Stack>
      <Add/>
  </Box>
  </ThemeProvider>
  );
}

export default App;
