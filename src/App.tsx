import React from "react";
import { ApolloProvider } from "@apollo/client";

import { client } from "./utils/apollo";
import Router from "./AppRouter";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className="w-screen">
        <Header />
        <div className="w-screen p-4 mx-auto lg:w-9/12 lg:p-8">
          <Router />
        </div>
      </div>
    </ApolloProvider>
  );
};

export default App;
