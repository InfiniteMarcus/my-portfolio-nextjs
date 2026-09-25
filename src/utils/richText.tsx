import { ReactNode } from "react";

/**
 * Parses a simple markdown-like syntax into React elements.
 *
 * Supported syntax:
 * - **bold text** → <strong>bold text</strong>
 * - [link text](url) → <a href="url" target="_blank">link text</a>
 */
export function parseRichText(text: string): ReactNode[] {
  // Combined regex: matches **bold** or [text](url)
  const tokenRegex = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g;

  const result: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let keyIndex = 0;

  while ((match = tokenRegex.exec(text)) !== null) {
    // Push any plain text before this match
    if (match.index > lastIndex) {
      result.push(text.slice(lastIndex, match.index));
    }

    if (match[1] !== undefined) {
      // **bold** match
      result.push(
        <strong key={`rich-${keyIndex++}`} className="font-semibold">
          {match[1]}
        </strong>,
      );
    } else if (match[2] !== undefined && match[3] !== undefined) {
      // [text](url) match
      result.push(
        <a
          key={`rich-${keyIndex++}`}
          href={match[3]}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-brand-primary transition-colors"
        >
          {match[2]}
        </a>,
      );
    }

    lastIndex = match.index + match[0].length;
  }

  // Push remaining plain text
  if (lastIndex < text.length) {
    result.push(text.slice(lastIndex));
  }

  return result;
}
