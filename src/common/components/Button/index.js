import React from 'react';

import { Button as RNButton } from 'react-native';

function Button(props) {
	const { children = null, onPress = () => {} } = props || {};

	return <RNButton title={children} onPress={onPress} />;
}

export default Button;
