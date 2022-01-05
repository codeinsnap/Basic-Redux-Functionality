//this store then call the comoponent and ,then it will pass to the app file.
// with the help of this store we can use function all  over the projects.

import { createStore } from "redux";
import rootReducer from "./response";

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;