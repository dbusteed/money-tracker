import React, {Component} from 'react'
import { View,Text,ScrollView,FlatList } from 'react-native'
import { connect } from 'react-redux'
import TitleBar from '../../components/titleBar'
import DetailRow from '../../components/detailRow'
import DetailHeader from '../../components/detailHeader'
import gStyles from '../../config/gStyles'

class Details extends Component {

  renderTitleBar() {
    return new TitleBar.builder()
      .withOneIcon('close', ()=>this.props.navigation.navigate('Home'))
      .withTitle('Details').build() 
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
  
  render() {

    const {details} = this.props
    year = details.data[0].date.split('-')[0]
    month = this.getMonthName(details.data[0].date.split('-')[1])

    return (
      <View style={gStyles.container}>
        {this.renderTitleBar()}

        <View style={{flex: .05, justifyContent: 'center', alignItems: 'center', marginTop: 10, }}>
          <Text style={{fontSize: 28, color: '#111111'}}>{month} {year}</Text>
        </View>

        <View style={{flex: .05}} />

        <View style={{flex: .05, justifyContent: 'center', alignItems: 'center'}}>
            <DetailHeader />
        </View>

        <View style={{flex: .85, alignItems: 'center', justifyContent: 'center'}}>
          <View style={{width: '95%', height: '90%',}}>
            <ScrollView>
              {
                (!details.isComputing) ?
                <FlatList
                  data={details.data}
                  keyExtractor={(item, index) => index}
                  renderItem={ ({item, index}) =>
                    <DetailRow amt={item.amt} date={item.date.substring(5,10)} 
                      kind={item.kind} bgColor={(index%2==0) ? '#e9e9e9' : '#d3d3d3'}
                      desc={ (item.type !== undefined) ? (item.type + ' - ' + item.desc) : (item.desc) }
                    />
                  }
                />

                : <FlatList />
              }
            </ScrollView>
          </View>
        </View>
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