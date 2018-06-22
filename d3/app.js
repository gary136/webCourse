d3.csv('data.csv').then(function(data){
    console.log(data);
    generate(data.columns);
});

// d3.json('data.json').then(function(data) {
//     console.log(data);
//     generate(data);
// });

function generate(dataset) {
    var dataset = [10,20,30,40,50];

    var el = d3.select('body')
        .selectAll('p')
        .data(dataset)
        .enter()
        .append('p')
        .text(function (d) {
            return 'This paragraph is binded to the number ' + d;
        })
        .attr('class', function (d) {
            if(d>25){
                return 'foo';
            } else {
                return null;
            }        
        })
        // .attr('class', 'bar')
        // .classed('foo', true)
        .classed('bar', function (d) {
            return d < 25;
        })    
        // .text('Hello World!')
        .style('color',function (d) {
            if(d>25){
                return 'red';
            } else {
                return 'blue';
            }        
        });
    console.log(el);
}

