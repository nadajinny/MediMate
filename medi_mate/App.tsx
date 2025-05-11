import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, Text, View, Button, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Sample screens (minimal skeletons)
function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Button title="오늘의 건강 요약" onPress={() => navigation.navigate('Summary')} />
      <Button title="진료 기록 보기" onPress={() => navigation.navigate('Record')} />
      <Button title="건강일지 작성" onPress={() => navigation.navigate('Diary')} />
      <Button title="QR 코드 보기" onPress={() => navigation.navigate('QRCode')} />
      <Button title="챗봇" onPress={() => navigation.navigate('Chat')} />
    </SafeAreaView>
  );
}

function SummaryScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>최근 진료 요약 or 건강일지 요약</Text>
      <Button title="최근 기록 보기" />
    </SafeAreaView>
  );
}

function RecordScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>진료 기록 자막 화면</Text>
      <Button title="요약" />
    </SafeAreaView>
  );
}

function ResultScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>진료 요약 결과: 증상/약물/다음 일정</Text>
    </SafeAreaView>
  );
}

function DiaryScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>건강일지 기록</Text>
    </SafeAreaView>
  );
}

function QRCodeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>QR 응급 정보</Text>
      <Button title="공유 설정" />
    </SafeAreaView>
  );
}

function ChatScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>챗봇 대화창</Text>
    </SafeAreaView>
  );
}

function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>프로필 / 설정</Text>
    </SafeAreaView>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="홈" component={HomeScreen} options={{ tabBarIcon: ({ color }) => (<MaterialIcons name="home" size={24} color={color} />) }} />
      <Tab.Screen name="프로필" component={ProfileScreen} options={{ tabBarIcon: ({ color }) => (<MaterialIcons name="person" size={24} color={color} />) }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Summary" component={SummaryScreen} options={{ title: '건강 요약' }} />
        <Stack.Screen name="Record" component={RecordScreen} options={{ title: '진료 자막' }} />
        <Stack.Screen name="Result" component={ResultScreen} options={{ title: '진료 요약 결과' }} />
        <Stack.Screen name="Diary" component={DiaryScreen} options={{ title: '건강일지' }} />
        <Stack.Screen name="QRCode" component={QRCodeScreen} options={{ title: 'QR 응급 정보' }} />
        <Stack.Screen name="Chat" component={ChatScreen} options={{ title: '챗봇' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
