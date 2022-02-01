import { loadBugs, addBug, resolveBug, assignBugToUser } from "./store/bugs";
import configureStore from "./store/configureStore";

const store = configureStore();
store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

store.dispatch({
  type: "error",
  payload: { message: "An error encountered!" },
});

store.dispatch(loadBugs());
store.dispatch(addBug({ description: "a" }));
setTimeout(() => store.dispatch(resolveBug(2)), 5000);
store.dispatch(assignBugToUser(1, 4));
