import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

type KeyboardAwareViewProps = {
    children?: React.ReactNode;
};

const KeyboardAwareView = ({children, ...rest}:KeyboardAwareViewProps) => {
    
    return (
        <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        >           
            {
                children && children
            }
        </KeyboardAwareScrollView>
    )
}

export default KeyboardAwareView;