import Form from "../baseComponents/gui/form/Form";
import LabelInput from "../baseComponents/gui/form/LabelInput";
import { formInputs } from "./options/LabelInputsOptions";
import { sendFormData } from "../../api/user";
import Button from "../../components/baseComponents/gui/button/Button";
import requests from "../../redux/reducer/requests";
import { useRequestData } from "../../redux/reducer/requests";
import { useSelector, useDispatch } from "react-redux";
import { useState, useRef } from "react";

export default function FormLayout() {
  const [errorMessages, setErrorMessages] = useState({
    name: null,
    password: null,
    message: null,
  });
  //let requestData = useRequestData("user/sendFormData");
  const handleSubmit = (prop) => {
    const formDataSend = {
      name: prop.name,
      password: prop.password,
      success: true,
    };
    sendFormData(formDataSend)
      .then((resp) => {
        console.log(resp);
        setErrorMessages({ name: null, password: null, message: null });
      })
      .catch((error) => {
        if (error.response.data.name) {
          let errorMessage = `Имя ${error.response.data.name} уже занято`;
          setErrorMessages({ ...errorMessages, name: errorMessage });
        } else console.log(error.response.data);
      });
  };
  
  const slotsObj = {
    inputs: formInputs.map((item, index) => (
      <LabelInput key={index} {...item} error={errorMessages[item.name]} />
    )),
  };

  return (
    <div className="form-container">
      <Form
        onSubmit={handleSubmit}
        className="main-form"
        slots={slotsObj}
        as={CustomForm}
      >
        <Button>Отправить</Button>
      </Form>
    </div>
  );
}

function CustomForm({ slots, children, ...etc }) {
  return (
    <form {...etc}>
      <div>{slots.inputs}</div>
      {children}
    </form>
  );
}
