import Form from "../baseComponents/gui/form/Form";
import LabelInput from "../baseComponents/gui/form/LabelInput";
import { formInputs } from "../layouts/options/LabalInputsOptions";
import axios from "axios";

export default function FormLayout() {
  let test = { text: "someText" };
  const handleSubmit = (prop) => {
    // axios.get("api/hello").then((resp) => {
    //   console.log(resp.data);
    // });
    axios
      .post("api/hello", test)
      .then((result) => {
        console.log(result.data);
      })
      .catch((error) => console.log(error.response.data));
  };

  return (
    <div className="form-container">
      <Form
        onSubmit={handleSubmit}
        className="main-form"
        children={[
          formInputs.map((item, ind) => (
            <LabelInput
              key={ind}
              name={item.name}
              label={item.label}
              type={item.type}
              onChange={item.onChange}
              rules={item.rules}
            />
          )),
        ]}
      />
    </div>
  );
}
