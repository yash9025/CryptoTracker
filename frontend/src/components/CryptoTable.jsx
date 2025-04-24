import { useSelector } from "react-redux"
import { selectAllAssets } from "../redux/cryptoSlice"
import CryptoRow from "./CryptoRow"

const CryptoTable = () => {
  const assets = useSelector(selectAllAssets)

  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-gradient-to-b from-gray-800/80 to-gray-900/80 backdrop-blur-lg border border-gray-700 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300">
            <th className="py-4 px-3 text-left text-xs font-medium uppercase tracking-wider">#</th>
            <th className="py-4 px-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
            <th className="py-4 px-3 text-left text-xs font-medium uppercase tracking-wider">Price</th>
            <th className="py-4 px-3 text-left text-xs font-medium uppercase tracking-wider">1h %</th>
            <th className="py-4 px-3 text-left text-xs font-medium uppercase tracking-wider">24h %</th>
            <th className="py-4 px-3 text-left text-xs font-medium uppercase tracking-wider">7d %</th>
            <th className="py-4 px-3 text-left text-xs font-medium uppercase tracking-wider hidden sm:table-cell">
              Market Cap
            </th>
            <th className="py-4 px-3 text-left text-xs font-medium uppercase tracking-wider hidden md:table-cell">
              Volume (24h)
            </th>
            <th className="py-4 px-3 text-left text-xs font-medium uppercase tracking-wider hidden md:table-cell">
              Circulating Supply
            </th>
            <th className="py-4 px-3 text-left text-xs font-medium uppercase tracking-wider hidden md:table-cell">
              Max Supply
            </th>
            <th className="py-4 px-3 text-left text-xs font-medium uppercase tracking-wider hidden xs:table-cell">
              Last 7 Days
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700/50">
          {assets.map((asset, index) => (
            <CryptoRow key={asset.id} assetId={asset.id} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CryptoTable
