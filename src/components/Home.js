import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Button, Subheader } from 'react-native-material-design';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
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
});

class Home extends Component {
    static contextTypes = {
        routes: PropTypes.object.isRequired,
    };
    render() {
        const {routes} = this.context;
        return (
            <View style={styles.container}>               
                <Button value="GO TO LIST" onPress={() => routes.todolist()} />
                <Button value="NORMAL RAISED" raised={true} onPress={() => console.log("I pressed a raised button")} />
                <View>
                    <Subheader text="Normal Subheader" />
                    <Subheader text="Normal Subheader with color" color="paperRed" />
                    <Subheader text="Normal Subheader" inset />
                    <Subheader text="Normal Subheader with color" color="paperOrange" inset />
                </View>
            </View>
        );
    }
}

export default Home;



