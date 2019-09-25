import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import colors from '../constants/colors';

const SearchQueryScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [prevQueries, setPrevQueries] = useState([]);
  const handleQueryChange = value => setQuery(value);

  const handleQuerySubmit = () => {
    if (query) {
      setPrevQueries([...prevQueries, query]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.pop()}
          >
            <Ionicons name="ios-arrow-round-back" size={35} color={colors.bg} />
          </TouchableOpacity>
          <TextInput
            placeholder="Search for news"
            placeholderTextColor={colors.darkHeadColor}
            style={styles.input}
            onChangeText={handleQueryChange}
            onSubmitEditing={handleQuerySubmit}
            value={query}
            keyboardAppearance="dark"
          />
        </View>
      </View>
    </SafeAreaView>
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
  }
});

export default SearchQueryScreen;
