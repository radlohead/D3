import ajax from './ajax';
const weatherURL = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=seoul&mode=json&units=metric&cnt=7&apikey=8d554a626fc5d01d77812b612a6de257';

ajax(weatherURL, ajaxData => {
        let newDateYMD = i=> {
            let newDate = i=> {
                return new Date(ajaxData.list[i].dt * 1000);
            };
            return `${newDate(i).getFullYear()}-${newDate(i).getMonth()+1}-${newDate(i).getDate()}`
        };
        let temp = i=> {
            return Math.round(ajaxData.list[i].temp.day);
        };

        const data = {
            "xScale": "time",
            "yScale": "linear",
            "main": [
                {
                    "className": ".pizza",
                    "data": [
                        {
                            "x": newDateYMD(0),
                            "y": temp(0)
                        },
                        {
                            "x": newDateYMD(1),
                            "y": temp(1)
                        },
                        {
                            "x": newDateYMD(2),
                            "y": temp(2)
                        },
                        {
                            "x": newDateYMD(3),
                            "y": temp(3)
                        },
                        {
                            "x": newDateYMD(4),
                            "y": temp(4)
                        },
                        {
                            "x": newDateYMD(5),
                            "y": temp(5)
                        },
                        {
                            "x": newDateYMD(6),
                            "y": temp(6)
                        }
                    ]
                }
            ]
        };

    const opts = {
        "dataFormatX": function (x) { return d3.time.format('%Y-%m-%d').parse(x); },
        "tickFormatX": function (x) { return d3.time.format('%a')(x); }
    };
    const myChart = new xChart('line-dotted', data, '#myChart', opts);
});