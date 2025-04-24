const PriceChange = ({ value }) => {
  const isPositive = value >= 0
  const bgColor = isPositive ? "bg-green-500/10" : "bg-red-500/10"
  const textColor = isPositive ? "text-green-400" : "text-red-400"
  const borderColor = isPositive ? "border-green-500/20" : "border-red-500/20"
  const formattedValue = `${isPositive ? "+" : ""}${value.toFixed(2)}%`

  return (
    <div
      className={`inline-flex items-center px-2.5 py-1 rounded-md ${bgColor} ${textColor} border ${borderColor} font-medium text-xs`}
    >
      {isPositive ? (
        <svg
          className="w-3 h-3 mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
        </svg>
      ) : (
        <svg
          className="w-3 h-3 mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      )}
      {formattedValue}
    </div>
  )
}

export default PriceChange
