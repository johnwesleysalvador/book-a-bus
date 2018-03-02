import React, {Component} from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router'
import {
    View,
    Image,
    Text,
    StyleSheet,
    ImageBackground,
    KeyboardAvoidingView
} from 'react-native'
import {Button, Card, CardSection, Input} from './common'

import logo from './logo-white.png'

class LoginForm extends Component {
    state = {
        userName: '',
        password: ''
    }
    handleLogin = () => {
        this.props.push('/home')
    }
    render() {
        return (
            <Container behavior="padding">
                <Image
                    style={styles.backgroundOpaque}
                    source={{
                        uri:
                            'https://d9nqqwcssctr8.cloudfront.net/wp-content/uploads/2015/08/19062926/redbus_header3.jpg'
                    }}
                />
                <View style={styles.backgroundOpaque} />
                <LoginContainer>
                    <Image style={styles.logoContainer} source={logo} />
                    <View>
                        <Input label="Username" icon="account-box" />
                        <Input label="Password" icon="lock" secureTextEntry/>
                        <Button label="Login" onPress={this.handleLogin}/>
                    </View>
                </LoginContainer>
            </Container>
        )
    }
}

const Container = styled.KeyboardAvoidingView`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const LoginContainer = styled.View`
    justify-content: space-between;
    align-items: center;
    width: 300;
    height: 70%;
`

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoContainer: {
        height: 200,
        width: 200
    },
    loginContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 300,
        height: '70%',
        margin: 'auto'
    },
    backgroundOpaque: {
        position: 'absolute',
        width: null,
        height: null,
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        flex: 1,
        backgroundColor: 'black',
        opacity: 0.5
    }
})

export default withRouter(LoginForm)
