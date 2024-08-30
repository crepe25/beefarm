import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';

const SellBeeScreen = ({ navigation }) => {
    const [sellPosts, setSellPosts] = React.useState([
        { id: '1', title: '판매 글 1' },
        { id: '2', title: '판매 글 2' },
    ]);

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={sellPosts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('SellBeeDetail', { postId: item.id })}>
                        <View style={{ padding: 20 }}>
                            <Text>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
            <Button title="판매 글 작성" onPress={() => navigation.navigate('CreateSellPost')} />
        </View>
    );
};

export default SellBeeScreen;
