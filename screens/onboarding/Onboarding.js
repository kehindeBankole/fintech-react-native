import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useRef } from "react";
const { width, height } = Dimensions.get("window");
const slides = [
  {
    id: "1",
    image: require("../../assets/image1.png"),
    title: "Best Digital Solution",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "2",
    image: require("../../assets/image2.png"),
    title: "Achieve Your Goals",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "3",
    image: require("../../assets/image3.png"),
    title: "Increase Your Value",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function Onboarding() {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = useRef();
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    console.log(contentOffsetX);
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "brown" }}>
      <FlatList
        ref={ref}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{
          height: height * 0.75,
        }}
        pagingEnabled
        renderItem={({ item }) => (
          <View style={{ alignItems: "center" }}>
            <Image
              source={item?.image}
              style={{ height: "75%", width, resizeMode: "contain" }}
            />
            <View>
              <Text style={styles.title}>{item?.title}</Text>
              <Text style={styles.subtitle}>{item?.subtitle}</Text>
            </View>
          </View>
        )}
      />
      <View
        style={{
          height: height * 0.25,
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: "white",
                  width: 25,
                },
              ]}
            />
          ))}
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => ref?.current?.scrollToOffset({ offset: 372 })}
          style={styles.btn}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            NEXT
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  btn: {
    height: 50,
    borderRadius: 5,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  subtitle: {
    color: "white",
    fontSize: 13,
    marginTop: 10,
    maxWidth: "70%",
    textAlign: "center",
    lineHeight: 23,
  },
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: "grey",
    marginHorizontal: 3,
    borderRadius: 2,
  },
});
