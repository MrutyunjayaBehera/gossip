import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../../../../common/components';

const styles = StyleSheet.create({
	body: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

function Home({ navigation }) {
	return (
		<View style={styles.body}>
			<Text>Home Screen</Text>
			<Button
				onPress={() => {
					navigation.navigate('notification');
				}}
			>
				Go to Notification Center
			</Button>
		</View>
	);
}

export default Home;
