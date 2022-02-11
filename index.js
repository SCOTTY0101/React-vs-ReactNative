/**
 * React vs React Native examples.
 * 
 */

//ReactJS counter example using hooks

import React, { useState } from 'react';

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <div className='container'>
            <p>You clicked {count} times</p>
            <button
                onclick={() => setCount(count + 1)}>
                Click me!
            </button>
        </div>
    );
};
// CSS flexbox using for styling.
/*
.container {
    display : flex;
    justify-content: center;
    align-item: center;
};
*/



// React Native counter examples using hooks. Mobile devices.

import React, {useState} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <View style={StyleSheet.container}>
            <Text>You clicked {count} times</Text>
            <Button
                onPress={() => setCount(count + 1)}
                title="Click me"
            />
        </View>
    );
};

//React Native Style
/*
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
*/
