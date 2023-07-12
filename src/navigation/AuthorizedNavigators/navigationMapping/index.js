const { default: Home } = require('../screens/Home');
const { default: Notification } = require('../screens/Notification');

const AUTHORIZED_NAVIGATION_MAPPING = [
	{
		name: 'home',
		title: 'Home',
		Component: Home,
	},
	{
		name: 'notification',
		title: 'Notifications',
		Component: Notification,
	},
];

export default AUTHORIZED_NAVIGATION_MAPPING;
