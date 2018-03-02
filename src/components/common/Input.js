import React from 'react'
import {StyleSheet} from 'react-native'

import {Icon, Input as InputElements} from 'react-native-elements'

const Input = ({label, icon, ...props}) => {
    return (
        <InputElements
            {...props}
            containerStyle={styles.containerStyle}
            inputStyle={styles.inputStyle}
            placeholder={label}
            {...icon && {
                leftIcon: <Icon name={icon} size={24} color="white" />
            }}
        />
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        borderColor: 'white',
        borderBottomWidth: 1,
        margin: 10
    },
    inputStyle: {
        color: 'white',
        padding: 10
    }
})

export default Input
