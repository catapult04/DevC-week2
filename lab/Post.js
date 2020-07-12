import React from "react";
import { Text, View, Image, Alert } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import { PostStyles as styles } from "./Styles";

export default function Post({ item }) {
    return (
        <View>
            <View style={styles.avatarContainer}>
                <Image source={item.avatar} style={styles.avatar} />
                <Text style={styles.userName}>{item.name}</Text>
            </View>
            
            <Image source={item.image} style={styles.image} />

            <View name='action' style={styles.actionIconContainer}>
                <Feather
                    name="heart"
                    size={25}
                    color="black"
                    onPress={() => Alert.alert("Liked")}
                />
                <Feather
                    name="message-square"
                    size={25}
                    color="black"
                    style={styles.actionIcon}
                    onPress={() => Alert.alert("Commented")}
                />
                <Feather
                    name="share"
                    size={25}
                    color="black"
                    style={styles.actionIcon}
                    onPress={() => Alert.alert("Shared")}
                />
            </View>

            <View style={styles.likeCountContainer}>
                <AntDesign name="heart" size={25} color="black" />
                <Text style={styles.likeCount}>
                    {item.likeCount} likes
                </Text>
            </View>

            <View
                style={{height: 45}}
            />
        </View>
    );
}