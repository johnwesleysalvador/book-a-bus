import React from 'react'
import {Text, TouchableOpacity} from 'react-native'
import {Button as ButtonElements} from 'react-native-elements'

const Button = ({onPress, label, loading}) => {
    return (
        <ButtonElements
            text={label}
            loading={loading}
            loadingProps={{size: 'large', color: 'rgba(111, 202, 186, 1)'}}
            textStyle={{fontWeight: '700', color: 'white', fontFamily: 'Roboto'}}
            buttonStyle={styles.buttonStyle}
            containerStyle={styles.containerStyle}
        />
    )
}

const styles = {
    buttonStyle: {
        backgroundColor: 'transparent',
        height: 45,
        width: '100%',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 100
    },
    containerStyle: {
        margin: 20
    }
}

export default Button
