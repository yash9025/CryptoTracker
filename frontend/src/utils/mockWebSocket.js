import { updateAssetPrice } from "../redux/cryptoSlice"

class MockWebSocket {
  constructor(store) {
    this.interval = null
    this.isConnected = false
    this.store = store
  }

  connect() {
    if (this.isConnected) return

    this.isConnected = true
    this.interval = setInterval(() => {
      this.simulatePriceUpdate()
    }, 1500) // Update every 1.5 seconds

    console.log("MockWebSocket connected")
  }

  disconnect() {
    if (!this.isConnected) return

    clearInterval(this.interval)
    this.isConnected = false
    console.log("MockWebSocket disconnected")
  }

  simulatePriceUpdate() {
    if (!this.store) return

    const state = this.store.getState()
    const assets = state.crypto.assets

    // Randomly select an asset to update
    const randomAssetIndex = Math.floor(Math.random() * assets.length)
    const assetToUpdate = assets[randomAssetIndex]

    // Generate random price change (-2% to +2%)
    const priceChangePercent = (Math.random() * 4 - 2) / 100
    const newPrice = assetToUpdate.price * (1 + priceChangePercent)

    // Generate random percent changes
    const newPercentChanges = {
      h1: this.getRandomPercentChange(assetToUpdate.percentChange1h, 0.2),
      h24: this.getRandomPercentChange(assetToUpdate.percentChange24h, 0.5),
      d7: this.getRandomPercentChange(assetToUpdate.percentChange7d, 0.3),
    }

    // Generate random volume change (-5% to +5%)
    const volumeChangePercent = (Math.random() * 10 - 5) / 100
    const newVolume = assetToUpdate.volume24h * (1 + volumeChangePercent)

    // Dispatch update action
    this.store.dispatch(
      updateAssetPrice({
        id: assetToUpdate.id,
        newPrice: Number.parseFloat(newPrice.toFixed(newPrice < 1 ? 4 : 2)),
        newPercentChanges,
        newVolume: Math.round(newVolume),
      }),
    )
  }

  getRandomPercentChange(currentValue, maxChange) {
    // Generate a random change within maxChange percentage points
    const change = Math.random() * maxChange * 2 - maxChange
    return Number.parseFloat((currentValue + change).toFixed(2))
  }
}

export default MockWebSocket
