import React from 'react';
import { Text, View } from 'react-native';

import style from '../style/user-post-style';
import SongRow from '../shared/song-row';
import NavButton from '../util/ui';
import { prettyPrint } from '../util/logging';

import { requestHandlerForMethod } from '../util/api';
import SimpleList from '../shared/simple-list';
import { LoadingIndicator } from '../util/loading-util';

const USERS_URL = 'users';
const SORT_TITLE = 'Sort';
const NAV_TITLE = 'Karaoke Live';

export default class UserList extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    const params = state.params || {};
    return {
      // ...commonNavOptions,
      title: NAV_TITLE,
      // headerRight: <NavButton text={SORT_TITLE} onPress={params.onSortPressed} />,
    };
  }

  state = {
    loading: false,
    songRows: null,
  }

  componentDidMount() {
    const { navigation } = this.props;

    const params = {
      onSortPressed: this.onSortPressed,
    };
    navigation.setParams(params);

    this.loadSongs();
  }

  onSortPressed = () => {

  }

  getSongs = () => {
    return [
        { artist: 'Led Zeppelin', songTitle: 'Black Dog'},
        { artist: 'Led Zeppelin', songTitle: 'Going to California'},
        { artist: 'Led Zeppelin', songTitle: 'Stairway to Heaven'},
        { artist: 'Led Zeppelin', songTitle: 'Tangerine'},
        { artist: 'Led Zeppelin', songTitle: 'Whole Lotta Love'},
        { artist: 'Led Zeppelin', songTitle: 'Bonzo\'s Montreaux'},
        { artist: 'Led Zeppelin', songTitle: 'Immigrant Song'},
        { artist: 'Led Zeppelin', songTitle: 'Dazed and Confused'},
        { artist: 'Led Zeppelin', songTitle: 'Black Mountain Side'},
        { artist: 'Maná', songTitle: 'Clavado en un Bar'},
        { artist: 'Maná', songTitle: 'Mariposa Traicionera'},
        { artist: 'Maná', songTitle: 'Me Vale'},
        { artist: 'Maná', songTitle: 'Te Llore un Rio'},
        { artist: 'Maná', songTitle: 'Angel de Amor'},
    ];
  }

  loadSongs = () => {
    // const props = {
    //   method: 'GET',
    //   url: USERS_URL,
    //   onSuccess: this.onSuccessUsers,
    //   onError: this.onErrorUsers,
    //   onLoading: this.onLoadingUsers,
    // }
    // requestHandlerForMethod(props);
    this.onSuccessSongs(this.getSongs());
  }

  onUserPress = (user) => {
    const { navigate } = this.props.navigation;
    navigate('PostList', { userId: user.id });
  }

  onSuccessSongs = (songs) => {
    console.log(`songs from server: ${prettyPrint(songs)}`);
    const songRows = songs.map(song => (
      <SongRow
        song={song} onPress={() => this.onUserPress(song)} />
    ));
    this.setState({ songRows });
  }

  onErrorUsers = (error) => {
    console.error(error);
  }

  onLoadingUsers = (loading) => {
    this.setState({ loading });
  }

  render() {
    const { loading, songRows } = this.state;
    return (
      <LoadingIndicator loading={loading}>
        <SimpleList>
          {songRows}
        </SimpleList>
      </LoadingIndicator>
    );
  }
}
