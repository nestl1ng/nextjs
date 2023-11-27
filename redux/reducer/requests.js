import RequestsBuilder from "../../utils/redux/RequestsBuilder";
import {
  login,
  logout,
  profile,
  signup,
  update,
  addFormData,
} from "../../api/user";

const builder = new RequestsBuilder({
  name: "requests",
  initialState: {},
  reducers: {
    clearError(state, { payload: { field, requestName } = {} }) {
      if (!field) return;
      requestName = builder.getRequestByName(requestName);

      const requestData = state.requests[`requests/${requestName}`];
      if (!requestData?.error?.fields?.[field]) return;

      delete requestData.error.fields[field];

      if (!Object.keys(requestData.error.fields).length)
        requestData.error = null;
    },
    // addFormPending(state) {
    //   let lol = JSON.parse(JSON.stringify(state));
    //   builder._fulfilled({
    //     action: { meta: { requestId: 1 } },
    //     state: lol,
    //     checkData: { global: true, local: false },
    //     thunkName: "requests/user/addFormData",
    //   });
    // },
  },
})
  .addRequest({
    requestName: "user/login",
    extraName: "login",
    checkLocal: true,
    func: login,
  })
  .addRequest({
    requestName: "user/signup",
    extraName: "signup",
    checkLocal: true,
    func: signup,
  })
  .addRequest({
    requestName: "user/profile",
    extraName: "profile",
    checkLocal: true,
    func: profile,
  })
  .addRequest({
    requestName: "user/update",
    extraName: "update",
    checkLocal: true,
    func: update,
  })
  .addRequest({
    requestName: "user/logout",
    extraName: "logout",
    checkLocal: true,
    func: logout,
  })
  .addRequest({
    requestName: "user/addFormData",
    extraName: "addFormData",
    checkLocal: true,
    func: addFormData,
    onSubmit: saveDatafunc,
  });
function saveDatafunc() {
  console.log("yes");
  return true;
}

builder.create();

const requests = builder.export();

export default requests;

/**
 * Хук для получения статуса запроса.
 * @param requestName [String] `request/${requestName}`
 * @returns requestData [{local:{currentRequestId, error, state}, global:{currentRequestId, error, state}}]
 */
export const { useRequestData } = requests.selectors;
// export const { addFormPending } = requests.actions;
