import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../components/Home/HomeScreen';
import BuyBeeScreen from '../components/BuyBee/BuyBeeScreen';
import BuyBeeDetail from '../components/BuyBee/BuyBeeDetail';
import CreateBuyPostScreen from '../components/BuyBee/CreateBuyPostScreen';
import SellBeeScreen from '../components/SellBee/SellBeeScreen';
import SellBeeDetail from '../components/SellBee/SellBeeDetail';
import CreateSellPostScreen from '../components/SellBee/CreateSellPostScreen';
import ManageScreen from '../components/Manage/ManageScreen';
import EditPostScreen from '../components/Manage/EditPostScreen';
import SettingsScreen from '../components/Settings/SettingsScreen';
import InquiryBoardScreen from '../components/Settings/InquiryBoardScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="BuyBee" component={BuyBeeScreen} />
                <Tab.Screen name="SellBee" component={SellBeeScreen} />
                <Tab.Screen name="Manage" component={ManageScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
