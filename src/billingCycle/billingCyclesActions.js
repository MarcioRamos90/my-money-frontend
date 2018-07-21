import axios from "axios";
import { toastr } from "react-redux-toastr";
import { reset as resetForm } from "redux-form";
import { showTabs, selectTab } from "../common/tab/tabActions";

const BASE_URL = "http://localhost:3003";

export function getList() {
  const request = axios.get(`${BASE_URL}/api/billingCycles`);
  return {
    type: "BILLING_CYCLES_FETCHED",
    payload: request
  };
}

export function create(values) {
  return dispach => {
    axios
      .post(`${BASE_URL}/api/billingCycles`, values)
      .then(resp => {
        toastr.success("Sucesso", "Operação realizada com sucesso.");
        dispach([
          resetForm("billingCycleForm"),
          getList(),
          selectTab("tabList"),
          showTabs("tabList", "tabCreate")
        ]);
      })
      .catch(e => {
        e.response.data.errors.forEach(error => toastr.error("Erro", error));
      });
  };
}

export function showUpdate(billingCycles) {
  return [showTabs("tabUpdate"), selectTab("tabUpdate")];
}
