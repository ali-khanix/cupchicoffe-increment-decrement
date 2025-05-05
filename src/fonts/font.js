import localFont from "next/font/local";

export const iranSans = localFont({
  src: [
    {
      path: "./IRANSansXFaNum-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./IRANSansXFaNum-UltraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./IRANSansXFaNum-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./IRANSansXFaNum-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./IRANSansXFaNum-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./IRANSansXFaNum-DemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./IRANSansXFaNum-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./IRANSansXFaNum-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./IRANSansXFaNum-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],

  variable: "--font-iran-sans",
  display: "swap",
});
