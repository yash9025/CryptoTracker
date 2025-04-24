"use client"

import { memo, useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { selectAssetById } from "../redux/cryptoSlice"
import PriceChange from "./PriceChange"
import MiniChart from "./MiniChart"

const CryptoRow = ({ assetId, index }) => {
  const asset = useSelector((state) => selectAssetById(state, assetId))
  const [isUpdated, setIsUpdated] = useState(false)
  const [prevPrice, setPrevPrice] = useState(asset?.price)

  useEffect(() => {
    if (asset && prevPrice !== asset.price) {
      setPrevPrice(asset.price)
      setIsUpdated(true)
      const timer = setTimeout(() => setIsUpdated(false), 1000)
      return () => clearTimeout(timer)
    }
  }, [asset, prevPrice])

  if (!asset) return null

  const formatNumber = (num) => {
    if (num === null || num === undefined) return "N/A"

    if (num >= 1e12) return `$${(num / 1e12).toFixed(2)}T`
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`
    if (num >= 1e3) return `$${(num / 1e3).toFixed(2)}K`

    return `$${num.toFixed(2)}`
  }

  const formatPrice = (price) => {
    if (price >= 1) return `$${price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
    return `$${price.toFixed(4)}`
  }

  const chartColor = asset.percentChange7d >= 0 ? "#10b981" : "#ef4444"

  const priceClasses = `font-mono ${isUpdated ? "price-pulse bg-purple-500/20 rounded-md px-2 py-1" : ""}`

  return (
    <tr className="crypto-row group">
      <td className="py-4 px-3 whitespace-nowrap text-sm font-medium text-gray-300">{index + 1}</td>
      <td className="py-4 px-3 whitespace-nowrap">
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden bg-gray-800 p-1 border border-gray-700 group-hover:border-purple-500 transition-colors duration-300">
            <img
              src='https://th.bing.com/th/id/OIP.NH1hmcewVuKyy4SbYlmdfAHaE8?rs=1&pid=ImgDetMain'
              alt={asset.name}
              className="h-full w-full object-contain"
              crossOrigin="anonymous"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-sm font-medium text-white">{asset.name}</div>
            <div className="text-xs text-gray-400">{asset.symbol}</div>
          </div>
        </div>
      </td>
      <td className="py-4 px-3 whitespace-nowrap">
        <div className={priceClasses}>{formatPrice(asset.price)}</div>
      </td>
      <td className="py-4 px-3 whitespace-nowrap">
        <PriceChange value={asset.percentChange1h} />
      </td>
      <td className="py-4 px-3 whitespace-nowrap">
        <PriceChange value={asset.percentChange24h} />
      </td>
      <td className="py-4 px-3 whitespace-nowrap">
        <PriceChange value={asset.percentChange7d} />
      </td>
      <td className="py-4 px-3 whitespace-nowrap hidden sm:table-cell text-sm text-gray-300">
        {formatNumber(asset.marketCap)}
      </td>
      <td className="py-4 px-3 whitespace-nowrap hidden md:table-cell text-sm text-gray-300">
        {formatNumber(asset.volume24h)}
      </td>
      <td className="py-4 px-3 whitespace-nowrap hidden md:table-cell text-sm text-gray-300">
        <div className="flex items-center">
          <span className="mr-1">{asset.circulatingSupply.toLocaleString()}</span>
          <span className="text-xs text-gray-400">{asset.symbol}</span>
        </div>
      </td>
      <td className="py-4 px-3 whitespace-nowrap hidden md:table-cell text-sm text-gray-300">
        {asset.maxSupply ? asset.maxSupply.toLocaleString() : "∞"}
      </td>
      <td className="py-4 px-3 whitespace-nowrap hidden xs:table-cell">
        <div className="bg-gray-800/50 rounded-md p-1 border border-gray-700">
          <MiniChart data={asset.chartData} color={chartColor} />
        </div>
      </td>
    </tr>
  )
}

export default memo(CryptoRow)
