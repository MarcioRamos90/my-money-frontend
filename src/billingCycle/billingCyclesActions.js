import axios from "axios";
const BASE_URL = "http://localhost:3003";

export function getList() {
  const request = axios.get(`${BASE_URL}/api/billingCycles`);
  return {
    type: "BILLING_CYCLES_FETCHED",
    payload: request
  };
}
