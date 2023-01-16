import { StatusBar } from 'expo-status-bar';
import Navigator from "./navigators/Navigator";
import {MainProvider} from "./context/MainContext";

const App = () => {
  return (
    <>
      <MainProvider>
        <Navigator>
        </Navigator>
        <StatusBar style="auto"/>
    </MainProvider>
    </>
  );
};

export default App;
