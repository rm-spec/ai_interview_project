import React from "react";

export function formatBoldUnderline(input: string): React.ReactNode[] {
  const regex = /\*\*(.+?)\*\*/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(input)) !== null) {
    // Push plain text before the match
    if (match.index > lastIndex) {
      parts.push(input.slice(lastIndex, match.index));
    }

    // Push bold + underline formatted text
    parts.push(
      <span key={match.index} className="font-bold underline">
        {match[1]}
      </span>
    );

    lastIndex = regex.lastIndex;
  }

  // Push remaining text after last match
  if (lastIndex < input.length) {
    parts.push(input.slice(lastIndex));
  }

  return parts;
}
