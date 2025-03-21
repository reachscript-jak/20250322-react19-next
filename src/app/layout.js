import "./globals.css";

export const metadata = {
  title: "じゃけぇUdemy入門コースReact19解説",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}
