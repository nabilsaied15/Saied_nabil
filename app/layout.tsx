import "../styles/globals.css";

export const metadata = {
  title: "Portfolio Nabil",
  description: "Portfolio personnel",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}