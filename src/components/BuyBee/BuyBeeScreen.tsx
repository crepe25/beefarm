import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'BuyBee'>;

const BuyBeeScreen = ({ navigation }: Props) => {
    return (
        <View>
            <Text>Buy Bee Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('BuyBeeDetail', { itemId: 123 })}  // 매개 변수 추가
            />
        </View>
    );
};

export default BuyBeeScreen;
