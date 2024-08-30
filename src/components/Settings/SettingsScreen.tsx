import React from 'react';
import { View, Text, Button, Alert } from 'react-native';

const SettingsScreen = ({ navigation }) => {
    const handleAccountDeletion = () => {
        // 계정 삭제 로직 추가
        Alert.alert("계정이 삭제되었습니다.");
    };

    const handleInquiryNavigation = () => {
        navigation.navigate('InquiryBoard');
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text>설정</Text>
            <Button title="문의하기" onPress={handleInquiryNavigation} />
            <Button title="회원탈퇴" onPress={handleAccountDeletion} color="red" />
        </View>
    );
};

export default SettingsScreen;
