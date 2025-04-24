import { createSlice } from "@reduxjs/toolkit"
import { sampleCryptoData } from "../utils/sampleData"

const initialState = {
  assets: sampleCryptoData,
  loading: false,
  error: null,
}

export const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    updateAssetPrice: (state, action) => {
      const { id, newPrice, newPercentChanges, newVolume } = action.payload
      const asset = state.assets.find((asset) => asset.id === id)

      if (asset) {
        asset.price = newPrice
        asset.percentChange1h = newPercentChanges.h1
        asset.percentChange24h = newPercentChanges.h24
        asset.percentChange7d = newPercentChanges.d7
        asset.volume24h = newVolume
      }
    },
  },
})

export const { updateAssetPrice } = cryptoSlice.actions

// Selectors
export const selectAllAssets = (state) => state.crypto.assets
export const selectAssetById = (state, id) => state.crypto.assets.find((asset) => asset.id === id)

export default cryptoSlice.reducer
