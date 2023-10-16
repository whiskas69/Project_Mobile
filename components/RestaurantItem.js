import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const RestaurantItem = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.cardContainer}>
                <View style={styles.card}>
                    <View style={styles.Imagebox}>
                        <Image source={{
                            uri: "https://static.cdntap.com/tap-assets-prod/wp-content/uploads/sites/25/2022/10/tom-yum-recipe.jpg"
                        }}
                            style={styles.Image}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginTop: 10}}>
                        <View style={styles.maintext}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 10 }}>ตามสั่งคุณพิสมัย</Text>
                            <Text style={{ fontSize: 13, color: 'gray', marginLeft: 10 }}>อาหารตามสั่ง</Text>
                        </View>
                        <Text style={{ fontSize: 15, height: 30, width: 60, alignItems: 'center'}}>10 รีวิว</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flexWrap: 'wrap'
    },
    card: {
        width: 370,
        height: 180,
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
    },
    Imagebox: {
        width: 370,
        height: 120,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: 'hidden'
    },
    Image: {
        width: 370,
        height: 120,
        resizeMode: 'cover'
    },
    cardContainer: {
        marginLeft: 12,
        marginBottom: 10
    }
});

export default RestaurantItem;