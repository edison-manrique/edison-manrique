import { useEffect, useState } from 'react';
import { Check, Copy, ExternalLink, Mail } from 'lucide-react';
import bannerSvg from '../assets/banner.svg';
import rawReadme from '../README.md?raw';

const TYPING_LINES = [
  'Zero-Allocation Cryptographic Engines',
  'Bare-Metal Performance with Zig & Rust',
  'WebAssembly & Edge AI Infrastructure',
  'EVM Internals & Protocol-Level Architecture',
];

const RUST_CODE = `struct Engineer {
    name: &'static str,
    location: &'static str,
    stack: [&'static str; 5],
    principles: [&'static str; 3],
}

const EDI: Engineer = Engineer {
    name: "Edison Manrique Chocce",
    location: "Peru",
    stack: ["Rust", "Zig", "AssemblyScript", "Solidity", "TypeScript"],
    principles: [
        "Zero memory allocations in critical paths",
        "Deterministic cross-runtime isomorphism (Node/Bun/Deno/Browser)",
        "Rigorous verification against formal cryptographic vectors",
    ],
};`;

interface ProjectItem {
  title: string;
  metadata: string;
  description: string;
  codeNote?: string;
  repoUrl?: string;
  demoUrl?: string;
  demoLabel?: string;
}

const PROJECTS: ProjectItem[] = [
  {
    title: 'blockchain-wasm',
    metadata: 'WASM Zero-Alloc · v4.0.0',
    description:
      'Single-binary, zero-allocation WebAssembly cryptographic engine for Bitcoin & Ethereum wallets. Includes secp256k1, BIP-32/39/44, Schnorr (BIP-340), ECDSA, ECDH, Taproot, WIF, and addresses without runtime heap allocation or',
    codeNote: 'memory.grow',
    repoUrl: 'https://github.com/edison-manrique/blockchain-wasm',
    demoUrl: 'https://edison-manrique.github.io/blockchain-wasm/',
    demoLabel: 'Live Interactive Playground',
  },
  {
    title: 'fast-tiny-tts',
    metadata: 'Edge AI · 4.5M Params · 24kHz · WebGPU & ONNX',
    description:
      'Ultra-compact, real-time English Neural TTS running 100% locally on CPU, mobile, and client browsers via ONNX, Pyodide, and Web Workers. Zero server round-trips with instant voice synthesis.',
    repoUrl: 'https://github.com/edison-manrique/fast-tiny-tts',
    demoUrl: 'https://edison-manrique.github.io/fast-tiny-tts/',
    demoLabel: 'Live Web Demo',
  },
  {
    title: 'Cryptographic WASM Suites',
    metadata: '2FA-WASM · AEAD-WASM · SHA2-WASM',
    description:
      'Specialized low-level cryptographic building blocks: 2fa-wasm (RFC-6238 TOTP/HOTP), aead-wasm (ChaCha20-Poly1305 authenticated ciphers), and sha2-wasm for maximum hashing throughput in sandboxed environments.',
  },
  {
    title: 'Web3 & Protocol Infrastructure',
    metadata: 'Solidity 0.8.36 · EVM Deep Internals',
    description:
      'Protocol-level design, secure EVM smart contracts, gas-optimized state structures, and multi-chain execution layers spanning Bitcoin scripts, Taproot trees, and Ethereum rollups.',
  },
];

interface StackRow {
  domain: string;
  technologies: string[];
  focus: string;
}

const STACK_ROWS: StackRow[] = [
  {
    domain: 'Low-Level & Systems',
    technologies: ['Rust', 'Zig', 'WebAssembly', 'AssemblyScript'],
    focus: 'Zero-allocation kernels, SIMD & deterministic memory layouts',
  },
  {
    domain: 'Blockchain & Web3',
    technologies: ['Solidity 0.8.36', 'Ethereum', 'Bitcoin', 'Foundry'],
    focus: 'EVM internals, Taproot scripts & formal test vectors',
  },
  {
    domain: 'High-Performance Web',
    technologies: ['TypeScript', 'Bun', 'SolidJS', 'Vite'],
    focus: 'Isomorphic Node, Bun, Deno & browser execution',
  },
  {
    domain: 'Edge AI & Computing',
    technologies: ['ONNX Runtime', 'WebGPU', 'Python'],
    focus: 'Client-side neural inference & Pyodide Web Workers',
  },
];

const PHILOSOPHY_ITEMS = [
  {
    title: 'Zero-Allocation Guarantee',
    detail:
      'Critical algorithms avoid dynamic heap allocation, preventing GC stutter and unpredictability in latency-sensitive applications.',
  },
  {
    title: 'Mathematical Rigor',
    detail:
      'Cryptographic primitives are verified against BIP test vectors, golden Python implementations, and algebraic curve constants.',
  },
  {
    title: 'Isomorphic Runtime Design',
    detail:
      'Every library is engineered from day zero to run identically on Node.js, Bun, Deno, and modern browsers without transpiler bloat.',
  },
  {
    title: 'Intelligence-Driven Systems',
    detail:
      'Leveraging advanced LLM agents and neuro-symbolic reasoning to synthesize complex codebases and perform continuous verification.',
  },
];

function TypingBanner() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = TYPING_LINES[lineIndex];
    let delay = isDeleting ? 32 : 58;

    if (!isDeleting && charCount === current.length) {
      delay = 1500;
    } else if (isDeleting && charCount === 0) {
      delay = 250;
    }

    const timer = window.setTimeout(() => {
      if (!isDeleting && charCount < current.length) {
        setCharCount((c) => c + 1);
      } else if (!isDeleting && charCount === current.length) {
        setIsDeleting(true);
      } else if (isDeleting && charCount > 0) {
        setCharCount((c) => c - 1);
      } else {
        setIsDeleting(false);
        setLineIndex((i) => (i + 1) % TYPING_LINES.length);
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [charCount, isDeleting, lineIndex]);

  const text = TYPING_LINES[lineIndex].slice(0, charCount);

  return (
    <a
      href="https://github.com/edison-manrique"
      target="_blank"
      rel="noreferrer"
      className="inline-flex min-h-[1.75rem] items-center font-mono text-sm font-medium text-[#38bdf8] transition-colors duration-150 hover:text-[#7dd3fc] sm:text-base"
    >
      <span>{text}</span>
      <span className="typing-cursor ml-1 inline-block h-4 w-0.5 bg-[#22d3ee]" />
    </a>
  );
}

function StatsImage({
  src,
  alt,
  heightClass,
  fallbackTitle,
  fallbackSubtitle,
}: {
  src: string;
  alt: string;
  heightClass: string;
  fallbackTitle: string;
  fallbackSubtitle: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <a
        href="https://github.com/edison-manrique"
        target="_blank"
        rel="noreferrer"
        className="flex w-full flex-col items-center justify-center rounded-xl border border-[#1c2638] bg-[#0a0f18] px-6 py-10 text-center transition-colors duration-150 hover:border-[#38bdf8]/50"
      >
        <span className="font-mono text-sm font-semibold text-[#38bdf8]">
          {fallbackTitle}
        </span>
        <span className="mt-1.5 text-xs text-[#94a3b8]">{fallbackSubtitle}</span>
      </a>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      className={`${heightClass} w-auto max-w-full rounded-xl object-contain`}
      onError={() => setFailed(true)}
    />
  );
}

export function App() {
  const [viewMode, setViewMode] = useState<'rendered' | 'raw'>('rendered');
  const [copiedRust, setCopiedRust] = useState(false);
  const [copiedReadme, setCopiedReadme] = useState(false);

  const handleCopyRust = async () => {
    try {
      await navigator.clipboard.writeText(RUST_CODE);
      setCopiedRust(true);
      window.setTimeout(() => setCopiedRust(false), 1800);
    } catch {
      setCopiedRust(false);
    }
  };

  const handleCopyReadme = async () => {
    try {
      await navigator.clipboard.writeText(rawReadme);
      setCopiedReadme(true);
      window.setTimeout(() => setCopiedReadme(false), 1800);
    } catch {
      setCopiedReadme(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#05070b] text-[#f1f5f9]">
      {/* Strict 3-Zone Top Bar */}
      <header className="sticky top-0 z-20 border-b border-[#161f30] bg-[#05070b]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-8 px-4 py-3.5 sm:px-8">
          <a
            href="#top"
            onClick={() => setViewMode('rendered')}
            className="font-display text-lg font-bold tracking-tight text-[#f8fafc] whitespace-nowrap shrink-0"
          >
            Edi Manrique
          </a>

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#94a3b8]">
            <a
              href="#about"
              onClick={() => setViewMode('rendered')}
              className="transition-colors duration-150 hover:text-[#f8fafc] whitespace-nowrap shrink-0"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={() => setViewMode('rendered')}
              className="transition-colors duration-150 hover:text-[#f8fafc] whitespace-nowrap shrink-0"
            >
              Projects
            </a>
            <a
              href="#stack"
              onClick={() => setViewMode('rendered')}
              className="transition-colors duration-150 hover:text-[#f8fafc] whitespace-nowrap shrink-0"
            >
              Stack
            </a>
            <a
              href="#analytics"
              onClick={() => setViewMode('rendered')}
              className="transition-colors duration-150 hover:text-[#f8fafc] whitespace-nowrap shrink-0"
            >
              Analytics
            </a>
            <a
              href="#philosophy"
              onClick={() => setViewMode('rendered')}
              className="transition-colors duration-150 hover:text-[#f8fafc] whitespace-nowrap shrink-0"
            >
              Philosophy
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setViewMode((m) => (m === 'rendered' ? 'raw' : 'rendered'))}
            className="rounded-lg border border-[#1c2638] bg-[#0a0f18] px-4 py-2 text-xs font-semibold text-[#e2e8f0] transition-colors duration-150 hover:border-[#38bdf8]/60 hover:text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#38bdf8]"
          >
            {viewMode === 'rendered' ? 'View Raw README' : 'Back to Profile'}
          </button>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-[1120px] px-4 py-10 sm:px-8 sm:py-12">
        {viewMode === 'raw' ? (
          <section className="overflow-hidden rounded-xl border border-[#1c2638] bg-[#0a0f18]">
            <div className="flex items-center justify-between border-b border-[#1c2638] px-5 py-3 text-xs text-[#94a3b8]">
              <span className="font-mono tabular-nums">
                README.md · {rawReadme.split('\n').length} lines
              </span>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={handleCopyReadme}
                  className="inline-flex items-center gap-1.5 font-medium text-[#cbd5e1] transition-colors duration-150 hover:text-[#38bdf8] whitespace-nowrap shrink-0"
                >
                  {copiedReadme ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#38bdf8]" />
                      <span className="text-[#38bdf8]">Copied Markdown</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy Markdown</span>
                    </>
                  )}
                </button>
                <a
                  href="https://github.com/edison-manrique/edison-manrique"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-[#38bdf8] hover:underline whitespace-nowrap shrink-0"
                >
                  Open on GitHub
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
            <pre className="overflow-x-auto p-6 font-mono text-xs leading-relaxed text-[#e2e8f0]">
              <code>{rawReadme}</code>
            </pre>
          </section>
        ) : (
          <div className="space-y-16">
            {/* Hero Banner Section */}
            <section className="space-y-6">
              <div className="overflow-hidden rounded-2xl border border-[#1c2638] bg-[#05070b]">
                <img
                  src={bannerSvg}
                  alt="Edi Manrique - Systems Architect"
                  className="block w-full h-auto"
                />
              </div>

              <div className="flex flex-col items-start justify-between gap-4 border-b border-[#161f30] pb-6 sm:flex-row sm:items-center">
                <TypingBanner />
                <p className="text-xs font-medium tracking-wide text-[#94a3b8] tabular-nums">
                  Lima, Peru <span aria-hidden="true" className="mx-1.5 text-[#334155]">·</span>
                  High-Performance Systems{' '}
                  <span aria-hidden="true" className="mx-1.5 text-[#334155]">·</span>
                  Zero-Alloc &amp; Deterministic
                </p>
              </div>
            </section>

            {/* 01. About */}
            <section id="about" className="scroll-mt-24 space-y-6">
              <div className="space-y-2">
                <h2 className="font-display text-2xl font-bold tracking-tight text-[#f8fafc] sm:text-3xl [text-wrap:balance]">
                  01. About
                </h2>
                <p className="max-w-3xl text-[15px] leading-relaxed text-[#cbd5e1]">
                  I am a <strong className="font-semibold text-white">Systems Architect &amp; Low-Level Engineer</strong>{' '}
                  dedicated to building ultra-high-performance cryptographic engines, WebAssembly runtimes,
                  and edge-native intelligence.
                </p>
                <p className="max-w-3xl text-[15px] leading-relaxed text-[#94a3b8]">
                  My work focuses on eliminating runtime overhead through{' '}
                  <strong className="font-semibold text-[#e2e8f0]">zero-allocation memory architectures</strong>,{' '}
                  <strong className="font-semibold text-[#e2e8f0]">SIMD/WebGPU acceleration</strong>, and{' '}
                  <strong className="font-semibold text-[#e2e8f0]">deterministic computation</strong> across
                  decentralized protocols and modern systems. I leverage AI as a primary orchestrator for deep
                  technical infrastructure, system verification, and knowledge synthesis.
                </p>
              </div>

              <div className="overflow-hidden rounded-xl border border-[#1c2638] bg-[#0a0f18]">
                <div className="flex items-center justify-between border-b border-[#1c2638] px-5 py-2.5 text-xs text-[#64748b]">
                  <span className="font-mono font-medium text-[#94a3b8]">engineer.rs</span>
                  <button
                    type="button"
                    onClick={handleCopyRust}
                    className="inline-flex items-center gap-1.5 rounded px-2.5 py-1 text-[#94a3b8] transition-colors duration-150 hover:bg-[#131c2e] hover:text-[#f8fafc] whitespace-nowrap shrink-0"
                  >
                    {copiedRust ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-[#38bdf8]" />
                        <span className="text-[#38bdf8]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy snippet</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-[#e2e8f0] sm:text-[13px]">
                  <code>
                    <span className="text-[#7dd3fc]">struct</span>{' '}
                    <span className="text-[#f8fafc]">Engineer</span> {'{\n'}
                    {'    '}name: &amp;<span className="text-[#7dd3fc]">&apos;static</span>{' '}
                    <span className="text-[#38bdf8]">str</span>,{'\n'}
                    {'    '}location: &amp;<span className="text-[#7dd3fc]">&apos;static</span>{' '}
                    <span className="text-[#38bdf8]">str</span>,{'\n'}
                    {'    '}stack: [&amp;<span className="text-[#7dd3fc]">&apos;static</span>{' '}
                    <span className="text-[#38bdf8]">str</span>;{' '}
                    <span className="text-[#22d3ee]">5</span>],{'\n'}
                    {'    '}principles: [&amp;<span className="text-[#7dd3fc]">&apos;static</span>{' '}
                    <span className="text-[#38bdf8]">str</span>;{' '}
                    <span className="text-[#22d3ee]">3</span>],{'\n'}
                    {'}'}
                    {'\n\n'}
                    <span className="text-[#7dd3fc]">const</span>{' '}
                    <span className="text-[#38bdf8]">EDI</span>:{' '}
                    <span className="text-[#f8fafc]">Engineer</span> ={' '}
                    <span className="text-[#f8fafc]">Engineer</span> {'{\n'}
                    {'    '}name:{' '}
                    <span className="text-[#94a3b8]">&quot;Edison Manrique Chocce&quot;</span>,{'\n'}
                    {'    '}location: <span className="text-[#94a3b8]">&quot;Peru&quot;</span>,
                    {'\n'}
                    {'    '}stack: [<span className="text-[#94a3b8]">&quot;Rust&quot;</span>,{' '}
                    <span className="text-[#94a3b8]">&quot;Zig&quot;</span>,{' '}
                    <span className="text-[#94a3b8]">&quot;AssemblyScript&quot;</span>,{' '}
                    <span className="text-[#94a3b8]">&quot;Solidity&quot;</span>,{' '}
                    <span className="text-[#94a3b8]">&quot;TypeScript&quot;</span>],{'\n'}
                    {'    '}principles: [{'\n'}
                    {'        '}
                    <span className="text-[#94a3b8]">
                      &quot;Zero memory allocations in critical paths&quot;
                    </span>
                    ,{'\n'}
                    {'        '}
                    <span className="text-[#94a3b8]">
                      &quot;Deterministic cross-runtime isomorphism (Node/Bun/Deno/Browser)&quot;
                    </span>
                    ,{'\n'}
                    {'        '}
                    <span className="text-[#94a3b8]">
                      &quot;Rigorous verification against formal cryptographic vectors&quot;
                    </span>
                    ,{'\n'}
                    {'    '}],{'\n'}
                    {'};'}
                  </code>
                </pre>
              </div>
            </section>

            <hr className="border-[#161f30]" />

            {/* 02. Featured Flagship Projects */}
            <section id="projects" className="scroll-mt-24 space-y-6">
              <div className="space-y-1">
                <h2 className="font-display text-2xl font-bold tracking-tight text-[#f8fafc] sm:text-3xl [text-wrap:balance]">
                  02. Featured Flagship Projects
                </h2>
                <p className="text-sm text-[#94a3b8]">
                  Production cryptographic engines, neural edge inference, and protocol architecture.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {PROJECTS.map((project) => (
                  <div
                    key={project.title}
                    className="flex flex-col justify-between rounded-xl border border-[#1c2638] bg-[#0a0f18] p-6 transition-colors duration-150 hover:border-[#2a3954]"
                  >
                    <div className="space-y-3">
                      <p className="font-mono text-xs font-medium text-[#38bdf8] tabular-nums">
                        {project.metadata}
                      </p>
                      <h3 className="font-display text-xl font-semibold tracking-tight text-[#f8fafc]">
                        {project.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[#94a3b8]">
                        {project.description}
                        {project.codeNote ? (
                          <>
                            {' '}
                            <code className="rounded bg-[#131c2e] px-1.5 py-0.5 font-mono text-xs text-[#e2e8f0]">
                              {project.codeNote}
                            </code>
                            .
                          </>
                        ) : null}
                      </p>
                    </div>

                    {(project.repoUrl || project.demoUrl) && (
                      <div className="mt-6 flex flex-wrap items-center gap-5 border-t border-[#161f30] pt-4 text-xs font-semibold">
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-[#38bdf8] transition-colors duration-150 hover:text-[#7dd3fc] whitespace-nowrap shrink-0"
                          >
                            {project.demoLabel}
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        )}
                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-[#cbd5e1] transition-colors duration-150 hover:text-white whitespace-nowrap shrink-0"
                          >
                            Source Repository
                            <ExternalLink className="h-3.5 w-3.5 text-[#64748b]" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <hr className="border-[#161f30]" />

            {/* 03. Technical Stack & Tooling */}
            <section id="stack" className="scroll-mt-24 space-y-6">
              <div className="space-y-1">
                <h2 className="font-display text-2xl font-bold tracking-tight text-[#f8fafc] sm:text-3xl [text-wrap:balance]">
                  03. Technical Stack &amp; Tooling
                </h2>
                <p className="text-sm text-[#94a3b8]">
                  Core languages, runtimes, and verification tooling across systems and edge layers.
                </p>
              </div>

              <div className="overflow-x-auto rounded-xl border border-[#1c2638] bg-[#0a0f18]">
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-[#1c2638] bg-[#0e1522] text-xs font-semibold tracking-wide text-[#94a3b8]">
                      <th className="px-5 py-3.5">Domain</th>
                      <th className="px-5 py-3.5">Technologies</th>
                      <th className="px-5 py-3.5">Primary Focus</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#161f30]">
                    {STACK_ROWS.map((row) => (
                      <tr
                        key={row.domain}
                        className="transition-colors duration-150 hover:bg-[#0e1522]/60"
                      >
                        <td className="whitespace-nowrap px-5 py-4 font-display font-semibold text-[#f8fafc]">
                          {row.domain}
                        </td>
                        <td className="px-5 py-4 font-mono text-xs text-[#38bdf8] tabular-nums">
                          {row.technologies.join(' · ')}
                        </td>
                        <td className="px-5 py-4 text-sm text-[#94a3b8]">{row.focus}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <hr className="border-[#161f30]" />

            {/* 04. GitHub Analytics */}
            <section id="analytics" className="scroll-mt-24 space-y-6">
              <div className="space-y-1">
                <h2 className="font-display text-2xl font-bold tracking-tight text-[#f8fafc] sm:text-3xl [text-wrap:balance]">
                  04. GitHub Analytics &amp; Activity
                </h2>
                <p className="text-sm text-[#94a3b8]">
                  Live contribution metrics and language distribution from GitHub.
                </p>
              </div>

              <div className="space-y-5">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div className="flex items-center justify-center rounded-xl border border-[#1c2638] bg-[#0a0f18] p-4">
                    <StatsImage
                      src="https://github-readme-stats.vercel.app/api?username=edison-manrique&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0a0f18&title_color=38bdf8&icon_color=22d3ee&text_color=cbd5e1"
                      alt="Edi's GitHub Stats"
                      heightClass="h-[175px]"
                      fallbackTitle="GitHub Stats · @edison-manrique"
                      fallbackSubtitle="View live contribution metrics on GitHub"
                    />
                  </div>
                  <div className="flex items-center justify-center rounded-xl border border-[#1c2638] bg-[#0a0f18] p-4">
                    <StatsImage
                      src="https://github-readme-stats.vercel.app/api/top-langs/?username=edison-manrique&layout=compact&theme=tokyonight&hide_border=true&bg_color=0a0f18&title_color=38bdf8&text_color=cbd5e1"
                      alt="Top Languages"
                      heightClass="h-[175px]"
                      fallbackTitle="Top Languages"
                      fallbackSubtitle="Rust · Zig · AssemblyScript · Solidity · TypeScript"
                    />
                  </div>
                </div>
                <div className="flex justify-center rounded-xl border border-[#1c2638] bg-[#0a0f18] p-4">
                  <StatsImage
                    src="https://streak-stats.demolab.com?user=edison-manrique&theme=tokyonight&hide_border=true&background=0a0f18&ring=22d3ee&fire=38bdf8&currStreakLabel=38bdf8&sideNums=e2e8f0&dates=64748b"
                    alt="Streak Stats"
                    heightClass="h-[150px]"
                    fallbackTitle="Contribution Streak · @edison-manrique"
                    fallbackSubtitle="Open GitHub profile for activity graph"
                  />
                </div>
              </div>
            </section>

            <hr className="border-[#161f30]" />

            {/* 05. Engineering Philosophy */}
            <section id="philosophy" className="scroll-mt-24 space-y-8">
              <div className="space-y-4">
                <h2 className="font-display text-2xl font-bold tracking-tight text-[#f8fafc] sm:text-3xl [text-wrap:balance]">
                  05. Engineering Philosophy
                </h2>

                <blockquote className="rounded-xl border border-[#1c2638] bg-[#0a0f18] px-6 py-5 font-display text-lg font-medium italic text-[#e2e8f0] sm:text-xl">
                  &ldquo;Abstraction without performance penalty is art; performance without
                  correctness is vanity.&rdquo;
                </blockquote>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {PHILOSOPHY_ITEMS.map((item, idx) => (
                  <div
                    key={item.title}
                    className="space-y-2 border-t border-[#161f30] pt-4"
                  >
                    <p className="font-mono text-xs font-medium text-[#38bdf8] tabular-nums">
                      0{idx + 1}
                    </p>
                    <h3 className="font-display text-base font-semibold text-[#f8fafc]">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#94a3b8]">{item.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Footer / Connect */}
            <footer className="flex flex-col items-start justify-between gap-4 border-t border-[#161f30] pt-8 text-sm text-[#94a3b8] sm:flex-row sm:items-center">
              <p className="font-medium text-[#cbd5e1]">
                Edison Manrique Chocce · Systems Architecture &amp; Cryptography
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <a
                  href="https://github.com/edison-manrique"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-[#e2e8f0] transition-colors duration-150 hover:text-[#38bdf8] whitespace-nowrap shrink-0"
                >
                  GitHub (@edison-manrique)
                  <ExternalLink className="h-3.5 w-3.5 text-[#64748b]" />
                </a>
                <a
                  href="mailto:edison.manrique.chocce@gmail.com"
                  className="inline-flex items-center gap-1.5 font-medium text-[#38bdf8] transition-colors duration-150 hover:text-[#7dd3fc] whitespace-nowrap shrink-0"
                >
                  <Mail className="h-3.5 w-3.5" />
                  edison.manrique.chocce@gmail.com
                </a>
              </div>
            </footer>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
