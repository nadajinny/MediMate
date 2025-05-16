import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [agreed, setAgreed] = useState(false);

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRegister = () => {
    let valid = true;
    let newErrors = {};

    if (!name.trim()) {
      newErrors.name = '이름을 입력해주세요.';
      valid = false;
    } else if (name.trim().length < 4) {
      newErrors.name = '아이디는 최소 4자 이상이어야 합니다.';
      valid = false;
    }

    if (!email.trim()) {
      newErrors.email = '이메일을 입력해주세요.';
      valid = false;
    } else if (!validateEmail(email.trim())) {
      newErrors.email = '이메일 형식이 올바르지 않습니다.';
      valid = false;
    }

    if (!password.trim()) {
      newErrors.password = '비밀번호를 입력해주세요.';
      valid = false;
    } else if (password.length < 8) {
      newErrors.password = '비밀번호는 최소 8자 이상이어야 합니다.';
      valid = false;
    }

    if (!passwordConfirm.trim()) {
      newErrors.passwordConfirm = '비밀번호 확인을 입력해주세요.';
      valid = false;
    } else if (password !== passwordConfirm) {
      newErrors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
      valid = false;
    }

    if (!agreed) {
      Alert.alert('알림', '약관 및 개인정보 보호정책에 동의해야 가입할 수 있습니다.');
      return;
    }

    if (!valid) {
      setErrors(newErrors);
      return;
    }

    // 성공 시
    Alert.alert('회원가입 완료', '내 정보를 입력해주세요.');
    navigation.navigate('InfoInput');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>회원가입</Text>

      <TextInput
        placeholder="이름 (아이디)"
        style={styles.input}
        onChangeText={setName}
        value={name}
      />
      {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

      <TextInput
        placeholder="이메일 주소"
        style={styles.input}
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
      />
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

      <TextInput
        placeholder="비밀번호"
        secureTextEntry
        style={styles.input}
        onChangeText={setPassword}
        value={password}
      />
      {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

      <TextInput
        placeholder="비밀번호 확인"
        secureTextEntry
        style={styles.input}
        onChangeText={setPasswordConfirm}
        value={passwordConfirm}
      />
      {errors.passwordConfirm && <Text style={styles.errorText}>{errors.passwordConfirm}</Text>}

      <View style={styles.checkboxContainer}>
        <TouchableOpacity onPress={() => setAgreed(!agreed)} style={styles.checkboxBox}>
          <View style={agreed ? styles.checkboxChecked : styles.checkboxEmpty} />
        </TouchableOpacity>
        <Text style={styles.checkboxLabel}>
          가입을 위해 <Text style={{ fontWeight: 'bold' }}>약관</Text>과{' '}
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
    marginBottom: 8,
    borderRadius: 4,
  },
  errorText: {
    color: 'red',
    fontSize: 13,
    marginBottom: 8,
    marginLeft: 4,
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
