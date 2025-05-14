// app/products/components/LoadingScreen.tsx

export default function LoadingScreen() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <span className="text-lg font-medium animate-pulse">
        درحال بارگذاری اطلاعات...
      </span>
    </div>
  )
}
