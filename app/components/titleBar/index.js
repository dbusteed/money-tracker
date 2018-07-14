import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import EnIcon from 'react-native-vector-icons/Entypo'
import MatIcon from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'

// new-message, arrow-back, close

export default class Titlebar extends React.PureComponent {
    
    static get builder() {
        class Builder {
            constructor() {
                this.isSearch = false
            }
            withOneIcon(name, func, size=35) {
                this.icon1 = (
                    <TouchableOpacity
                        hitSlop={{top: 5, bottom: 5, left: 5, right: 5}}
                        onPress={func}
                        accessible={true}>
                        { (name == 'new-message') ? 
                        <EnIcon name={name} color={'white'} size={size} /> :
                        <MatIcon name={name} color={'white'} size={size} /> }
                    </TouchableOpacity>
                )
                return this
            }
            withTwoIcon(name, func, size=35) {
                this.icon2 = (
                    <TouchableOpacity
                        hitSlop={{top: 5, bottom: 5, left: 5, right: 5}}
                        onPress={func}
                        accessible={true}>
                        <EnIcon name={name} color={'white'} size={size} />
                    </TouchableOpacity>
                )
                return this
            }
            withTitle(title='Money Tracker') {
                this.title = <Text style={styles.titleText}>{title}</Text>
                return this
            }
            withSmallTitle(title) {
                this.title = <Text style={styles.smallTitle}>{title}</Text>
                return this
            }
            build() {
                return (
                    <View style={styles.titleBar}>
                        <View style={styles.titleBarContainer}>
                            <View style={styles.leftPart}>
                                {this.icon1}
                            </View>
                            <View style={styles.centerPart}>
                                {this.title}
                            </View>
                            <View style={styles.rightPart}>
                                {this.icon2}
                            </View>
                        </View>
                    </View>
                )
            }
        }
        return Builder
    }
}