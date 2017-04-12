import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const InputWrapper = function (props) {
    return (
        <View style={styles.inputWrapper}>
            {props.children}
        </View>
    );
};

InputWrapper.propTypes = {
  children: React.PropTypes.array,
};

export default InputWrapper;
