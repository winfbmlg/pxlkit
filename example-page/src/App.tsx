import { useState, useEffect } from 'react'
import { AnimatedPxlKitIcon, PxlKitIcon } from '@pxlkit/core'
import { Package, SparkleSmall, Check, Robot, LoadingSpinner } from '@pxlkit/ui'
import { PixelButton } from '@pxlkit/ui-kit'

function App() {
  const [isMinting, setIsMinting] = useState(false)
  const [supply, setSupply] = useState(1337)

  // Demo auto-increment supply
  useEffect(() => {
    const timer = setInterval(() => {
      setSupply(s => Math.min(s + Math.floor(Math.random() * 3), 10000))
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const handleMint = () => {
    setIsMinting(true)
    setTimeout(() => {
      setIsMinting(false)
      alert('Mint successful!')
    }, 2000)
  }

  return (
    <div className="min-h-screen p-8 flex flex-col items-center">
      
      {/* Navbar */}
      <nav className="w-full max-w-4xl flex justify-between items-center mb-16">
        <div className="flex items-center gap-3">
          <PxlKitIcon 
            icon={Package} 
            size={32} 
            color="#4F46E5"
            colorful={true}
          />
          <h1 className="font-pixel text-xl tracking-tighter text-retro-primary">PXL Punks</h1>
        </div>
        <PixelButton tone="cyan" size="sm">
          Connect Wallet
        </PixelButton>
      </nav>

      {/* Hero */}
      <main className="w-full max-w-4xl grid md:grid-cols-2 gap-12 items-center flex-1">
        
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-retro-secondary/20 text-retro-secondary 
                          px-3 py-1 text-xs font-pixel rounded-full border border-retro-secondary/50">
            <PxlKitIcon 
              icon={SparkleSmall} 
              size={12} 
              color="#FBBF24"
              colorful={true}
            />
            <span>Mint is Live</span>
          </div>
          
          <h2 className="font-pixel text-4xl leading-tight">
            10,000 Fully <br/> 
            <span className="text-retro-primary">On-Chain</span> Avatars
          </h2>
          
          <p className="font-sans text-retro-muted text-lg max-w-sm">
            Generated and rendered entirely on the blockchain using the PxlKit engine. No IPFS, no APIs. Just pure retro goodness.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4 py-4">
            <div className="flex items-center gap-2">
              <PxlKitIcon icon={Check} size={24} color="#10B981" colorful={true} />
              <span className="font-sans font-medium">100% On-Chain</span>
            </div>
            <div className="flex items-center gap-2">
              <PxlKitIcon icon={Check} size={24} color="#10B981" colorful={true} />
              <span className="font-sans font-medium">CC0 License</span>
            </div>
          </div>
        </div>

        {/* Mint Card */}
        <div className="bg-white border-4 border-retro-border shadow-retro p-8 flex flex-col items-center gap-6 transform rotate-1 hover:rotate-0 transition-transform p-8">
          
          <div className="bg-retro-bg border-2 border-retro-border p-4 w-48 h-48 flex items-center justify-center pixel-corners">
             <PxlKitIcon 
                icon={Robot} 
                size={96} 
                color="#1D1D20"
                colorful={true}
             />
          </div>

          <div className="w-full space-y-4">
            <div className="flex justify-between font-sans font-bold">
              <span>Price</span>
              <span>0.05 ETH</span>
            </div>
            <div className="flex justify-between font-sans text-retro-muted text-sm">
              <span>Minted</span>
              <span>{supply} / 10000</span>
            </div>
            
            <div className="w-full bg-retro-bg h-4 border-2 border-retro-border p-0.5">
              <div 
                className="bg-retro-primary h-full transition-all duration-500" 
                style={{ width: `${(supply/10000)*100}%` }}
              />
            </div>

            <PixelButton 
              onClick={handleMint}
              disabled={isMinting}
              tone="green"
              size="lg"
              className="w-full flex justify-center items-center gap-3">
              {isMinting ? (
                <>
                  <AnimatedPxlKitIcon icon={LoadingSpinner} size={16} color="white" colorful={true} />
                  MINTING...
                </>
              ) : (
                'MINT 1 PUNK'
              )}
            </PixelButton>
          </div>
        </div>

      </main>

    </div>
  )
}

export default App
