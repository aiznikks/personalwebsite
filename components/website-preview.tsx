'use client'

import { useState } from 'react'

interface WebsitePreviewProps {
    url: string
    title: string
    className?: string
}

export default function WebsitePreview({ url, title, className = "" }: WebsitePreviewProps) {
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    return (
        <div className={`relative w-full h-full ${className}`}>
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 z-10">
                    <div className="text-center">
                        <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-2"></div>
                        <div className="text-xs text-white/70">Loading {title}...</div>
                    </div>
                </div>
            )}

            {hasError && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 z-10">
                    <div className="text-center">
                        <div className="text-xs text-white/70">Preview not available</div>
                    </div>
                </div>
            )}

            <iframe
                src={url}
                title={title}
                className="w-full h-full border-0"
                onLoad={() => setIsLoading(false)}
                onError={() => {
                    setIsLoading(false)
                    setHasError(true)
                }}
                sandbox="allow-scripts allow-same-origin allow-forms"
                loading="lazy"
            />
        </div>
    )
}
