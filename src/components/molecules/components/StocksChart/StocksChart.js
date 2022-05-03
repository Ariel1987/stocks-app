import { Line } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'
import { useStocksData } from '../../../../context/useStocksData'
import ChartOptions from '../ChartOptions/ChartOptions'
Chart.register(...registerables)

const StocksChart = () => {
  const { state } = useStocksData()

  const date = Object.entries(
    state.data?.stocksResult.data['Time Series (Daily)'],
  )
    .slice(0, 5)
    .reverse()
    .map((data) => data[0])
  const open = Object.entries(
    state.data?.stocksResult.data['Time Series (Daily)'],
  )
    .slice(0, 5)
    .reverse()
    .map((data) => data[1]['1. open'])

  return (
    <>
      <ChartOptions />
      <Line
        data={{
          labels: [
            `${date[0]}`,
            `${date[1]}`,
            `${date[2]}`,
            `${date[3]}`,
            `${date[4]}`,
          ],
          datasets: [
            {
              label: 'Last seven days',
              data: [
                `${open[0]}`,
                `${open[1]}`,
                `${open[2]}`,
                `${open[3]}`,
                `${open[4]}`,
              ],
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
