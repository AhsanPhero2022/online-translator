import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "online translator",
  description: "online translator",
};

const RootLayout =({ children })=> {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <h2>Abdullag brother please insert your navbar content here</h2>
        </nav>
        {children}
        <footer>
          <h2>Ovi khan brother please Insert your footer content here</h2>
        </footer>
        </body>
    </html>
  );
}

export default RootLayout;
