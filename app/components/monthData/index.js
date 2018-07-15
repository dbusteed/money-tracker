import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export default class MonthData extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            showDetail: false
        }
    }

    static defaultProps = {
        month: 'June',
        year: '2018',
        color: '#327ac7',
        data: {
            totalIn: 200, totalEx: 100, gas: 50,
            groc: 50, eatOut: 0, house: 0,
            tithing: 0, school: 0, other: 0
        },
        deetFunc: ()=>{}
    }

    toggleDetail = () => {
        (this.state.showDetail) ?
            this.setState({ showDetail: false }) :
            this.setState({ showDetail: true })
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <TouchableOpacity onPress={this.toggleDetail.bind(this)}>
                    <View style={[styles.header, { backgroundColor: this.props.color }]}>
                        <Text style={styles.headerText}>{this.props.month}</Text>
                        <Text style={styles.headerText}>{this.props.year}</Text>
                    </View>
                </TouchableOpacity>

                {this.state.showDetail &&

                    <View>
                        <View style={styles.summaryContainer}>
                            <View style={styles.tableColumns}>
                                <View style={styles.detailViewA}>
                                    <Text style={styles.detailText}>Total Income:</Text>
                                </View>
                                <View style={[styles.detailViewB, styles.hangRight]}>
                                    <Text style={styles.detailText}>{this.props.data.totalIn}</Text>
                                </View>
                                <View style={styles.detailViewA}>
                                    <Text style={styles.detailText}>Total Expenses:</Text>
                                </View>
                                <View style={[styles.detailViewB, styles.hangRight]}>
                                    <Text style={styles.detailText}>{this.props.data.totalEx}</Text>
                                </View>
                                <View style={styles.detailViewA} />
                                <View style={styles.detailViewB}>
                                    <Text style={styles.detailText}>Difference:</Text>
                                </View>
                                <View style={[styles.detailViewA, styles.hangRight]}>
                                    <Text style={styles.detailText}>{this.props.data.totalIn - this.props.data.totalEx}</Text>
                                </View>
                                <View style={{ minHeight: 10, backgroundColor: '#e9e9e9' }} />
                            </View>
                            <View style={styles.tableColumns}>
                                <View style={[styles.detailViewB, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                                    <Text style={styles.detailText}>Gas:</Text>
                                    <Text style={styles.detailText}>{this.props.data.gas}</Text>
                                </View>
                                <View style={[styles.detailViewA, { flexDirection: 'row', justifyContent: 'space-between', }]}>
                                    <Text style={styles.detailText}>Grocies:</Text>
                                    <Text style={styles.detailText}>{this.props.data.groc}</Text>
                                </View>
                                <View style={[styles.detailViewB, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                                    <Text style={styles.detailText}>Eating Out:</Text>
                                    <Text style={styles.detailText}>{this.props.data.eatOut}</Text>
                                </View>
                                <View style={[styles.detailViewA, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                                    <Text style={styles.detailText}>House:</Text>
                                    <Text style={styles.detailText}>{this.props.data.house}</Text>
                                </View>
                                <View style={[styles.detailViewB, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                                    <Text style={styles.detailText}>Tithing:</Text>
                                    <Text style={styles.detailText}>{this.props.data.tithing}</Text>
                                </View>
                                <View style={[styles.detailViewA, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                                    <Text style={styles.detailText}>School:</Text>
                                    <Text style={styles.detailText}>{this.props.data.school}</Text>
                                </View>
                                <View style={[styles.detailViewB, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                                    <Text style={styles.detailText}>Other:</Text>
                                    <Text style={styles.detailText}>{this.props.data.other}</Text>
                                </View>
                                <View style={{ minHeight: 10, backgroundColor: '#d3d3d3' }} />
                            </View>
                        </View>
                        <View style={styles.deetsButtonContainer}>
                            <TouchableOpacity 
                                hitSlop={{top: 5, bottom: 5, left: 5, right: 5}}
                                onPress={this.props.deetFunc}
                                accessible={true}>
                                <View style={styles.deetsButton}>
                                    <Text style={styles.buttonText}>View Details</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingBottom: 7,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: 55,
        minHeight: 55,
        borderRadius: 5
    },
    headerText: {
        color: 'white',
        fontSize: 24,
        padding: 5,
        fontWeight: '500'
    },
    summaryContainer: {
        backgroundColor: '#e0e0e0',
        flexDirection: 'row',
    },
    tableColumns: {
        flex: .5
    },
    detailViewA: {
        padding: 2,
        minHeight: 27,
        maxHeight: 27,
        justifyContent: 'center',
        backgroundColor: '#e9e9e9',
        borderTopColor: 'black',
        borderTopWidth: .5
    },
    detailViewB: {
        padding: 2,
        minHeight: 27,
        maxHeight: 27,
        justifyContent: 'center',
        backgroundColor: '#d3d3d3',
    },
    hangRight: {
        alignItems: 'flex-end',
        // paddingRight: 10
    },
    detailText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#111111',
        paddingLeft: 5,
        paddingRight: 10
    },
    deetsButtonContainer: {
        minHeight: 45,
        maxHeight: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    deetsButton: {
        backgroundColor: '#FF7630',
        borderRadius: 20,
        paddingLeft: 15,
        paddingRight: 15,
    },
    buttonText: {
        color: 'white',
        fontSize: 22,
        fontWeight: '500'
    }
})