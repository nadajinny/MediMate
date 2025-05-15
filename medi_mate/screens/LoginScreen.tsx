import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>App name</Text>

      <View style={styles.form}>
        <TextInput
          placeholder="이메일을 주소를 입력하세요."
          style={styles.input}
          placeholderTextColor="#999"
        />
        <TextInput
          placeholder="비밀번호를 입력하세요."
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#999"
        />

        <TouchableOpacity style={styles.loginButton} onPress={()=>navigation.navigate('QuizScreen')}>
          <Text style={styles.loginButtonText}>이메일로 로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton}
         onPress={() => navigation.navigate('Register')} >
          <Text style={styles.loginButtonText}>회원가입</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>KIMPACT Lab.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 60,
    backgroundColor: '#fff',
  },
  appName: {
    fontSize: 24,
    color: '#001F54',
    marginTop: 50,
  },
  form: {
    width: '80%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 12,
    marginBottom: 20,
    fontSize: 16,
  },
  loginButton: {
    borderWidth: 1,
    borderColor: '#FF7A7A',
    marginBottom: 7, 
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    width: '100%',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#FF7A7A',
    fontWeight: '600',
    fontSize: 16,
  },
  footer: {
    color: '#001F54',
    fontSize: 12,
  },
});

export default LoginScreen;
