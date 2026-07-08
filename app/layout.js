export const metadata = {
  title: "Dhanush | Portfolio",
  description: "Full Stack Developer Portfolio",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}