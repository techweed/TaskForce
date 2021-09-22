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

const Home = ({navigation}) => {
  useEffect(() => {
    fetch(`http://www.mocky.io/v2/5d565297300000680030a986`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  const [data, setData] = useState({});

  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  const onChangeText = async text => {
    if (text.trim() === '') {
      return;
    }
    temp = [];
    Object.entries(data).forEach(([key, value]) => {
      if (value.name.includes(text)) {
        console.log(value.name, key, text);
        temp.push({...value});
      }
    });
    setResults(temp);
    setSearch(text);
  };

  const onClearPress = () => {
    setResults([]);
    setSearch('');
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <View style={styles.icontainer}>
        <TextInput
          style={[styles.inputStyle]}
          placeholder="Search "
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
