import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, 
  Text, 
  View,
  SafeAreaView,
  FlatList,
  Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      //TODO 
      Sử dụng SafeAreaView để không đè lên thanh taskbar
      Sử dụng flatlist (kế thừa scroll view) để hiển thị các posts dưỡi dạng flatlist item
      thuộc tính aspecRatio: tỉ lệ width/height
      marginLeft, ...

      <Image style={style.headContainer}> 
        uri ... => replace by function require().
      </Image>

      <FlatList>
        
      </FlatList>

      //end TODO
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // dùng extension check mã màu để đặt màu đúng cho container
    alignItems: 'center',
    justifyContent: 'center',
  },

  headContainer: {

  },

  inboxIcon: {

  },

  avatarImage: {
    width: 60,
    height: 60,
    borderRadius 60/2,  //Create_circle
  }
});