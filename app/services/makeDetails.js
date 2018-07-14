export function makeDetails(lilData, month) {

    if(lilData.incomes.length > 0) {

        data = []

        for(let item of lilData['incomes']) {
            parts = item.date.split('-')
            if(month == (parts[0] + parts[1])) {
                item['kind'] = 'in'
                data.push(item)
            } 
        }
        
        for(let item of lilData['expenses']) {
            parts = item.date.split('-')
            if(month == (parts[0] + parts[1])) {
                item['kind'] = 'ex'
                data.push(item)
            }
        }

        function compare(a,b) {
            if (a.date < b.date)
                return -1;
            if (a.date > b.date)
                return 1;
            return 0;
        }
    
        return data.sort(compare)
    }
}
