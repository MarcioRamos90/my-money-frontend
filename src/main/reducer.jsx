import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import DashboardReducer from "../dashboard/dashboardReducer";
import TabReducer from "../common/tab/tabReducer";
import BillingCyclesReducer from "../billingCycle/billingCyclesReducer";

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: TabReducer,
  billigCicle: BillingCyclesReducer,
  form: formReducer
});

export default rootReducer;
