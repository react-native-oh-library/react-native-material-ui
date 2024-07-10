import {
  View,
  BackHandler,
  ViewPropTypes as RNViewPropTypes,
  BackAndroid as DeprecatedBackAndroid,
} from 'react-native';
import PropsType from 'prop-types'
const ViewPropTypes = RNViewPropTypes || View.propTypes||PropsType; // eslint-disable-line
const BackAndroid = BackHandler || DeprecatedBackAndroid;

export { ViewPropTypes, BackAndroid };
