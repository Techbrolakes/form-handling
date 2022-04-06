import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  useColorMode,
} from "@chakra-ui/react";
import Head from "next/head";
import React, { useContext, useState } from "react";
import FormikForms from "./components/FormikForms";
import Usecontext from "./components/Usecontext";

export const UserContext = React.createContext();

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [text, settext] = useState("Lekan Dar Rocks");

  return (
    <div>
      <Head>
        <title>Working with forms</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Flex justify="space-between" p={12} textAlign="center" textStyle="h1">
          <Heading textTransform="uppercase">
            Working with forms using formik
          </Heading>
          <Button onClick={toggleColorMode} textTransform="uppercase">
            Toggle {colorMode === "light" ? "Dark" : "Light"}
          </Button>
          <Button onClick={() => settext("UseContext Works not Lekan Dar")}>
            CONTEXT API BUTTON
          </Button>
        </Flex>
        <UserContext.Provider value={text}>
          {/* <FormikForms /> */}
          <FormikForms />
          <Usecontext />
        </UserContext.Provider>
      </div>
    </div>
  );
}
