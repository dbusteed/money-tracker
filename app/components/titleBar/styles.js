import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    titleBar: {
        width: '100%',
        minHeight: 60,
        maxHeight: 60,
        backgroundColor: '#327ac7',
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
        padding: 10
    },
    titleBarContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'white'
    },
    smallTitle: {
        fontSize: 20,
        fontWeight: '500',
        color: 'white'
    },
    leftPart: {
        flex: .15,
        paddingLeft: 10
    },
    centerPart: {
        flex: .65,
        alignItems: 'flex-start'
    },
    rightPart: {
        flex: .2,
        alignItems: 'flex-end',
        paddingRight: 10
    }
})