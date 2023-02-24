import React from 'react'
import { ScrollView, StyleSheet, View, Dimensions, Text,Pressable} from 'react-native'
import { LineChart} from "react-native-chart-kit";

const Linechart = ( {navigation}) => {
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
  const data = [
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(50 * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
  ]
  const labels = ["Junaid", "Ali", "Ahmed", "Tauseef", "Babar", "Badami"]
  const DATA = {
    labels: labels,
    datasets: [{ data }]
  }

  return (

    <ScrollView>

      <View style={styles.Graphs}>
      <Text style={styles.Title}>Line Chart</Text>
        <ScrollView horizontal={true}>
          <LineChart
            data={DATA}
            width = {screenWidth}
            height={256}
            verticalLabelRotation={30}
            chartConfig={chartConfig}
            bezier
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
export default Linechart
const styles = StyleSheet.create({
  chart: {
    margin: 10,
  },
  Title: {
    paddingTop :50,
    // marginTop:  20,
    backgroundColor: "yellow",
    fontSize: 20,
    fontWeight: "700",
    textDecorationColor: "red",
    textAlign: "center",
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