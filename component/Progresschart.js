import React from 'react'
import { ScrollView, StyleSheet, View,Dimensions ,Text,Pressable} from 'react-native'
import {ProgressChart} from "react-native-chart-kit";

const Progresschart = ({navigation}) => {
  const screenWidth = Dimensions.get("window").width
  const chartConfig = {
    backgroundGradientFrom: "red",
    backgroundGradientFromOpacity: 0.35,
    backgroundGradientTo: "blue",
    backgroundGradientToOpacity: 0.55,
    color: (opacity = 0.5) => 'black',
    strokeWidth: 2,
    barPercentage: 0.5,
  };
  const DATA2 = {
    labels: ["Cycle", "Bike", "Car"], 
    data: [0.4, 0.8, 0.2]
  };

  return (

    <ScrollView>
      <View style={styles.Graphs}>
        <Text style={styles.Title}>Progress Chart</Text>
      <ScrollView horizontal={true}>
        <ProgressChart
          const data={DATA2}
          width={screenWidth}
          height={220}
          strokeWidth={16}
          radius={32}
          chartConfig={chartConfig}
          hideLegend={false}
          style={[styles.chart]}
        />
      </ScrollView>
      <Pressable onPress={() => navigation.navigate("Home")}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>
              Back to Home Screen
            </Text>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  )
}
export default Progresschart
const styles = StyleSheet.create({
  Title : {
    paddingTop: 40,
    backgroundColor : "yellow",
    fontSize : 20,
    fontWeight : "700",
    textDecorationColor : "red",
    // alignSelf : "center",
    textAlign : "center",
    // width : Dimensions.get("window").width,
  },
  btn: {
    marginTop: 50,
    borderWidth: 2,
    backgroundColor: "blue",
    width: 160,
    height: 50,
    alignSelf: "center",
    padding: 10,
    borderRadius: 25,
    opacity: 0.7,
  },
  btnText: {
    color: "white",
    // opacity : 0.85,
  },
})