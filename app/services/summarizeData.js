export function summarizeData(lilData) {
    
    if(lilData.incomes.length > 0) {

        console.log('$$ COMPUTING DATA')
        
        summary = {}
        
        for (let item of lilData.incomes) {
            dateParts = item.date.split('-')
            month = dateParts[0] + dateParts[1]
            
            if(summary[month] === undefined) {
                summary[month] = {
                    totalIn: item.amt, totalEx: 0, gas: 0, groc: 0, eatOut: 0,
                    house: 0, tithing: 0, school: 0, other: 0
                }
            } else {
                summary[month]['totalIn'] += item.amt
            }
        }

        for (let item of lilData.expenses) {
            dateParts = item.date.split('-')
            month = dateParts[0] + dateParts[1]

            if(summary[month] === undefined) {
                summary[month] = {
                    totalIn: item.amt, totalEx: item.amt, gas: 0, groc: 0, eatOut: 0,
                    house: 0, tithing: 0, school: 0, other: 0
                }
                summary[month][item.type] += item.amt
            } else {
                summary[month]['totalEx'] += item.amt
                summary[month][item.type] += item.amt
            }
        }

        // console.log(summary)

        return summary
    }

}
