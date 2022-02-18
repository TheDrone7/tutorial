import showdown from 'showdown';
import { pages } from './structure.json';

const options = {
  omitExtraWLInCodeBlocks: true,
  ghCompatibleHeaderId: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tables: true,
  tasklists: true,
  ghCodeBlocks: true,
  simpleLineBreaks: true,
  ghMentions: true,
  ghMentionsLink: 'https://replit.com/@{u}',
  emoji: true,
  underline: true,
  ellipsis: true
};

const converter = new showdown.Converter(options);
converter.setFlavor('github');

export const getContent = async (link: string) => {
  const page = pages.find(p => p.link === link);
  console.log(page);
  console.log(link);
  if (page) {
    const md = await fetch('/tutorial/' + page.file).then(res => res.text());
    return converter.makeHtml(md);
  } else {
    return 'This is not a page. <a href="/">Go back home</a>.'
  }
};