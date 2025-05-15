import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  CheckBox, // 만약 이게 안 되면 @react-native-community/checkbox 패키지를 설치하세요
} from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [agreed, setAgreed] = useState(false);

  const handleRegister = () => {
    if (!agreed) {
      Alert.alert('알림', '약관 및 개인정보 보호정책에 동의해야 가입할 수 있습니다.');
      return;
    }

    // TODO: 회원가입 로직 처리 후 InfoInput 페이지로 이동
    Alert.alert('회원가입 완료', '내 정보를 입력해주세요.');
    
    navigation.navigate('InfoInput');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>회원가입</Text>

      <TextInput placeholder="이름" style={styles.input} />
      <TextInput placeholder="휴대폰 번호" style={styles.input} keyboardType="phone-pad" />
      <TextInput placeholder="비밀번호" secureTextEntry style={styles.input} />
      <TextInput placeholder="성별 (남자 / 여자)" style={styles.input} />
      <TextInput placeholder="연령(만)" style={styles.input} keyboardType="numeric" />
      <TextInput placeholder="주소" style={styles.input} />

      <View style={styles.checkboxContainer}>
        <TouchableOpacity onPress={() => setAgreed(!agreed)} style={styles.checkboxBox}>
          <View style={agreed ? styles.checkboxChecked : styles.checkboxEmpty} />
        </TouchableOpacity>
        <Text style={styles.checkboxLabel}>
          가입을 위해{' '}
          <Text style={{ fontWeight: 'bold' }}>약관</Text>과{' '}
          <Text style={{ fontWeight: 'bold' }}>개인정보 보호정책</Text>에 동의합니다.
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>가입하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 15,
    borderRadius: 4,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  checkboxBox: {
    marginRight: 8,
  },
  checkboxEmpty: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 4,
  },
  checkboxChecked: {
    width: 20,
    height: 20,
    backgroundColor: '#007AFF',
    borderRadius: 4,
  },
  checkboxLabel: {
    flexShrink: 1,
    fontSize: 14,
    color: '#333',
  },
  button: {
    backgroundColor: '#001F54',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});


export default RegisterScreen;
