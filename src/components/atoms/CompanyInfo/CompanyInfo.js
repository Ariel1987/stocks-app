import { useStocksData } from '../../../context/useStocksData'

const CompanyInfo = () => {
  const { state } = useStocksData()

  return (
    <h1>{`${state.data?.payload.companyName} (${state.data?.payload.symbol})`}</h1>
  )
}

export default CompanyInfo
