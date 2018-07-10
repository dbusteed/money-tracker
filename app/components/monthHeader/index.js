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
        color: 'green',
        data: {in: 200, ex: 100, gas: 50, 
            groc: 50, eatOut: 0, house: 0, 
            tithing: 0, school: 0, other: 0}
    }

    toggleDetail = () => {
        (this.state.showDetail) ? 
        this.setState({showDetail: false}) :
        this.setState({showDetail: true})
    }
    
    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.toggleDetail.bind(this)}>
                    <View style={[styles.header, {backgroundColor: this.props.color}]}>
                        <Text style={styles.headerText}>{this.props.month}</Text>
                        <Text style={styles.headerText}>{this.props.year}</Text>
                    </View>
                </TouchableOpacity>

                { this.state.showDetail &&

                <View style={styles.detailContainer}>
                    <View style={styles.tableColumns}>
                        <View style={styles.detailViewA}>
                            <Text style={styles.detailText}>Total Income:</Text>
                        </View>
                        <View style={[styles.detailViewB, styles.hangRight]}>
                            <Text style={styles.detailText}>{this.props.data.in}</Text>
                        </View>
                        <View style={styles.detailViewA}>
                            <Text style={styles.detailText}>Total Expenses:</Text>
                        </View>
                        <View style={[styles.detailViewB, styles.hangRight]}>
                            <Text style={styles.detailText}>{this.props.data.ex}</Text>
                        </View>
                    </View>
                    <View style={styles.tableColumns}>
                        <Text>
                            other
                        </Text>
                    </View>
                </View>

                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center', 
        maxHeight: 50,
        minHeight: 50,
    },
    headerText: {
        color: 'white',
        fontSize: 24,
        padding: 5,
        fontWeight: '500'
    },
    detailContainer: {
        backgroundColor: '#e0e0e0',
        flexDirection: 'row',
        marginBottom: 10
    },
    tableColumns: {
        flex: .5
    },
    detailViewA: {
        padding: 2,
        backgroundColor: '#e9e9e9'
    },
    detailViewB: {
        padding: 2,
        backgroundColor: '#d3d3d3'
    },
    hangRight: {
        alignItems: 'flex-end',
        paddingRight: 20
    },
    detailText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#111111',
    } 
})