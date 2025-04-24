import { useEffect } from "react"
import { useStore } from "react-redux"
import CryptoTable from "../components/CryptoTable"
import MockWebSocket from "../utils/mockWebSocket"

const Home = () => {
  const store = useStore()

  useEffect(() => {
    // Initialize and connect the mock WebSocket with the store
    const ws = new MockWebSocket(store)
    ws.connect()

    // Clean up on component unmount
    return () => {
      ws.disconnect()
    }
  }, [store])

  return (
    <div className="min-h-screen w-full py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-text">
            Crypto Price Tracker
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Real-time cryptocurrency prices and market data with{" "}
            <span className="font-bold text-purple-400">live updates</span>
          </p>
        </header>
        <main className="glow rounded-xl overflow-hidden">
          <CryptoTable />
        </main>
        <footer className="mt-8 text-center text-sm text-gray-400">
          <p>Data updates every 1.5 seconds • Powered by React & Redux</p>
        </footer>
      </div>
    </div>
  )
}

export default Home
