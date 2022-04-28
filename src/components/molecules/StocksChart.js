import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const StocksChart = () => {
  return (
    <>
      <Line
        data={{
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            {
              label: 'Week float',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: '#8bf1d4',
              borderColor: '#8bf1d4',
              borderWidth: 1,
            },
          ],
        }}
        height={400}
        width={600}
      />
    </>
  )
}

export default StocksChart
