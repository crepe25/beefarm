import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const EditPostScreen = ({ route, navigation }) => {
    const { postId } = route.params;
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleUpdatePost = () => {
        // 게시글 수정 로직 추가
        Alert.alert("게시글이 수정되었습니다.");
        navigation.goBack();
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <TextInput
                value={title}
                onChangeText={setTitle}
                placeholder="글 제목 수정"
                style={{ borderBottomWidth: 1, marginBottom: 20 }}
            />
            <TextInput
                value={description}
                onChangeText={setDescription}
                placeholder="글 설명 수정"
                style={{ borderBottomWidth: 1, marginBottom: 20 }}
            />
            <Button title="수정 완료" onPress={handleUpdatePost} />
        </View>
    );
};

export default EditPostScreen;
