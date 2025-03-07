import React from "react";
import Layout from "../components/Layout/Layout";
import { useAuth } from "../context/auth";

const HomePage = () => {
  const [auth, setAuth] = useAuth();

  return (
    <Layout
      title={"Home page-Ecommerce App"}
      description={"this is the main page"}
      keywords={"home, index page, dashboard"}
    >
      <h1>Home page</h1>
      <pre>{localStorage.getItem("auth")}</pre>
    </Layout>
  );
};

export default HomePage;
