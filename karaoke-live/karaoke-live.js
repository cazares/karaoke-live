import React from 'react';
import { AppRegistry } from 'react-native';

import SongList from './song-list';
import { StackNavigator } from 'react-navigation';

// Note: wasn't able to get rid of missing key from list warning, disable warning box for now
console.disableYellowBox = true;

const commonNavOptions = {
  headerTintColor: 'white',
  headerBackTitle: null,
  headerStyle: {
    backgroundColor: '#CE1129',
  },
};

export const KaraokeLiveNav = StackNavigator({
  SongList: { screen: SongList, navigationOptions: commonNavOptions },
});

class KaraokeLiveNavWrapper extends React.Component {
  render() {
    return <KaraokeLiveNav screenProps={this.props} />
  }
}

AppRegistry.registerComponent('KaraokeLive', () => KaraokeLiveNavWrapper);
