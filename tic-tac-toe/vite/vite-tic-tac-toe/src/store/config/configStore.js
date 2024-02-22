import { configureStore } from "@reduxjs/toolkit";
import game from "../module/game";

const store = configureStore({ reducer: { game } });

export default store;
