import type { MetaRecord } from 'nextra';
import { DOCUMENTATION } from '@/constants';

const docsItems = Object.entries(DOCUMENTATION).reduce(
  (acc, [key, item]) => {
    acc[key] = {
      title: item.title,
      href: item.href,
    };
    return acc;
  },
  {} as Record<string, { title: string; href: string }>,
);

/**
 * type MetaRecordValue =
 *  | TitleSchema
 *  | PageItemSchema
 *  | SeparatorSchema
 *  | MenuSchema
 *
 * type MetaRecord = Record<string, MetaRecordValue>
 **/
const meta: MetaRecord = {
  index: {
    type: 'page',
    display: 'hidden',
  },
  about: {
    title: 'About',
    type: 'page',
  },
  docs: {
    title: 'Docs',
    type: 'menu',
    items: docsItems,
  },
};

export default meta;
