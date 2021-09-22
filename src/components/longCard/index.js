import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

const LongCard = ({item, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => navigation.navigate('Detail', {...item})}>
      <Image
        source={{
          uri:
            item.profile_image !== null
              ? item.profile_image
              : 'https://st3.depositphotos.com/6672868/13801/v/600/depositphotos_138013506-stock-illustration-user-profile-group.jpg',
        }}
        style={{width: 60, height: 60, borderRadius: 30, marginRight: 10}}
      />
      <View style={{alignItems: 'flex-start', flex: 1}}>
        <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
        <Text>{item?.company?.name}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default LongCard;
