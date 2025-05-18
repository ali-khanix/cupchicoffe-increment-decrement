// app/products/components/LoadingScreen.tsx

import { DotLottieReact } from '@lottiefiles/dotlottie-react'

export default function LoadingScreen() {
  return (
    <div className=" flex items-center justify-center min-h-screen">
      <DotLottieReact
        src="https://lottie.host/fb75190c-f0dd-42d0-96f3-36f51557c4c6/qUU5fiAaXu.lottie"
        loop
        autoplay
      />
    </div>
  )
}
