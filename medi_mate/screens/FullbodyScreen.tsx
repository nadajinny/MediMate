import React, { useState } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';

const FullbodyScreen = ({ navigation }) => {
  const [isFront, setIsFront] = useState(true);

  const handlePress = (part) => {
    console.log(`${part} 클릭됨`);
    // navigation.navigate('DetailScreen', { part });
  };

  const toggleView = () => setIsFront(!isFront);

  return (
    <View style={styles.container}>
      {/* 전환 버튼 */}
      <TouchableOpacity style={styles.toggleButton} onPress={toggleView}>
        <Text style={styles.toggleText}>{isFront ? '뒷면 보기' : '앞면 보기'}</Text>
      </TouchableOpacity>

      <Image
        source={
          isFront
            ? require('../image/Full_front.png')
            : require('../image/Full_back.png')
        }
        style={styles.image}
      />

      {/* 앞면 버튼 */}
      {isFront && (
        <>
          {/* 상체 위 */}
          <TouchableOpacity
            style={[styles.button, { top: '20%', left: '42%', width: '18%', height: '8%' }]}
            onPress={() => handlePress('상체')}
          />
          {/* 상체 아래 */}
          <TouchableOpacity
            style={[styles.button, { top: '30%', left: '41%', width: '18%', height: '20%' }]}
            onPress={() => handlePress('상체')}
          />
          {/* 팔 */}
          <TouchableOpacity
            style={[styles.button, { top: '30%', left: '25%', width: '15%', height: '10%' }]}
            onPress={() => handlePress('왼팔')}
          />
          <TouchableOpacity
            style={[styles.button, { top: '30%', right: '25%', width: '15%', height: '10%' }]}
            onPress={() => handlePress('오른팔')}
          />
          {/* 팔 아래 */}
          <TouchableOpacity
            style={[styles.button, { top: '40%', left: '10%', width: '20%', height: '10%' }]}
            onPress={() => handlePress('왼팔 아래')}
          />
          <TouchableOpacity
            style={[styles.button, { top: '40%', right: '10%', width: '20%', height: '10%' }]}
            onPress={() => handlePress('오른팔 아래')}
          />
          {/* 허벅지 */}
          <TouchableOpacity
            style={[styles.button, { top: '52%', left: '30%', width: '15%', height: '10%' }]}
            onPress={() => handlePress('왼쪽 허벅지')}
          />
          <TouchableOpacity
            style={[styles.button, { top: '52%', right: '30%', width: '15%', height: '10%' }]}
            onPress={() => handlePress('오른쪽 허벅지')}
          />
          {/* 종아리 */}
          <TouchableOpacity
            style={[styles.button, { top: '65%', left: '23%', width: '15%', height: '10%' }]}
            onPress={() => handlePress('왼쪽 종아리')}
          />
          <TouchableOpacity
            style={[styles.button, { top: '65%', right: '23%', width: '15%', height: '10%' }]}
            onPress={() => handlePress('오른쪽 종아리')}
          />
        </>
      )}

      {/* 뒷면 버튼 */}
      {!isFront && (
        <>
          {/* 등 상부 */}
          <TouchableOpacity
            style={[styles.button, { top: '20%', left: '42%', width: '18%', height: '10%' }]}
            onPress={() => handlePress('등 상부')}
          />
          {/* 등 하부 */}
          <TouchableOpacity
            style={[styles.button, { top: '32%', left: '42%', width: '18%', height: '10%' }]}
            onPress={() => handlePress('등 하부')}
          />
          {/* 팔 (뒤) */}
          <TouchableOpacity
            style={[styles.button, { top: '30%', left: '22%', width: '14%', height: '10%' }]}
            onPress={() => handlePress('왼팔 뒤')}
          />
          <TouchableOpacity
            style={[styles.button, { top: '30%', right: '22%', width: '14%', height: '10%' }]}
            onPress={() => handlePress('오른팔 뒤')}
          />
          {/* 허벅지 뒤 */}
          <TouchableOpacity
            style={[styles.button, { top: '54%', left: '30%', width: '15%', height: '10%' }]}
            onPress={() => handlePress('왼쪽 허벅지 뒤')}
          />
          <TouchableOpacity
            style={[styles.button, { top: '54%', right: '30%', width: '15%', height: '10%' }]}
            onPress={() => handlePress('오른쪽 허벅지 뒤')}
          />
          {/* 종아리 뒤 */}
          <TouchableOpacity
            style={[styles.button, { top: '70%', left: '24%', width: '15%', height: '10%' }]}
            onPress={() => handlePress('왼쪽 종아리 뒤')}
          />
          <TouchableOpacity
            style={[styles.button, { top: '70%', right: '24%', width: '15%', height: '10%' }]}
            onPress={() => handlePress('오른쪽 종아리 뒤')}
          />
        </>
      )}
    </View>
  );
};

export default FullbodyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    position: 'absolute',
  },
  button: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 255, 0.2)', // 디버깅용
    borderRadius: 8,
  },
  toggleButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 10,
    backgroundColor: '#000',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  toggleText: {
    color: '#fff',
    fontSize: 14,
  },
});
