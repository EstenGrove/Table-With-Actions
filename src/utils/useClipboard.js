import { useState, useEffect } from "react";

export const useClipboard = val => {
  const [copied, setCopied] = useState(null);

  function copyToClipboard(val = copied) {
    if (!navigator) {
      return new Error("This feature is not enabled :(");
    }
    return navigator.clipboard.writeText(val);
  }

  function pasteFromClipboard(val = copied) {
    if (!navigator) {
      return new Error("This feature is not enabled :(");
    }
    return navigator.clipboard.readText(val);
  }

  useEffect(() => {
    setCopied(val);
  }, [val]);

  return {
    copied,
    copyToClipboard,
    pasteFromClipboard
  };
};
