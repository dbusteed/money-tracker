import React, {Component} from 'react'
import { View,Text } from 'react-native'
import { connect } from 'react-redux'
import TitleBar from '../../components/titleBar'
import gStyles from '../../config/gStyles'


class Details extends Component {

  renderTitleBar() {
    return new TitleBar.builder()
      .withOneIcon('close', ()=>this.props.navigation.navigate('Home'))
      .withTitle('Details').build() 
  }

  render() {
    return (
      <View style={gStyles.container}>
        {this.renderTitleBar()}

        <Text>hello</Text>
      </View>
    )
  }
}

function mapStateToProps(state) {
  if(state.details === undefined) {
    details = {}
  } else {
    details = state.details
  }

  console.log('@@')
  console.log(details)

  return ({
    details
  })
}

export default connect(mapStateToProps)(Details)