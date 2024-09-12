import IceCreamTable from '../tables/IceCreamTable'
import NonIceCreamTable from '../tables/NonIceCreamTable'
import WharehouseTable from '../tables/WharehouseTable'

function Home() {
  return (
    <div>
      <WharehouseTable />
      <IceCreamTable />
      <NonIceCreamTable />
    </div>
  )
}

export default Home
