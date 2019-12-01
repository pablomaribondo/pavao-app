import React from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { createStore } from 'redux';
import { View } from 'native-base';
import { PRIMARY } from '../utils/colors';
import HomeHeader from '../components/HomeHeader';
import reducer from '../reducer';
import DaySelector from '../components/DaySelector';
import CoursesTakens from '../components/Lists/CoursesTaken';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY,
    justifyContent: 'center',
    textAlign: 'center',
  },
});

export default function() {
  const { useEffect, useState } = React;
  const [fontLoaded, setFontLoaded] = useState(false);

  const loadFont = async () => {
    setFontLoaded(true);
  };

  useEffect(() => {
    loadFont();
  });

  return (
    <View store={createStore(reducer)}>
      {fontLoaded && (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <HomeHeader />
          <DaySelector />
          <CoursesTakens />
        </KeyboardAvoidingView>
      )}
    </View>
  );
}
