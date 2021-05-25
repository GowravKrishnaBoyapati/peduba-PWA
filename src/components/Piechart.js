import React,{useEffect,useState} from 'react'
import { Chart } from "react-google-charts";
function Piechart(props) {
    const [theme, setTheme] = useState(props.theme)
    const txtcol=(theme==='dark')?'#fff':'#000'
    return (
        <div>
            <Chart
                width={'100%'}
                height={'100%'}
                chartType="PieChart"
                loader={<div>Loading Chart....</div>}
                data={[
                    ['Task', 'Hours per Day'],
                    ['Scheduled', 11],
                    ['Missed', 11],
                    ['Completed', 11],
                ]}
                options={{
                    'backgroundColor': 'transparent',
                    legendTextStyle: { color: txtcol, fontSize:12 },
                    is3D: true,
                }}
                rootProps={{ 'data-testid': '2' }}
            />
        </div>
    )
}

export default Piechart
