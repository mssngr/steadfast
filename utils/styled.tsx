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
} from "react-native";

export default {
  Image(style: ImageStyle) {
    return (props: ImageProps) => <Image {...props} style={style} />;
  },
  Text(style: TextStyle) {
    return (props: TextProps) => <Text {...props} style={style} />;
  },
  View(style: ViewStyle) {
    return (props: ViewProps) => <View {...props} style={style} />;
  },
};
