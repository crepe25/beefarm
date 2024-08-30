import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'CreateSellPost'>;

const CreateSellPostScreen = ({ navigation }: Props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleCreatePost = () => {
        // 여기서 API 호출로 새 판매 글을 작성하는 로직을 추가하세요.
        console.log({ title, description });
        navigation.goBack();
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text>판매 글 제목</Text>
            <TextInput value={title} onChangeText={setTitle} style={{ borderBottomWidth: 1, marginBottom: 10 }} />
            <Text>판매 글 설명</Text>
            <TextInput value={description} onChangeText={setDescription} style={{ borderBottomWidth: 1, marginBottom: 10 }} />
            <Button title="글 작성" onPress={handleCreatePost} />
        </View>
    );
};

export default CreateSellPostScreen;
