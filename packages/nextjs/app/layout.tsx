import "@rainbow-me/rainbowkit/styles.css";
import { Providers } from "~~/providers/providers";
import { ThemeProvider } from "~~/components/ThemeProvider";
import "~~/styles/globals.css";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";
import { LanguageProvider } from "~~/contexts/LanguageContext";

export const metadata = getMetadata({
  title: "PT-Nads POAPs",
  description: "Proof of Attendance Protocol for PT-Nads Community",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning>
      <body>
        <Providers>
          <ThemeProvider enableSystem>
            <LanguageProvider>{children}</LanguageProvider>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
