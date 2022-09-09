import * as React from 'react';
import {
    StyleProp,
    ViewStyle,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Platform
} from 'react-native';

type KeyboardAwareViewProps = {
    style?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
};

const KeyboardAwareView = ({ style, children, ...rest }: KeyboardAwareViewProps) => {
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 100 : 0
    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
        >
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : null}
                keyboardVerticalOffset={keyboardVerticalOffset}
                style={[style, { marginBottom: Platform.OS == 'ios' ? 30 : 0}]}
            >
                {
                    children && children
                }
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

export { KeyboardAwareView };