import React from 'react';
import ReactNative, { Text, View } from 'react-native';
import style from '../style/user-post-style';

export default class SongRow extends React.Component {
  render() {
    const { song } = this.props;
    const { artist, songTitle } = song;
    return (
      <View style={[style.userRowWrapper, style.columns]}>
        <Text style={style.listText}>{artist} - {songTitle}</Text>
      </View>
    );
  }
}
