import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class DetailRow extends React.PureComponent {
    static defaultProps = {
        bgColor: '#e9e9e9',
        amt: 0,
        date: '0000-00-00',
        kind: 'in',
        desc: 'something'
    }
    
    render() {
        return (
            <View style={[styles.rowContainer,{backgroundColor: this.props.bgColor}]}>
                <View style={[styles.lilContainer,{flex: .2,}]}>
                    <Text style={styles.text}>{this.props.date}</Text>
                </View>
                <View style={[styles.leftLilContainer,{flex: .4,}]}>
                    <Text style={styles.text}>{this.props.desc}</Text>
                </View>
                <View style={[styles.lilContainer,{flex: .2,}]}>
                    <Text style={styles.text}>{(this.props.kind=='in') ? this.props.amt : ''}</Text>
                </View>
                <View style={[styles.lilContainer,{flex: .2,}]}>
                    <Text style={styles.text}>{(this.props.kind=='ex') ? this.props.amt : ''}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    rowContainer: {
        flex: 1,
        flexDirection: 'row', 
        borderColor: 'black', 
        borderWidth: .5
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