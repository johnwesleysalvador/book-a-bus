// Import libraries for making a component
import React from 'react'
import {Text, View} from 'react-native'
import {Header as RHeader} from 'react-native-elements'

// Make a component
const Header = props => {
    return (
        <RHeader
            leftComponent={{icon: 'menu', color: '#fff'}}
            centerComponent={{text: props.headerText, style: {color: '#fff'}}}
            rightComponent={{icon: 'home', color: '#fff'}}
        />
    )
}

// Make the component available to other parts of the app
export default Header
