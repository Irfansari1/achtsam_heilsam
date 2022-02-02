import "bootstrap/dist/css/bootstrap.css";
import { AppRouter } from "./router/AppRouter";
import { ErrorBoundary } from "react-error-boundary";
import { Error } from "./components/Error";
import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <AppRouter />
    </div>
  );
}

const Main = () => (
  <ErrorBoundary FallbackComponent={Error}>
    <App />
  </ErrorBoundary>
);

export default Main;
