import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';
import { compose, setPropTypes } from 'recompose';

import style from '../style/karaoke-live-style';

const SortFilterBar = ({ onShufflePressed, onSortPressed, onFilterPressed }) => (
  <View style={style.sortFilterBarContainer} >
    <TouchableOpacity
      style={style.button}
      onPress={onShufflePressed}
    >
      <Text style={style.sortFilterButtonText}>
        Shuffle
      </Text>
    </TouchableOpacity>
    <View style={{flex: 1}} />
    <TouchableOpacity
      style={style.button}
      onPress={onSortPressed}
    >
      <Text style={style.sortFilterButtonText}>
        Sort
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={style.button}
      onPress={onFilterPressed}
    >
      <Text style={style.sortFilterButtonText}>
        Filter
      </Text>
    </TouchableOpacity>
  </View>
);

export default compose(
  setPropTypes({
    onPress: PropTypes.func.isRequired,
  }),
)(SortFilterBar);