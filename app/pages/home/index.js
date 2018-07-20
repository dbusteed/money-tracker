import React, {Component} from 'react'
import {View,Text,StatusBar,ScrollView} from 'react-native'
import gStyles from '../../config/gStyles'
import {connect} from 'react-redux'
import TitleBar from '../../components/titleBar'
import MonthData from '../../components/monthData'
import { makeSummary } from '../../actions/summaryActions'
import { getDetails } from '../../actions/detailActions'

class Home extends Component {

  renderTitleBar() {
    return new TitleBar.builder()
      .withTwoIcon('new-message', ()=>this.props.navigation.navigate('NewIncome'), 30)
      .withTitle('Money Tracker').build() 
  }

  getMonthName(m) {
    switch(m) {
      case '01':
        return 'January'
      case '02':
        return 'February'
      case '03':
        return 'March'
      case '04':
        return 'April'
      case '05':
        return 'May'
      case '06':
        return 'June'
      case '07':
        return 'July'
      case '08':
        return 'August'
      case '09':
        return 'September'
      case '10':
        return 'October'
      case '11':
        return 'November'
      case '12':
        return 'December'
      default:
        return '???'
    }
  }

  renderMonthCards(data) {
    cards = []
    i = 1
    Object.keys(data).forEach((key) => {
      (i%2==1) ? bgColor='#459cf9' : bgColor='#327ac7';
      cards.push( 
        <MonthData key={key} month={this.getMonthName(key.substring(4,6))}
          year={key.substring(0,4)} data={data[key]} color={bgColor}
          deetFunc={ () => {
            this.props.dispatch(getDetails(key))
            this.props.navigation.navigate('Details')
          }}
        /> 
      )
      i++
    })
    return cards
  }

  render() {

    const {summary} = this.props

    return (
      <View style={gStyles.container}>
        {this.renderTitleBar()}

        <View style={{flex: .05, justifyContent: 'center', alignItems: 'center', marginTop: 10, }}>
          {/* <Text style={{fontSize: 28, color: '#111111'}}>History</Text> */}
        </View>

        <View style={{flex: .95, alignItems: 'center', justifyContent: 'center'}}>
          <View style={{width: '90%', height: '90%',}}>
            <ScrollView>

              {
                (!summary.isComputing) ? this.renderMonthCards(summary.data) : <Text>No data has been entered</Text>
              }
          
            </ScrollView>
          </View>
        </View>
      
      </View>
    )
  }
}

function mapStateToProps(state) {
  let summary, details

  if(state.summary === undefined) {
    summary = {}
  } else {
    summary = state.summary
  }

  return ({
    summary,
  })
}

export default connect(mapStateToProps)(Home)

// # TODO

// ## Bugs

// ## Improvements
//     * tab btwn fields
//     * keyboard pushing view