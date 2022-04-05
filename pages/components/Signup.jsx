import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Signup = () => {
  const [input, setinput] = useState();
  console.log(input);
  return (
    <>
      {/* WORKING WITH FORMS USING NORMAL REACT JS */}
      <Box mx="auto" width="80vw">
        <FormControl>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            id="email"
            type="email"
            placeholder="Enter Email Address"
            value={input}
            onChange={(e) => setinput(e.target.value)}
          />
          <FormHelperText>We'll never share your email.</FormHelperText>

          <Button>Submit</Button>
        </FormControl>
      </Box>
    </>
  );
};

export default Signup;
