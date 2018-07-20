import { combineReducers } from "redux";

import DashboardReducer from "../dashboard/dashboardReducer";
import TabReducer from "../common/tab/tabReducer";
import BillingCyclesReducer from "../billingCycle/billingCyclesReducer";

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: TabReducer,
  billigCicle: BillingCyclesReducer
});

export default rootReducer;
