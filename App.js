import Bugsnag from "@bugsnag/expo";
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import * as React from 'react';

Bugsnag.start({
    apiKey: '123'
})

const ErrorBoundary = Bugsnag.getPlugin('react').createErrorBoundary(React)

const ErrorView = () =>
    <View>
        <Text>Inform users of an error in the component tree.</Text>
    </View>


export default function App() {
    return (
        <ErrorBoundary FallbackComponent={ErrorView}>
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <StatusBar style="auto"/>
            </View>
        </ErrorBoundary>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
