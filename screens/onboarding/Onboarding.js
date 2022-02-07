import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useRef } from "react";
const { width, height } = Dimensions.get("window");
const slides = [
  {
    id: "1",
    //   image: require("../../assets/banner.png"),
    title: "Transfer That Is Safe",
    subtitle: "You have nothing to be scared about, we got you covered.",
  },
  {
    id: "2",
    //    image: require("../../assets/banner.png"),
    title: "Achieve Your Goals",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "3",
    //   image: require("../../assets/banner.png"),
    title: "Increase Your Value",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function Onboarding() {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = useRef();
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };
  const goToNextSlide = () => {
    if (currentSlideIndex != slides.length - 1) {
      ref?.current?.scrollToOffset({
        offset: (currentSlideIndex + 1) * width,
      });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };
  function skip() {
    ref?.current?.scrollToOffset({
      offset: slides.length * width,
    });
    setCurrentSlideIndex(slides.length - 1);
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0E164D" }}>
      <ImageBackground
        source={require("../../assets/banner.png")}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <FlatList
          ref={ref}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={slides}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          contentContainerStyle={{
            height: height * 0.75,
            opacity: 0,
          }}
          pagingEnabled
          renderItem={({ item }) => (
            <View style={{ alignItems: "center" }}>
              <View style={{ width }}>
                <Text style={styles.title}>{item?.title}</Text>
                <Text style={styles.subtitle}>{item?.subtitle}</Text>
              </View>
            </View>
          )}
        />
        <View
          style={{
            height: 224,
            paddingHorizontal: 20,
            backgroundColor: "#17288E",
            borderTopRightRadius: 70,
            marginRight: 52,
          }}
        >
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
            }}
          >
            {/* Render indicator */}
            {slides.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.indicator,
                  currentSlideIndex == index && {
                    backgroundColor: "#FFB129",
                    width: 32,
                    height: 8,
                  },
                ]}
              />
            ))}
          </View>

          <View>
            <Text style={styles.title}>{slides[currentSlideIndex]?.title}</Text>
            <Text style={styles.subtitle}>
              {slides[currentSlideIndex]?.subtitle}
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#FFFFFF",
                width: 145,
                height: 50,
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 14,
              }}
            >
              <Text>Start banking</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
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
    lineHeight: 23,
  },
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "700",
    marginTop: 20,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  indicator: {
    height: 8,
    width: 16,
    backgroundColor: "#FDD590",
    marginHorizontal: 3,
    borderRadius: 4,
  },
});
