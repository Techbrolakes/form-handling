import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import { UserContext } from "..";

const Usecontext = () => {
  const value = React.useContext(UserContext);

  return (
    <>
      <Heading> Working With UseContext hook</Heading>
      <Heading> {value}</Heading>
    </>
  );
};

export default Usecontext;
