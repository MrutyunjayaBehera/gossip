import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const StackNavigator = createNativeStackNavigator();

import AUTHORIZED_NAVIGATION_MAPPING from './src/navigation/AuthorizedNavigators/navigationMapping';
import {Provider} from 'react-redux';
import store from './src/store';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator.Navigator initialRouteName="Home">
          {AUTHORIZED_NAVIGATION_MAPPING.map(nav => {
            const {name = '', Component = null, title = ''} = nav || {};

            if (!Component) {
              return null;
            }

            return (
              <StackNavigator.Screen
                key={name}
                name={name}
                component={Component}
                options={{
                  title: title,
                  headerStyle: {
                    backgroundColor: '#f4511e',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}
              />
            );
          })}
        </StackNavigator.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
