import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class DetailHeader extends React.PureComponent {
    render() {
        return (
            <View style={styles.rowContainer}>
                <View style={[styles.lilContainer,{flex: .2,}]}>
                    <Text style={styles.text}>Date</Text>
                </View>
                <View style={[styles.lilContainer,{flex: .4,}]}>
                    <Text style={styles.text}>Description</Text>
                </View>
                <View style={[styles.lilContainer,{flex: .4,}]}>
                    <Text style={styles.text}>Amount</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#d3d3d3',
        width: '95%',
        borderColor: 'black', 
        borderWidth: .5,
        minHeight: 50,
        maxHeight: 50
    },
    lilContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    leftLilContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 10
    },
    text: {
        fontSize: 18,
        fontWeight: '500',
        color: '#111111',
    }
})