import Form from "../baseComponents/gui/form/Form";
import LabelInput from "../baseComponents/gui/form/LabelInput";
import { formInputs } from "../layouts/options/LabalInputsOptions";
import { addFormData } from "../../api/user";
import requests from "../../redux/reducer/requests";
import { addFormPending } from "../../redux/reducer/requests";
import { useSelector, useDispatch } from "react-redux";

export default function FormLayout() {
  //const dispatch = useDispatch();
  const handleSubmit = (prop) => {
    const formInputs = {
      name: prop.name,
      password: prop.password,
      success: true,
    };
    addFormData(formInputs)
      .then((resp) => {
        console.log(resp);
        // dispatch(addFormPending());
      })
      .catch((error) => {
        //console.log(error);
      });
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
