import './globals.css';
import Image from 'next/image';
import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { Banner, Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import { getUpdatedAt, generateRandomKey } from '@/lib/utils';
import {
  APP_NAME,
  APP_ICON,
  DOCS_REPO_BASE,
  GITHUB_URL,
  LINKEDIN_URL,
} from '@/constants';
import 'nextra-theme-docs/style.css';
import { TfiLinkedin } from 'react-icons/tfi';

export const metadata = {
  // Define your metadata here
  // For more information on me`tadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

const navbar = (
  <Navbar
    logo={
      <div className="flex items-center justify-center gap-2">
        <Image src={APP_ICON} alt="Logo" width={24} height={24} />
        <b>KarChunT</b>
      </div>
    }
    align="right"
    chatLink={LINKEDIN_URL}
    chatIcon={<TfiLinkedin />}
    projectLink={GITHUB_URL}
  />
);
const footer = (
  <Footer>
    Copyright © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
  </Footer>
);

export default async function RootLayout({ children }) {
  const updatedAt = await getUpdatedAt();

  const banner = (
    <Banner storageKey={generateRandomKey()}>
      Last repository update {updatedAt} 🎉
    </Banner>
  );

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head
        color={{
          hue: {
            light: 47.9,
            dark: 47.9,
          },
        }}
      >
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          sidebar={{
            autoCollapse: true,
          }}
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase={DOCS_REPO_BASE}
          footer={footer}
          darkMode={true}
          nextThemes={{
            defaultTheme: 'dark',
            forcedTheme: 'dark',
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
