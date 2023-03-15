import { createStore } from "redux";
import { rootreducer } from "./rootreducers";
export const store=createStore(rootreducer)