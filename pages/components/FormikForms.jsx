import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { useFormik, Form } from "formik";
import * as Yup from "yup";

const FormikForms = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be less than 15 characters")
        .required("Field is required"),
    }),
    onSubmit: (values, onSubmitProps) => {
      console.log(onSubmitProps);
      onSubmitProps.resetForm;
    },
  });
  console.log(formik.errors);
  return (
    <>
      {/* WORKING WITH FORMS USING Formik*/}
      <Box mx="auto" width="80vw">
        <form onSubmit={formik.handleSubmit}>
          <FormControl>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id="name"
              type="name"
              placeholder="Enter Email Address"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            <Text color="red">{formik.errors.name}</Text>
          </FormControl>

          <button type="submit">submit</button>
        </form>
      </Box>
    </>
  );
};

export default FormikForms;

{
  /* COLLECTS THE FORM DATA*/
  /* SUBMISSION MADE POSSIBLE*/
  /* ERROR HANDLING*/
}
