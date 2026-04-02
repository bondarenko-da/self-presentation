import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Дмитрий Бондаренко | Senior Developer & DWH Architect",
  description: "Разработчик и архитектор корпоративных хранилищ данных (DWH) с опытом 13+ лет. Специализация: SQL, Greenplum, PostgreSQL, Data Vault 2.0, ETL/ELT, Airflow, dbt.",
  keywords: ["DWH", "Data Warehouse", "SQL", "Greenplum", "PostgreSQL", "Data Engineer", "Архитектор DWH", "ETL", "Airflow", "dbt", "Data Vault"],
  authors: [{ name: "Дмитрий Бондаренко" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Дмитрий Бондаренко | Senior Developer & DWH Architect",
    description: "Разработчик и архитектор корпоративных хранилищ данных с опытом 13+ лет",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Дмитрий Бондаренко | Senior Developer & DWH Architect",
    description: "Разработчик и архитектор корпоративных хранилищ данных с опытом 13+ лет",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
        <Sonner position="top-center" richColors />
      </body>
    </html>
  );
}
