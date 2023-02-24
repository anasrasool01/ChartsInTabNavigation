import React from 'react'
import { ScrollView, StyleSheet, View,Dimensions ,Text,Pressable} from 'react-native'
import {StackedBarChart} from "react-native-chart-kit";

const Stackedbarchart = ({navigation}) => {
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
  const DATA4 = {
    labels: ["Maths", "English"],
    legend: ["1", "2", "3"],
    data: [
      [25, 30, 35],[30, 50, 60]
    ],
    barColors: ["green", "yellow", "#a4b0be"]
  };

  return (

    <ScrollView>
      <View>
      <Text style={styles.Title}>Stacked bar chart</Text>
      <ScrollView horizontal ={true}>
        <StackedBarChart
        style={[styles.chart,backgroundColor = "indigo"]}
          data={DATA4}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
        />
        </ScrollView>
      </View>
      <Pressable onPress={() => navigation.navigate("Home")}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>
              Back to Home Screen
            </Text>
          </View>
        </Pressable>
    </ScrollView>



  )
}
export default Stackedbarchart
const styles = StyleSheet.create({
  chart: {
    margin: 10,
  },
  Title : {
    paddingTop : 40,
    backgroundColor : "yellow",
    fontSize : 20,
    fontWeight : "700",
    textDecorationColor : "red",
    textAlign : "center",
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
