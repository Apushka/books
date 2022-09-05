import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import styles from "./App.module.css";
import BookContainer from "./components/Book/BookContainer";
import CatalogContainer from "./components/Catalog/CatalogContainer";
import SearchContainer from "./components/Form/SearchContainer";
import store from "./redux/redux-store";

const App: React.FC = () => {
  return (
    <div className={styles.app_wrapper}>
      <Redirect exact from="/" to="/search" />
      <SearchContainer />
      <Route path="/catalog" render={() => <CatalogContainer />} />
      <Route
        path="/book/:volumeId"
        render={(props) => <BookContainer {...props} />}
      />
    </div>
  );
};

const GoogleBooksApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
};

export default GoogleBooksApp;
