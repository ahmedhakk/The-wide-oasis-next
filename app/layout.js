import { Josefin_Sans } from "next/font/google";
import "@/app/_styles/globals.css";
import Header from "./_components/Header";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap", // it will display a default font until the Josefin_Sans font is loaded then it will switch to Josefin_Sans
});

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s / The Wild Oasis", // %s will be replaced with the page title
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxurious cabin hotal, located in the heart of the Itailan Dolomites, surrounded by the most beautiful mountains and dark forests.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col`}
      >
        <Header />

        <div className="flex-1 px-8 py-12">
          <main className="max-w-7xl mx-auto">{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
