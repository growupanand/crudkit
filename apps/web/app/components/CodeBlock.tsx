interface CodeBlockProps {
  code: string;
  language: string;
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  return (
    <div className="bg-slate-800 text-white rounded-lg overflow-hidden">
      <div className="px-4 py-2 bg-slate-700 text-xs font-mono flex items-center">
        <span>{language}</span>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm font-mono">{code}</code>
      </pre>
    </div>
  );
}
