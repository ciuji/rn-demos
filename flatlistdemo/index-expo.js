import Expo from "expo";
import App from "./App";

/**
 * just for expo preview
 */

if (process.env.NODE_ENV === "development") {
  Expo.KeepAwake.activate();
}

Expo.registerRootComponent(App);
