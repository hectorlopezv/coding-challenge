import Link from "next/link";
import "../styles/globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>hector website</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body>
        <header className="p-5 bg-blue-600">
          <p>im the Header</p>
          <Link href="/" className="px-2 py-1 bg-white text-red-500 rounded-lg">
            Home
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
