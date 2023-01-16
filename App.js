import { StatusBar } from 'expo-status-bar';
import Navigator from "./navigators/Navigator";
import {StyleSheet} from "react-native";

const App = () => {
  return (
    <>
      <Navigator></Navigator>
      <StatusBar style="auto"/>
    </>
  );
};

export default App;
