import { StyleSheet, Text, View } from 'react-native';
import Products from './src/pages/Products/Products'
import Detail from './src/pages/Detail/Detail'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack =createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='ProductPage' component={Products} 
        options={{
          title:'Store',
          headerStyle:{backgroundColor:'#64b5f6'},
          headerTitleStyle:{color:'white'},
        }}/>
        <Stack.Screen name='DetailPage' component={Detail} 
         options={{
          title:'Store',
          headerStyle:{backgroundColor:'#64b5f6'},
          headerTitleStyle:{color:'white'},
          headerTintColor:'white'
        }}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
