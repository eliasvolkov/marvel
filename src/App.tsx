import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Layout } from "./shared/components/Layout";
import CharacterContainer from "./features/fetch-characters/components/CharacterContainer";

const App: React.FC = () => {
  return (
    <Layout>
      <CharacterContainer />
    </Layout>
  );
};

export default App;
