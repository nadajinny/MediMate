import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import { firebaseAuth, firebaseDB } from '../firebase/firebase';
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

interface Props {
  uid: string;
}

const AccessWatcher: React.FC<Props> = ({ uid }) => {
  useEffect(() => {
    if (!uid) return;

    const unsubscribe = firebaseDB
      .collection('access_logs')
      .where('targetPatientId', '==', uid)
      .where('status', '==', 'pending')
      .orderBy('timestamp', 'desc')
      .limit(1)
      .onSnapshot(
        snapshot => {
          if (!snapshot || !snapshot.docChanges) return;

          snapshot.docChanges().forEach(change => {
            if (change.type !== 'added') return;

            const data = change.doc.data();
            const viewer = data.searcherId ?? '(알 수 없음)';
            const time =
              data.timestamp?.toDate
                ? data.timestamp.toDate().toLocaleString()
                : data.timestamp ?? '';

            Alert.alert(
              '개인정보 접근 감지',
              `${viewer} 님이 ${time}에 개인정보를 조회했습니다.`
            );

            // 상태 변경 (optional)
            change.doc.ref.update({ status: 'notified' }).catch(console.error);
          });
        },
        error => {
          console.error('AccessWatcher 오류:', error);
        }
      );

    return () => unsubscribe();
  }, [uid]);

  return null;
};

export default AccessWatcher;
