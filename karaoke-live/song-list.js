import React from 'react';
import { Text, View } from 'react-native';

import style from '../style/karaoke-live-style';
import SongRow from '../shared/song-row';
import NavButton from '../util/ui';
import { prettyPrint } from '../util/logging';

import { requestHandlerForMethod } from '../util/api';
import SimpleList from '../shared/simple-list';
import { LoadingIndicator } from '../util/loading-util';

import SortFilterBar from '../shared/sort-filter-bar';
import _ from 'lodash';

const USERS_URL = 'users';
const SORT_TITLE = 'Sort';
const NAV_TITLE = 'Karaoke Live';

const ASCENDING = 'asc';
const DESCENDING = 'desc';

let SONGS = [
  { artist: 'Led Zeppelin', songTitle: 'Black Dog'},
  { artist: 'Led Zeppelin', songTitle: 'Going to California'},
  { artist: 'Led Zeppelin', songTitle: 'Stairway to Heaven'},
  { artist: 'Led Zeppelin', songTitle: 'Tangerine'},
  { artist: 'Led Zeppelin', songTitle: 'Whole Lotta Love'},
  { artist: 'Maná', songTitle: 'Clavado en un Bar'},
  { artist: 'Maná', songTitle: 'Mariposa Traicionera'},
  { artist: 'Maná', songTitle: 'Me Vale'},
  { artist: 'Maná', songTitle: 'Te Llore un Rio'},
  { artist: 'Maná', songTitle: 'Angel de Amor'},
  { artist: 'Red Hot Chili Peppers', songTitle: 'Californication'},
  { artist: 'Red Hot Chili Peppers', songTitle: 'This Velvet Glove'},
  { artist: 'Red Hot Chili Peppers', songTitle: 'Pretty Little Ditty'},
  { artist: 'Red Hot Chili Peppers', songTitle: 'Taste the Pain'},
  { artist: 'Red Hot Chili Peppers', songTitle: 'Scar Tissue'},
  { artist: 'Creed', songTitle: 'My Own Prison'},
  { artist: 'Creed', songTitle: 'One Last Breath'},
  { artist: 'Creed', songTitle: 'My Sacrifice'},
  { artist: 'Creed', songTitle: 'Pity for a Dime'},
  { artist: 'Creed', songTitle: 'With Arms Wide Open'},
  { artist: 'Incubus', songTitle: 'Megalomaniac'},
  { artist: 'Incubus', songTitle: 'Drive'},
  { artist: 'Incubus', songTitle: 'Talk Shows on Mute'},
  { artist: 'Incubus', songTitle: '11am'},
  { artist: 'Incubus', songTitle: 'Wish You Were Here'},
  { artist: 'Strawberry Girls', songTitle: 'Violent Night'},
  { artist: 'XX', songTitle: 'Intro'},
  { artist: 'XX', songTitle: 'Crystalised'},
  { artist: 'XX', songTitle: 'Islands'},
];

export default class SongList extends React.Component {
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
    sortDirection: ASCENDING,
  }

  componentDidMount() {
    const { navigation } = this.props;

    const params = {
      onSortPressed: this.onSortPressed,
    };
    navigation.setParams(params);

    this.onSortPressed();
  }

  onSortPressed = () => {

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
    this.onSuccessSongs(SONGS);
  }

  onSongPress = (user) => {
    
  }

  onSuccessSongs = (songs) => {
    console.log(`songs from server: ${prettyPrint(songs)}`);
    const songRows = songs.map(song => (
      <SongRow
        song={song} onPress={() => this.onSongPress(song)} />
    ));
    this.setState({ songRows });
  }

  onErrorUsers = (error) => {
    console.error(error);
  }

  onLoadingUsers = (loading) => {
    this.setState({ loading });
  }

  onShufflePressed = () => {
    SONGS = _.shuffle(SONGS);
    this.loadSongs();
  }

  onSortPressed = () => {
    const { sortDirection } = this.state;
    SONGS = _.orderBy(SONGS, ['artist', 'songTitle'], [sortDirection]);

    const newSortDirection = sortDirection === ASCENDING ? DESCENDING : ASCENDING;
    this.setState({
      sortDirection: newSortDirection
    }, () => this.loadSongs());
  }

  onFilterPressed = () => {

  }

  render() {
    const { loading, songRows } = this.state;
    return (
      <LoadingIndicator loading={loading}>
        <SortFilterBar 
          onShufflePressed={this.onShufflePressed}
          onSortPressed={this.onSortPressed} 
          onFilterPressed={this.onFilterPressed} 
        />
        <SimpleList>
          {songRows}
        </SimpleList>
      </LoadingIndicator>
    );
  }
}
