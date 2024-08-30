import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const InquiryBoardScreen = () => {
    const [inquiry, setInquiry] = useState('');

    const handleSendInquiry = () => {
        // 문의 전송 로직 추가
        Alert.alert("문의가 전송되었습니다.");
        setInquiry('');
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text>문의하기</Text>
            <TextInput
                value={inquiry}
                onChangeText={setInquiry}
                placeholder="문의 내용을 입력하세요."
                style={{ borderBottomWidth: 1, marginBottom: 20 }}
            />
            <Button title="문의 전송" onPress={handleSendInquiry} />
        </View>
    );
};

export default InquiryBoardScreen;
