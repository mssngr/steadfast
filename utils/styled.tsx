import {
  Image,
  type ImageProps,
  type ImageStyle,
  Text,
  type TextProps,
  type TextStyle,
  View,
  type ViewProps,
  type ViewStyle,
} from 'react-native'

export default {
  Image<T extends Record<string, unknown>>(
    style: ImageStyle | ((props: T & ImageProps) => ImageStyle),
  ) {
    return (props: T & ImageProps) => (
      <Image
        {...props}
        style={typeof style === 'function' ? style(props) : style}
      />
    )
  },
  Text<T extends Record<string, unknown>>(
    style: TextStyle | ((props: T & TextProps) => TextStyle),
  ) {
    return (props: T & TextProps) => (
      <Text
        {...props}
        style={typeof style === 'function' ? style(props) : style}
      />
    )
  },
  View<T extends Record<string, unknown>>(
    style: ViewStyle | ((props: T & ViewProps) => ViewStyle),
  ) {
    return (props: T & ViewProps) => (
      <View
        {...props}
        style={typeof style === 'function' ? style(props) : style}
      />
    )
  },
}
