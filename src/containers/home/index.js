import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Keyboard,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import styles from './styles';
import LongCard from '../../components/longCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({navigation}) => {
  const [data, setData] = useState({});
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    //checking if data exist i.e is it the first launch
    getData('@storage_Key').then(db => {
      if (db) {
        setData(db);
      } else {
        fetch(`http://www.mocky.io/v2/5d565297300000680030a986`)
          .then(response => response.json())
          .then(data => {
            setData(data);
            storeData('@storage_Key', data);
          })
          .catch(error => console.log(error));
      }
    });
  }, []);

  const onChangeText = async text => {
    setSearch(text);
    if (text.trim() === '') {
      return;
    }
    temp = [];
    Object.entries(data).forEach(([key, value]) => {
      if (value.name.includes(text) || value.email.includes(text)) {
        temp.push({...value});
      }
    });
    setResults(temp);
  };

  const onClearPress = () => {
    setResults([]);
    setSearch('');
    Keyboard.dismiss();
  };

  const storeData = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const getData = async key => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.icontainer}>
        <TextInput
          style={[styles.inputStyle]}
          placeholder="Search name and email"
          placeholderTextColor="gray"
          value={search}
          onChangeText={text => onChangeText(text)}
          returnKeyType="search"
        />
        {search.length > 0 && (
          <TouchableOpacity onPress={onClearPress} style={styles.clearButton}>
            <Text style={{fontSize: 17, color: 'grey'}}>x</Text>
          </TouchableOpacity>
        )}
      </View>

      <FlatList
        style={{flex: 1}}
        data={search.trim().length ? results : data}
        renderItem={({item}) => (
          <LongCard item={item} navigation={navigation} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Home;
