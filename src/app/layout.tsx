"use client";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import MainLayout from "../layout/MainLayout";
import theme from "../components/theme/theme";
import {ThemeProvider} from "@mui/material";
import {usePathname, useRouter} from "next/navigation";
import PlaybookHeader from "../components/playboo-header/PlaybookHeader";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const slug = usePathname()
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
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
