import BodyLayout from "@/components/Layout/BodyLayout";
import { Providers } from "@/redux/provider";
import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  // Output: <title>About | Acme</title>
  title: {
    template: "%s | Ma nana",
    default: "Ma nana", // a default is required when creating a template
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>
          <BodyLayout>{children}</BodyLayout>
        </Providers>
      </body>
    </html>
  );
}
