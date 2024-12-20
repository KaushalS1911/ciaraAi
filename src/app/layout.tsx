"use client";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import MainLayout from "../layout/MainLayout";
import theme from "../components/theme/theme";
import {Inter} from 'next/font/google'
import {ThemeProvider} from "@mui/material";
import {usePathname, useRouter} from "next/navigation";
import PlaybookHeader from "../components/playbook-header/PlaybookHeader";

const inter = Inter({
    subsets: ['latin'],
    weight: [
        '100', '200', '300', '400', '500', '600', '700', '800', '900'
    ],
    variable: '--font-inter'
});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const slug = usePathname()
    return (
        <html lang="en">
        <body className={inter.variable}>
        <ThemeProvider theme={theme}>
            {slug == "/playbook" ?
                <>
                    <PlaybookHeader/>
                    {children}
                </> :
                <MainLayout>
                    {children}
                </MainLayout>}
        </ThemeProvider>
        </body>
        </html>
    );
}
