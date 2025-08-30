'use client'

import { useEffect, useState } from 'react'

export default function RealtimeBg() {
    const [isLoading, setIsLoading] = useState(true)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        // Simulate real-time loading
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    setIsLoading(false)
                    return 100
                }
                return prev + Math.random() * 15
            })
        }, 100)

        return () => clearInterval(interval)
    }, [])

    if (!isLoading) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
            <div className="text-center">
                <div className="mb-4 text-2xl font-bold text-white">Loading Portfolio...</div>
                <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-300 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <div className="mt-2 text-sm text-white/70">{Math.round(progress)}%</div>

                {/* Animated dots */}
                <div className="mt-4 flex justify-center space-x-1">
                    {[0, 1, 2].map(i => (
                        <div
                            key={i}
                            className="w-2 h-2 bg-white/60 rounded-full animate-pulse"
                            style={{
                                animationDelay: `${i * 0.2}s`,
                                animationDuration: '1s'
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
