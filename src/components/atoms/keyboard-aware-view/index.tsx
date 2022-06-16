import * as React from 'react';
import {
    StyleProp,
    ViewStyle,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';

type KeyboardAwareViewProps = {
    style?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
};

const KeyboardAwareView = ({ style, children, ...rest }: KeyboardAwareViewProps) => {
    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
        >
            <KeyboardAvoidingView
                style={[style, { marginBottom: 30 }]}
                behavior="padding"
                keyboardVerticalOffset={100}
            >
                {
                    children && children
                }
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

export { KeyboardAwareView };