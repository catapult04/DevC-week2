import React, { useState, Component, useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

export default function Album({imgData}) {
  return (
      <FlatList
        numColumns="2"
        data={imgData}
        renderItem={ 
          ({item}) =>
              <Image 
                style={styles.image}  
                source={{uri: item.imageURL}} 
              />
        }
        keyExtractor={ item => item.id}
      >
      </FlatList>
  )

};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "46%",
    height: 200,
    resizeMode: "cover",
    marginRight: 12,
    marginBottom: 12,
    borderRadius: 16,
  }
})