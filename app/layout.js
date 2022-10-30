export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <meta name="other" content="I'm in layout.js" key="other" />
      </head>
      <body>{children}</body>
    </html>
  );
}
