import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs'; // nextra-theme-blog or your custom theme
import { Cards, Callout, FileTree, Steps, Tabs } from 'nextra/components';
import { CustomCallout } from '@/components/CustomCallout';
import { CustomCard, CustomCards } from '@/components/CustomCard';
import { DocsOverview } from '@/components/DocsOverview';
import Comments from '@/components/Comments';

// Get the default MDX components
const themeComponents = getThemeComponents();

const Code = (props) => (
  <code
    className="nextra-code [counter-reset:line]"
    dir="ltr"
    data-line-numbers
    // data-line-numbers-max-digits="2"
    {...props}
  />
);

// Merge components
export function useMDXComponents(components) {
  return {
    ...themeComponents,
    Cards,
    // Callout,
    Callout: CustomCallout, // Register Callout globally
    Steps,
    Tabs,
    FileTree,
    code: Code,
    DocsOverview,
    Comments,
    CustomCard,
    CustomCards,
    Files: FileTree,
    Folder: FileTree.Folder,
    File: FileTree.File,
    Tab: Tabs.Tab,
    // CustomCallout,
    ...components,
  };
}
