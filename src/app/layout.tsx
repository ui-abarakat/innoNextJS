import { Header, Footer } from "../components/MainLayouts";
import "bootstrap/dist/css/bootstrap.min.css";

import "/public/css/style.scss";

import localFont from "next/font/local";
export const metadata = {
  title: "منصة إدارة الأفكار",
  description: "منصة إدارة الأفكار لوزارة الاتصالات وتقنية المعلومات",
};

const InnoFont = localFont({
  src: [
    {
      path: "../fonts/inno-font/LamaSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/inno-font/LamaSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/inno-font/LamaSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/inno-font/LamaSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/inno-font/LamaSans-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
});
const InnoIcons = localFont({
  src: [
    {
      path: "../fonts/inno-icons/inicon-bold.ttf",
      weight: "bold",
      style: "normal",
    },
    {
      path: "../fonts/inno-icons/inicon-regular.ttf",
      weight: "normal",
      style: "normal",
    },
  ],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" className="inno-html">
      <body id="innoBody" dir="rtl" className={InnoFont.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
