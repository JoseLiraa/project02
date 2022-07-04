import React from "react";
import { View } from 'react-native'
import Home from "./src/Screen/home";

function App(){  
  return(
    <View style = {{ flex : 1, marginTop : 100 }}>
      <Home/>
    </View>
    )
}
export default App;