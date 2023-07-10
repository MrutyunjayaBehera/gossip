import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '../../../../common/components';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function Notification({navigation}) {
  return (
    <View style={styles.body}>
      <Text>Notification Screen</Text>
      <Button
        onPress={() => {
          navigation.navigate('home');
        }}>
        Go to Home
      </Button>
    </View>
  );
}

export default Notification;
