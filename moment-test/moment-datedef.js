let moment = require('moment');
const MomentRange = require('moment-range');

moment = MomentRange.extendMoment(moment);
const fromDate = new Date('2021/4/11', 'YYYY-MM-DD');
const todate = new Date('2021/04/12', 'YYYY-MM-DD');

range = moment.range(fromDate, todate)
range.fromDate
range.todate
var data = [{ id: 11, title: "dgg", description: "dhfyijn", published: false, createdAt: "2021-04-11T08:29:38.000Z" },
    { id: 12, title: "sxcfvbh", description: "asdfnnn", published: false, createdAt: "2021-04-11T08:29:51.000Z" },
    { id: 13, title: "manu ", description: "adsfc", published: false, createdAt: "2021-04-11T08:30:01.000Z" },
    { id: 14, title: "pooja", description: "sangu", published: false, createdAt: "2021-04-11T08:44:10.000Z" },
    { id: 15, title: "z", description: "z", published: false, createdAt: "2021-04-12T11:51:28.000Z" },
    { id: 16, title: "cdsssd", description: "ccssadsfa", published: false, createdAt: "2021-04-12T13:54:21.000Z" },
    { id: 17, title: "kooot", description: "eeses", published: false, createdAt: "2021-04-12T15:59:07.000Z" },
    { id: 18, title: "heha", description: "haha", published: false, createdAt: "2021-04-13T10:36:05.000Z" }
]
var newArr = []
for (i = 0; i <= data.length - 1; i++) {
    var val = data[i]
    var date = val.createdAt;
    var date = new Date();
    var dates = moment(date).format('YYYY-MM-DD');
    console.log(dates)
    if (dates >= fromDate && dates <= todate) {
        newArr.push(dates)
        console.log(newArr)
    }
}
// var newData = elements.filter(elements => (dates >= startDate && dates <= endDate))
// console.log(newData)
// var list = data.forEach(element => {
//     element.createdAt.moment.format('YYYY-MM-DD') > range.startDate && element.createdAt.moment.format('YYYY-MM-DD') < range.endDate

// });
// // let startDate = '';
// // let endDate = '';

// var startDate = new Date(2013, 1, 12),
//     endDate = new Date(2013, 1, 15),
//     date = new Date(2013, 2, 15),
//     range = moment().MomentRange(startDate, endDate);

// range.contains(date); // false





// var m = moment(startDate).format();
// var n = moment(endDate).format('MMMM d, YYYY');
// console.log(m + n)