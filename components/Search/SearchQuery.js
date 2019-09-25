import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import colors from '../../constants/colors';

const SearchQuery = ({
  navigation,
  handleQuerySubmit = () => {},
  disabled,
  query
}) => {
  const [localQuery, setQuery] = useState('');

  const handleQueryChange = value => setQuery(value);

  return (
    <View style={styles.searchContainer}>
      {disabled && <View style={styles.overlay} />}
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.pop()}>
        <Ionicons name="ios-arrow-round-back" size={35} color={colors.bg} />
      </TouchableOpacity>
      <TextInput
        placeholder="Search for news"
        placeholderTextColor={colors.darkHeadColor}
        style={styles.input}
        onChangeText={handleQueryChange}
        onSubmitEditing={() => handleQuerySubmit(localQuery)}
        value={query || localQuery}
        keyboardAppearance="dark"
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  searchContainer: {
    marginTop: Platform.OS === 'android' ? getStatusBarHeight() : 0,
    backgroundColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomColor: colors.darkHeadColor,
    borderBottomWidth: 1
  },
  backBtn: {
    paddingHorizontal: 15
  },
  input: {
    fontSize: 16,
    flexGrow: 1
  },
  overlay: {
    position: 'absolute',
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
    zIndex: 1,
    marginVertical: 10
  }
});

export default withNavigation(SearchQuery);
