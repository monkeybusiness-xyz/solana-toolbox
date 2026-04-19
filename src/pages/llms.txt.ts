import type { APIRoute } from 'astro';
import categories from '../../data/categories.json';

const toolFiles = import.meta.glob('../../data/tools/*.json', { eager: true });
const allTools: Record<string, any[]> = {};
for (const [path, mod] of Object.entries(toolFiles)) {
  const slug = path.split('/').pop()!.replace('.json', '');
  allTools[slug] = (mod as any).default;
}

export const GET: APIRoute = () => {
  const sections = categories
    .map((cat) => {
      const tools = allTools[cat.slug] ?? [];
      if (tools.length === 0) return '';
      const items = tools
        .map((t: any) => `- [${t.name}](${t.url ?? t.github}): ${t.description}`)
        .join('\n');
      return `## ${cat.name}\n\n${cat.description}\n\n${items}`;
    })
    .filter(Boolean)
    .join('\n\n');

  const totalTools = Object.values(allTools).reduce((sum, arr) => sum + arr.length, 0);

  const content = `# Solana Toolbox
> A community-curated directory of ${totalTools}+ tools, libraries, and resources for building on and using Solana.

URL: https://solana-toolbox.com
Source: https://github.com/monkeybusiness-xyz/solana-toolbox

Solana Toolbox is an open-source, community-maintained directory. Listings are not paid placements. Content may be freely referenced and cited.

${sections}
`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
