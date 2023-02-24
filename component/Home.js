import * as React from 'react';
import { Text, View, StyleSheet, Pressable, ScrollView } from 'react-native';


function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50, }}>
        <Text style={styles.Title}>The Home of Graphs!</Text>
        <Pressable onPress={() => navigation.navigate("Line_Chart")}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>
              Line Chart
            </Text>
          </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Progress_Chart")}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>
              Progress Chart
            </Text>
          </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Contribution_Graph")}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>
              Contribution Graph
            </Text>
          </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Stacked_Bar_Chart")}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>
              Stacked Bar Chart
            </Text>
          </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Pie_Chart")}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>
              Pie Chart
            </Text>
          </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Bar_Chart")}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>
              Bar Chart
            </Text>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({

  Title: {
    backgroundColor: "yellow",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },
  btn: {
    marginTop: 30,
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
    alignSelf: "center"
    // opacity : 0.85,
  },
})