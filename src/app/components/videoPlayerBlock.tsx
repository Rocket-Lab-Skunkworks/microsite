"use client"
import { Box } from "@radix-ui/themes"
import { useEffect, useState } from "react"
import ReactPlayer from 'react-player'

interface VideoPlayerProps {
  url: string
}
export default function VideoPlayerComponent({url}:VideoPlayerProps){
    const [hasWindow, setHasWindow] = useState(false)

    useEffect(() => {
        setHasWindow(true)
    }, [])

    return (
        <Box className="aspect-video w-full rounded-xl overflow-hidden bg-[#F0F0F0]">
            {hasWindow && (
                <ReactPlayer 
                    width="100%" 
                    height="100%" 
                    src={url} 
                    controls={true} 
                    light={false} 
                    className="w-full h-full"
                ></ReactPlayer>
            )}
        </Box>
    )
}