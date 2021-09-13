import { stripHtml } from "string-strip-html";

export const fixExcerpt = node => {
  let { comments } = node;
  if (comments?.nodes?.length) {
    var excerpt = comments.nodes[0];
    return excerpt.content;
  } else {
    var excerpt = stripHtml(node.content || '').result
    excerpt = excerpt.replace(/\n|\r/g, " ");
    excerpt = excerpt.replace(/\s\s+/g, ' ');
    excerpt = excerpt.trim();
    const duplicated = excerpt.toLowerCase().startsWith(node.title.toLowerCase().replace('  ', ' '))
    excerpt.replace(node.title, '')
    excerpt = excerpt.substring(duplicated ? node.title.length : 0, Math.min(excerpt.length, 174)) + '...';
    excerpt = excerpt.trim();
  }
  return excerpt
}