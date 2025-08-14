"use client";

import { useEffect } from "react";

function normalizeDigitsInString(text: string): string {
  // Replace Arabic-Indic (\u0660-\u0669) and Eastern Arabic-Indic (\u06F0-\u06F9) digits with ASCII 0-9
  return text.replace(/[\u0660-\u0669\u06F0-\u06F9]/g, (char) => {
    const code = char.charCodeAt(0);
    if (code >= 0x0660 && code <= 0x0669) {
      return String(code - 0x0660);
    }
    if (code >= 0x06f0 && code <= 0x06f9) {
      return String(code - 0x06f0);
    }
    return char;
  });
}

function normalizeDigitsInNode(node: Node): void {
  if (node.nodeType === Node.TEXT_NODE) {
    const textNode = node as Text;
    const normalized = normalizeDigitsInString(textNode.nodeValue ?? "");
    if (normalized !== textNode.nodeValue) {
      textNode.nodeValue = normalized;
    }
    return;
  }
  if (node.nodeType === Node.ELEMENT_NODE) {
    const el = node as Element;
    const tag = el.tagName;
    if (tag === "SCRIPT" || tag === "STYLE") return;
    for (let i = 0; i < el.childNodes.length; i += 1) {
      normalizeDigitsInNode(el.childNodes[i]);
    }
  }
}

export default function DigitNormalizer(): null {
  useEffect(() => {
    const root = document.body;
    if (!root) return;

    // Initial pass
    normalizeDigitsInNode(root);

    // Observe future changes
    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === "characterData" && m.target) {
          normalizeDigitsInNode(m.target);
        }
        if (m.type === "childList") {
          m.addedNodes.forEach((n) => normalizeDigitsInNode(n));
        }
      }
    });
    observer.observe(root, {
      subtree: true,
      characterData: true,
      childList: true,
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
