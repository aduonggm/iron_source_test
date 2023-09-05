import {
  PixelRatio,
  StyleSheet,
  Text,
  TouchableOpacity,
  UIManager,
  View,
  findNodeHandle,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import {
  Banner,
  BannerView,
  Ironsource,
} from 'react-native-ironsource-advanced';

const IronSourceBannerComponent = () => {
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
    <View
      ref={componentRef}
      style={{
       

        backgroundColor: 'red',
      }}
    >
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
    </View>
  );
};


const styles = StyleSheet.create({});

export default IronSourceBannerComponent;