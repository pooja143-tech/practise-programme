const PdfDocument = require('pdfkit');
var PdfTable = require('voilab-pdf-table')
const fs = require('fs')
const pdf = new PdfDocument({
        autoFirstPage: false
    }),

    table = new PdfTable(pdf, {
        bottomMargin: 30
    });

table
// add some plugins (here, a 'fit-to-width' for a column)
    .addPlugin(new(require('voilab-pdf-table/plugins/fitcolumn'))({
        column: 'description'
    }))
    // set defaults to your columns
    // .setColumnsDefaults({
    //     headerBorder: 'B',
    //     align: 'centre'
    // })

.setColumnsDefaults({
        headerBorder: ['L', 'T', 'B', 'R'],
        border: ['L', 'T', 'B', 'R'],
        align: 'center',
        padding: [7, 7, 7, 7],
        headerPadding: [7, 7, 7, 7]


    })
    // add table columns
    .addColumns([{
            id: 'id',
            header: 'id',
            width: 30
        },
        {
            id: 'name',
            header: 'name',
            width: 60
        },
        {
            id: 'address',
            header: 'address',
            width: 70
        },
        {
            id: 'phone',
            header: 'phone',
            width: 90
        },
        {
            id: 'date',
            header: 'date',
            width: 80
        },
        {
            id: 'complaint_resolution',
            header: 'complaint_resolution',
            width: 100,
            // renderer: function(tb, data) {
            //     // return 'CHF ' + data.total;
            // }
        }
    ])
    // add events (here, we draw headers on each new page)
    .onPageAdded(function(tb) {
        tb.addHeader();
    });

// if no page already exists in your PDF, do not forget to add one
pdf.addPage();

// draw content, by passing data to the addBody method
table.addBody([

    {
        id: 1,
        name: "Nadya Eka",
        address: "Jl. Ciwidey no 20",
        phone: "086454743743",
        date: "2017-09-18T18:30:00.000Z",
        problem: "vedio not matching audio",
        complaint_resolution: "Go to audio settings of your TV and adust the audio delay "
    },
    {
        id: 2,
        name: "Amali",
        address: "Jl. kemandoran no 10 Jakarta",
        phone: "03937263623",
        date: "2018-11-12T18:30:00.000Z",
        problem: "hearing an echo",
        complaint_resolution: "Turn the volume all the way down for your TV speakers and only use your external sound system."
    }

]);

pdf.end()
pdf.pipe(fs.createWriteStream('table.pdf'))