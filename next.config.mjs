import nextra from 'nextra';

// Set up Nextra with its configuration
const withNextra = nextra({
  // ... Add Nextra-specific options here
  defaultShowCopyCode: true,
  codeHighlight: true,
  readingTime: true,
  staticImage: true,
  latex: true,
});

// Export the final Next.js config with Nextra included
export default withNextra({
  // ... Add regular Next.js options here
  output: 'export',
  basePath: process.env.PAGES_BASE_PATH,
  images: {
    unoptimized: true,
  },
});
