export function extractWords(str: string, length: number) {
  return str.substr(0, str.lastIndexOf(' ', length));
}

export function seoTitle(str: string): string {
  return (str != null && str.length > 60) ? extractWords(str, 60) : str;
}

export function seoDescription(str: string): string {
  return (str != null && str.length > 156) ? extractWords(str, 156) : str;
}

export function trimLineBreaks(str: string): string {
  return str.replace(/(\r\n|\n|\r)/gm,'');
}
