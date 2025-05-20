import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, Alert } from 'react-native';

const DetailScreen = ({ route }) => {
  const { part, direction: initialDirection } = route.params;
  const [direction, setDirection] = useState(initialDirection); // 앞면/뒷면 상태

  const toggleDirection = () => {
    setDirection(prev => (prev === 'front' ? 'back' : 'front'));
  };

  const getImage = () => {
    switch (part) {
      case '왼팔':
        return direction === 'front'
          ? require('../image/arm_left_front.png')
          : require('../image/arm_left_back.png');
      case '오른팔':
        return direction === 'front'
          ? require('../image/arm_right_front.png')
          : require('../image/arm_right_back.png');
      case '상체':
        return direction === 'front'
          ? require('../image/chest.png')
          : require('../image/back.png');
      case '왼팔 아래':
        return direction === 'front'
          ? require('../image/forearm_left_front.png')
          : require('../image/forearm_left_back.png');
      case '오른팔 아래':
        return direction === 'front'
          ? require('../image/forearm_right_front.png')
          : require('../image/forearm_right_back.png');
      case '왼쪽 허벅지':
        return direction === 'front'
          ? require('../image/thigh_left_front.png')
          : require('../image/thigh_left_back.png');
      case '오른쪽 허벅지':
        return direction === 'front'
          ? require('../image/thigh_right_front.png')
          : require('../image/thigh_right_back.png');
      case '왼쪽 종아리':
        return direction === 'front'
          ? require('../image/calf_left_front.png')
          : require('../image/calf_left_back.png');
      case '오른쪽 종아리':
        return direction === 'front'
          ? require('../image/calf_right_front.png')
          : require('../image/calf_right_back.png');
      case '머리':
        return direction === 'front'
          ? require('../image/head_front.png')
          : require('../image/head_back.png');
      default:
        return null;
    }
  };

  const onAreaPress = (areaName: string) => {
    Alert.alert(`${areaName} 터치됨`);
    // 추후 navigation.navigate(...) 등으로 확장 가능
  };

  const getTouchableButtons = () => {
    switch (part) {
      case '머리':
        return (
          <TouchableOpacity
            style={[styles.button, { top: '35%', left: '40%', width: '20%', height: '30%' }]}
            onPress={() => onAreaPress('머리')}
          />
        );

      case '상체':
        return (
          <>
            <TouchableOpacity
              style={[styles.button, { top: '30%', left: '35%', width: '30%', height: '20%' }]}
              onPress={() => onAreaPress('가슴')}
            />
            <TouchableOpacity
              style={[styles.button, { top: '55%', left: '35%', width: '30%', height: '20%' }]}
              onPress={() => onAreaPress('복부')}
            />
          </>
        );

      case '왼팔':
      case '오른팔':
        return (
          <>
            <TouchableOpacity
              style={[styles.button, { top: '30%', left: '35%', width: '30%', height: '20%' }]}
              onPress={() => onAreaPress(`${part} 위쪽`)}
            />
            <TouchableOpacity
              style={[styles.button, { top: '55%', left: '35%', width: '30%', height: '20%' }]}
              onPress={() => onAreaPress(`${part} 아래쪽`)}
            />
          </>
        );

      case '왼팔 아래':
      case '오른팔 아래':
        return (
          <TouchableOpacity
            style={[styles.button, { top: '40%', left: '35%', width: '30%', height: '40%' }]}
            onPress={() => onAreaPress(part)}
          />
        );

      case '왼쪽 허벅지':
      case '오른쪽 허벅지':
        return (
          <TouchableOpacity
            style={[styles.button, { top: '35%', left: '35%', width: '30%', height: '40%' }]}
            onPress={() => onAreaPress(part)}
          />
        );

      case '왼쪽 종아리':
      case '오른쪽 종아리':
        return (
          <TouchableOpacity
            style={[styles.button, { top: '60%', left: '35%', width: '30%', height: '35%' }]}
            onPress={() => onAreaPress(part)}
          />
        );

      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`${part} - ${direction === 'front' ? '앞면' : '뒷면'}`}</Text>
      <View style={styles.imageContainer}>
        {getImage() && <Image source={getImage()} style={styles.image} />}
        {getTouchableButtons()}
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={`👉 ${direction === 'front' ? '뒷면 보기' : '앞면 보기'}`}
          onPress={toggleDirection}
        />
      </View>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  imageContainer: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    position: 'absolute',
  },
  button: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 0, 0, 0.2)', // 적당한 투명도
    borderRadius: 8,
  },
  buttonContainer: {
    padding: 20,
  },
});
