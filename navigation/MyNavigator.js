import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from '@expo/vector-icons';

import Categories from "../screen/categories";
import Changepassword from '../screen/changePassword'
import ChooseScreen from "../screen/ChooseScreen";
import DetailScreen from '../screen/DetailScreen'
import Editme from '../screen/editMe'
import EditReview from '../screen/editReview'
import FavoriteScreen from '../screen/FavoritScreen'
import MainScreen from '../screen/FavoritScreen'
import Me from '../screen/me'
import MenuScreen from '../screen/MenuScreen'
import ReviewHis from '../screen/reviewHis'

const MenuNavigator = createNativeStackNavigator();
const CategoriesNavigator = createNativeStackNavigator();
const FavoriteNavigator = createNativeStackNavigator();
const MeNavigator = createNativeStackNavigator();
const BottomNavigator = createBottomTabNavigator();

function MenuNavigation() {
    return (
        <MenuNavigator.Navigator
            initialRouteName="FirstScreen"
            screenOptions={{
                headerStyle: { backgroundColor: "#3F2305" },
                headerTintColor: "white"
            }}>
            <MenuNavigator.Screen
                name="MainScreen"
                component={MainScreen}
                options={{
                    title: "หน้าหลัก"
                }} />
            <MenuNavigator.Screen
                name="RestaurantScreen"
                component={ChooseScreen}
                options={{
                    title: "เลือกร้านอาหาร"
                }} />
            <MenuNavigator.Screen
                name="DetailScreen"
                component={DetailScreen}
                options={{
                    title: ร้านตามสั่ง
                }} />
        </MenuNavigator.Navigator>
    );
}

function FavoriteNavigation() {
    return (
        <FavoriteNavigator.Navigator
            initialRouteName="FavoriteScreen"
            screenOptions={{
                headerStyle: { backgroundColor: "#3F2305" },
                headerTintColor: "white"
            }}>
            <FavoriteNavigator.Screen
                name="Favorite"
                component={FavoriteScreen}
                options={{
                    title: 'ร้านที่ชื่นชอบ'
                }} />
            <FavoriteNavigator.Screen
                name="RestaurantScreen"
                component={DetailScreen}
                options={{
                    title: 'ร้านคุณสมัย'
                }} />
        </FavoriteNavigator.Navigator>
    )
}

function CategoriesNavigation() {
    return (
        <CategoriesNavigator.Navigator
            initialRouteName="CatgoriesScreen"
            screenOptions={{
                headerStyle: { backgroundColor: "#3F2305" },
                headerTintColor: "white"
            }}>
            <CategoriesNavigator.Screen
                name="Catgories"
                component={Categories}
                options={{
                    title: 'หมวดหมู๋'
                }} />
            <CategoriesNavigator.Screen
                name="RestaurantScreen"
                component={ChooseScreen}
                options={{
                    title: "เลือกร้านอาหาร"
                }} />
            <CategoriesNavigator.Screen
                name="DetailScreen"
                component={DetailScreen}
                options={{
                    title: ร้านตามสั่ง
                }} />
        </CategoriesNavigator.Navigator>
    )
}

function ProfileNavigation() {
    return (
        <MeNavigator.Navigator
            initialRouteName="ProfileScreen"
            screenOptions={{
                headerStyle: { backgroundColor: "#3F2305" },
                headerTintColor: "white"
            }}>
            <MeNavigator.Screen
                name="MeScreen"
                component={Me}
                options={{
                    title: 'ฉัน'
                }} />
            <MeNavigator.Screen
                name="ChangpasswordSceeen"
                component={Changepassword}
                options={{
                    title: "เปลี่ยนรหัสผ่าน"
                }} />
            <MeNavigator.Screen
                name="EditmeScreen"
                component={Editme}
                options={{
                    title: "แก้ไขข้อมูลส่วนตัว"
                }} />
            <MeNavigator.Screen
                name="ReviewHis"
                component={ReviewHis}
                options={{
                    title: "ประวัติการรีวิว"
                }} />
        </MeNavigator.Navigator>
    )
}

export default function MyNavigator() {
    return (
        <NavigationContainer>
            <BottomNavigator.Navigator
                screenOptions={{
                    headerShown: false,
                    headerStyle: { backgroundColor: "#4a148c", },
                    headerTintColor: "white"
                }}>
                <BottomNavigator.Screen
                    name="FirstScreen"
                    component={MenuNavigation}
                    options={{
                        title: "หน้าหลัก",
                        tabBarIcon: ({ color, size }) => {
                            return <Ionicons name="ios-restaurant" size={size} color={color} />
                          }
                    }}
                />
                <BottomNavigator.Screen
                    name="FavoriteScreen"
                    component={FavoriteNavigation}
                    options={{
                        title: "หน้าหลัก",
                        tabBarIcon: ({ color, size }) => {
                            return <Ionicons name="ios-restaurant" size={size} color={color} />
                          }
                    }}
                />
                <BottomNavigator.Screen
                    name="CatgoriesScreen"
                    component={CategoriesNavigation}
                    options={{
                        title: "หน้าหลัก",
                        tabBarIcon: ({ color, size }) => {
                            return <Ionicons name="ios-restaurant" size={size} color={color} />
                          }
                    }}
                />
                <BottomNavigator.Screen
                    name="ProfileScreen"
                    component={ProfileNavigation}
                    options={{
                        title: "หน้าหลัก",
                        tabBarIcon: ({ color, size }) => {
                            return <Ionicons name="ios-restaurant" size={size} color={color} />
                          }
                    }}
                />
            </BottomNavigator.Navigator>
        </NavigationContainer >
    );
}
