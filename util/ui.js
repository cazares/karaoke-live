import { TouchableOpacity, Text } from 'react-native';
import style from '../style/karaoke-live-style';

export const NavButton = (props) => (
  <TouchableOpacity onPress={props.onPress}>
    <Text style={style.navButton}>{props.text}</Text>
  </TouchableOpacity>
);
