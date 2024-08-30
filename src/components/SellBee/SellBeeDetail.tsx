import React from 'react';
import { View, Text } from 'react-native';

const SellBeeDetail = ({ route }) => {
    const { postId } = route.params;

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text>판매 글 상세 보기 - ID: {postId}</Text>
            {/* 여기서 postId를 사용해 API 호출을 통해 해당 글의 상세 정보를 가져옵니다. */}
        </View>
    );
};

export default SellBeeDetail;
