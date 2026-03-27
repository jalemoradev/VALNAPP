import { Keyboard, TouchableWithoutFeedback, View, ViewProps } from 'react-native';

interface DismissKeyboardProps extends ViewProps {
  children: React.ReactNode;
}

export function DismissKeyboard({ children, style, ...props }: DismissKeyboardProps) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={[{ flex: 1 }, style]} {...props}>
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
}
