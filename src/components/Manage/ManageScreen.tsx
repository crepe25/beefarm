import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, Alert } from 'react-native';

const ManageScreen = ({ navigation }) => {
    const [myPosts, setMyPosts] = useState([
        { id: '1', title: '내 글 1' },
        { id: '2', title: '내 글 2' },
    ]);

    const handleEditPost = (postId) => {
        navigation.navigate('EditPost', { postId });
    };

    const handleDeletePost = (postId) => {
        // 게시글 삭제 로직 추가
        Alert.alert("게시글이 삭제되었습니다.");
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <FlatList
                data={myPosts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={{ padding: 10 }}>
                        <Text>{item.title}</Text>
                        <Button title="수정" onPress={() => handleEditPost(item.id)} />
                        <Button title="삭제" onPress={() => handleDeletePost(item.id)} color="red" />
                    </View>
                )}
            />
        </View>
    );
};

export default ManageScreen;
