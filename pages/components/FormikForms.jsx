import React from "react";
import { UserContext } from "..";

function FormikForms() {
  const value = React.useContext(UserContext);
  return (
    <>
      <form action="">
        <input type="text" />
      </form>

      {value}
    </>
  );
}

export default FormikForms;
