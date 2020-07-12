import React from "react";
import { View, Image, FlatList, SafeAreaView } from "react-native";
import { Feather } from "@expo/vector-icons";

import { HeadStyles as styles } from "./Styles";
import Post from './Post';
import {posts} from './DataForPosts'
import { StatusBar } from "expo-status-bar";

export default function App() {
    return (
        <View>
            <SafeAreaView name='head' style={styles.headContainer}>
                <View name='emptyView' style={styles.emptyView} />
                <Image
                    source={require("./assets/instagram.png")}
                    style={styles.instagram}
                    resizeMode="contain"
                />
                <Feather name="inbox" size={25} color="black" style={styles.inboxIcon} />
            </SafeAreaView>
            <FlatList name='body'
                data={posts}
                keyExtractor={(item, index) => item.id + index + "index"}
                renderItem={({item}) => <Post item={item} />}
            />
        </View>
    );
}