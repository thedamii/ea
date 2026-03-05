import "./global.css";
import { StatusBar } from "expo-status-bar";
import { DeliveryAddressScreen } from "./src/screens/DeliveryAddressScreen";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <DeliveryAddressScreen />
    </>
  );
}
