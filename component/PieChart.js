import React from 'react'
import { ScrollView, StyleSheet, View, Dimensions, Text, Button, Pressable } from 'react-native'
import { PieChart } from "react-native-chart-kit";

const Piechart = ({ navigation }) => {
  const screenWidth = Dimensions.get("window").width
  const chartConfig = {
    color: (opacity = 0.5) => 'black',
  };
  const DATA5 = [
    {
      name: "one",
      population: 250,
      color: "rgba(131, 167, 234, 1)",
      // legendFontColor: "#7F7F7F",
      // legendFontSize: 15,
    },
    {
      name: "Two",
      population: 250,
      color: "black",
      // legendFontColor: "#7F7F7F",
      // legendFontSize: 15
    },
    {
      name: "Three",
      population: 250,
      color: "red",
      // legendFontColor: "#7F7F7F",
      // legendFontSize: 15
    },
    {
      name: "Four",
      population: 250,
      color: "yellow",
      // legendFontColor: "#7F7F7F",
      // legendFontSize: 15
    },
    {
      name: "five",
      population: 250,
      color: "green",
      // legendFontColor: "#7F7F7F",
      // legendFontSize: 15
    },
  ];

  return (

    <ScrollView>

      <View style={styles.Graphs}>
        <Text style={styles.Title}>Pie Chart</Text>
        <ScrollView horizontal={true}>
          <PieChart
            data={DATA5}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={"40"}
            center={[0, 0]}
          // style={[styles.chart]}
          style={{ backgroundColor: "blue", }}
          // absolute
          />
        </ScrollView>

        <Pressable onPress={()=>navigation.navigate("Home")}>
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
export default Piechart;

const styles = StyleSheet.create({
  chart: {
    margin: 10,
  },
  Title: {
    paddingTop : 40,
    backgroundColor: "yellow",
    fontSize: 20,
    fontWeight: "700",
    // textDecorationColor: "red",
    // alignSelf : "center",
    textAlign: "center",
    // width: Dimensions.get("window").width,
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
