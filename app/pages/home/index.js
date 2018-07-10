import React, {Component} from 'react'
import {View,Text,Button} from 'react-native'
import gStyles from '../../config/gStyles'
import {connect} from 'react-redux'
import TitleBar from '../../components/titleBar'
import MonthData from '../../components/monthHeader'
import * as counterActions from '../../actions/counterActions'

class Home extends Component {

  renderTitleBar() {
    return new TitleBar.builder()
      // .withOneIcon('menu', ()=>alert('hello!'), 38)
      .withTwoIcon('new-message', ()=>this.props.navigation.navigate('NewIncome'), 30)
      .withTitle('Money Tracker').build() 
  }

  render() {

    return (
      <View style={gStyles.container}>
        {this.renderTitleBar()}

        <View style={{flex: .1, justifyContent: 'center', alignItems: 'center', marginTop: 10, }}>
          <Text style={{fontSize: 28, color: '#111111'}}>History</Text>
        </View>

        <View style={{flex: .9, alignItems: 'center', justifyContent: 'center'}}>
          <View style={{width: '90%', height: '90%', backgroundColor: 'gray'}}>
            <MonthData month={'June'} year={'2018'} color={'green'}/>
            <MonthData month={'July'} year={'2018'} color={'red'}/>
          </View>
        </View>
      
      </View>
    )
  }
}

function mapStateToProps(state) {
  let counter

  (state.counter === undefined) ?
  counter = {} :
  counter = state.counter;

  return ({
    counter
  })
}

export default connect(mapStateToProps)(Home)