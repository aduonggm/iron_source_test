import { View, Text, Button, StatusBar, StyleSheet, Image } from "react-native"

import NotificationButton from "./NotificationButton"
import StoryList from "./StoryList"
import { ScrollView } from "react-native-gesture-handler"

import {
  PixelRatio,
  TouchableOpacity,
  UIManager,
  findNodeHandle,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import {
  Banner,
  BannerView,
  Ironsource,
} from 'react-native-ironsource-advanced';

const HomeScreen = ({ navigation }: any) => {


  useEffect(() => {
    Ironsource.initWithAdUnits('1ac27d185', ['BANNER'], {
    
      validateIntegration: true,
    });

    Ironsource.onInitCompleted.setListener = onInitIronsourceComplete;
  });

  const onBannerLoaded = () => {
    console.log('============>>>> on banner loaded');
  };
  const onBannerLoadFailed = () => {
    console.log('============>>>> on banner load failed no message ');
    return (error: string) => {
      console.log('============>>>> on banner load failed', error);
    };
  };
  const [positionBanner, setPositionBanner] = useState(0);

  const onInitIronsourceComplete = () => {
    console.log('===========>>>>>>> on int complete ');
  };
  const componentRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0, width: 0, height: 0 });

  const loadBanner = () => {
    console.log('===============>>>>>>> on load banner ');
    Banner.init();
    Banner.onLoaded.setListener = onBannerLoaded;
    Banner.onFailedToLoad.setListener = onBannerLoadFailed;
  };

  const destroyBanner = () => {};
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#ffffff' barStyle='dark-content' />
      <View style={styles.appBar}>
        <Text style={styles.textHeader}> Postinger. </Text>
        <NotificationButton />
      </View>

      <ScrollView>
        <StoryList />
        <View style = {{ backgroundColor: "red", height:300 , width: "100%"}}/>
      
        <TouchableOpacity
        style={{ backgroundColor: 'green', padding: 20 }}
        onPress={() => {
          loadBanner();
        }}
      >
        <Text>load banner</Text>
      </TouchableOpacity>
      <View
        style={{
          height: 200,
          width: '100%',
          backgroundColor: 'grey',
        }}
      >
        <BannerView
          style={{ height: 150, width: '100%', backgroundColor: 'black' }}
        />
      </View>
        <View style = {{ backgroundColor: "green", height:300 , width: "100%"}}/>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 24,
    color: "black",
    fontWeight: "500"
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#ffffff"
  },

  appBar: {
    height: 60,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between"
  }
})
export default HomeScreen
