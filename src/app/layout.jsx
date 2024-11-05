import "@/assets/css/reset.css"
import '@/assets/css/root_vars.css'
import "@/assets/css/output.css"
import Header from "@/components/layout/Header";

export const metadata = {
    title: "Next front, Drupal proj",
    description: "Generated by Next front, Drupal proj",
    robots: "noindex, nofollow",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
            </body>
        </html>
    );
}
