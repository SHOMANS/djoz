import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Discography from "./pages/Discography";
import ToursPage from "./pages/ToursPage";
import VideosPage from "./pages/VideosPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import ContactPage from "./pages/ContactPage";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <duv className="fadeOverlay" />
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/About">
              <AboutPage />
            </Route>
            <Route exact path="/Discography">
              <Discography />
            </Route>
            <Route exact path="/Tours">
              <ToursPage />
            </Route>
            <Route exact path="/Videos">
              <VideosPage />
            </Route>
            <Route exact path="/Blog">
              <BlogPage />
            </Route>
            <Route exact path="/Blog/Details">
              <BlogDetailsPage />
            </Route>
            <Route exact path="/Contact">
              <ContactPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
