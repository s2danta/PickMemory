import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Button, Subheader } from 'react-native-material-design';
import TextField from 'react-native-md-textinput';
var width = Dimensions.get('window').width; //full width
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    textbox: {
        width: width,
        margin: 5,
        paddingLeft: 20,
        paddingRight: 20
    },
    btnLogin: {
        width: 200,
        paddingTop: 20
    }
});

class Login extends Component {
    static contextTypes = {
        routes: PropTypes.object.isRequired,
    };
    render() {
        const {routes} = this.context;
        return (
            <View style={styles.container}>
                <View style={styles.textbox}>
                    <TextField label={'User name'} highlightColor={'#00BCD4'} />
                </View>
                <View style={styles.textbox}>
                    <TextField secureTextEntry={true} label={'Pass word'} highlightColor={'#00BCD4'} />
                </View>
                <View style={styles.btnLogin}>
                    <Button value="LOGIN" raised={true} onPress={() => routes.tabbar()} />
                </View>
            </View>
        );
    }
}

export default Login;



