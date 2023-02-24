import React from 'react'
import { ScrollView, StyleSheet, View, Dimensions, Text, Pressable } from 'react-native'
import { ContributionGraph } from "react-native-chart-kit";

const Contributiongraph = ({ navigation }) => {
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

  const DATA6 = [
    { date: "2023-01-02", count: 1 },
    { date: "2023-01-03", count: 2 },
    { date: "2023-01-04", count: 3 },
    { date: "2023-01-05", count: 4 },
    { date: "2023-01-06", count: 5 },
    { date: "2023-01-30", count: 2 },
    { date: "2023-01-31", count: 3 },
    { date: "2023-03-01", count: 2 },
    { date: "2023-04-21", count: 4 },
    { date: "2023-03-22", count: 2 },
    { date: "2023-02-23", count: 4 }
  ];
  return (
    <ScrollView>
        <Text style={styles.Title}>Contribution Graph Chart</Text>
        <ScrollView horizontal={true}>
          <ContributionGraph
            values={DATA6}
            endDate={new Date("2023-02-24")}
            numDays={100}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
            style={{ padding: 10 }}
          />
        </ScrollView>

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
export default Contributiongraph
const styles = StyleSheet.create({
  Title: {
    paddingTop: 40,
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