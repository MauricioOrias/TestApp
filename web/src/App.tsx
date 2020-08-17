import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HelpPage from "pages/HelpPage";
import MainPage from "pages/MainPage";
import UserPage from "pages/UserPage";
import "./styles/App.css";
import MainLayout from "components/layout/MainLayout";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { primary, secondary, success, error } from "styles/Colors";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: primary,
    secondary: secondary,
    success: success,
    error: error,
    
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <MainLayout>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/help" component={HelpPage} />
            <Route exact path="/test" component={UserPage} />
          </MainLayout>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
