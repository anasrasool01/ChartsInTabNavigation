import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Piechart from './component/PieChart';
import Contributiongraph from './component/Contributiongraph';
import Stackedbarchart from './component/Stackedbarchart';
import Linechart from './component/Linechart';
import Barchart from './component/Barchart';
import Progresschart from './component/Progresschart';
import HomeScreen from './component/Home';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer 
    >
    <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Line_Chart" component={Linechart} />
        <Tab.Screen name="Progress_Chart" component={Progresschart} />
        <Tab.Screen name="Contribution_Graph" component={Contributiongraph} />
        <Tab.Screen name="Stacked_Bar_Chart" component={Stackedbarchart} />
        <Tab.Screen name="Pie_Chart" component={Piechart} />
        <Tab.Screen name="Bar_Chart" component={Barchart} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}