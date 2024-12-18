// per far funzionare la fun notFound() ho bisogno di un layout.jsx in src/app
// in src/i18n/routing.js imposto il redirect, quindi tecnicamente da questo layout passo solo se vado in 404
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
