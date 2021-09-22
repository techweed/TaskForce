import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop: 10,
  },
  icontainer: {
    margin: 20,
  },
  inputStyle: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 20,
    color: 'black',
    fontSize: 16,
    elevation: 5,
  },

  clearButton: {
    position: 'absolute',
    right: 8,
    top: 10,
    elevation: 5,
    backgroundColor: 'white',
    paddingHorizontal: 8,
  },
});
export default styles;
