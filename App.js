import React from 'react'
import firebase from 'firebase'
import {ThemeProvider} from 'styled-components'
import {NativeRouter, Route, Link} from 'react-router-native'

import {View, Text, StyleSheet} from 'react-native'
import LoginForm from './src/components/LoginForm'
import Home from './src/components/Home'

import theme from './src/themes/default'

export default class App extends React.Component {
    componentDidMount() {
        // Initialize Firebase
        var config = {
            apiKey: 'AIzaSyAULHrilFDCUaZDvipVRWo9FdN3cBfh9xY',
            authDomain: 'bookthatbus-8cd54.firebaseapp.com',
            databaseURL: 'https://bookthatbus-8cd54.firebaseio.com',
            projectId: 'bookthatbus-8cd54',
            storageBucket: 'bookthatbus-8cd54.appspot.com',
            messagingSenderId: '989495580816'
        }
        firebase.initializeApp(config)
    }
    render() {
        return (
            <NativeRouter>
                <ThemeProvider theme={theme}>
                    <View style={styles.container}>
                        <Route exact path="/" component={LoginForm} />
                        <Route path="/home" component={Home} />
                    </View>
                </ThemeProvider>
            </NativeRouter>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
