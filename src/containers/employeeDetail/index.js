import React from 'react';
import {View, Text, ImageBackground, ScrollView} from 'react-native';

import styles from './styles';

const EmployeeDetail = ({route}) => {
  const data = route.params;
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={{
          uri:
            data.profile_image !== null
              ? data.profile_image
              : 'https://st3.depositphotos.com/6672868/13801/v/600/depositphotos_138013506-stock-illustration-user-profile-group.jpg',
        }}
        style={styles.backgroundImage}>
        <View style={styles.listitem}>
          <Text
            style={{
              color: 'green',
              backgroundColor: 'white',
              paddingHorizontal: 10,
              borderRadius: 10,
              position: 'absolute',
              top: 10,
              right: 10,
            }}>
            {data.username}
          </Text>
          <Text style={styles.address}> {data.name} </Text>
          <Text style={styles.name}>{data.email}</Text>
        </View>
      </ImageBackground>
      <View style={styles.listItem}>
        <Text style={styles.title}>Address</Text>
        <Text>Street: {data.address?.street}</Text>
        <Text>Suite: {data.address?.suite}</Text>
        <Text>City: {data.address?.city}</Text>
        <Text>Zipcode: {data.address?.zipcode}</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.title}>Company</Text>
        <Text>{data.company?.name}</Text>
        <Text>{data.company?.catchPhrase}</Text>
        <Text>{data.company?.bs}</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.title}>Contact</Text>
        <Text>Phone: {data?.phone}</Text>
        <Text>Website: {data?.website}</Text>
      </View>
    </ScrollView>
  );
};

export default EmployeeDetail;
