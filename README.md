<div align="center">

<!-- HIGH-PERFORMANCE VECTOR BANNER -->
<img src="./assets/banner.svg" width="100%" alt="Edi Manrique - Systems Architect" />

<p align="center">
  <a href="https://github.com/edison-manrique">
    <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=18&duration=3000&pause=1000&color=38BDF8&center=true&vCenter=true&width=640&lines=Zero-Allocation+Cryptographic+Engines;Bare-Metal+Performance+with+Zig+%26+Rust;WebAssembly+%26+Edge+AI+Infrastructure;EVM+Internals+%26+Protocol-Level+Architecture" alt="Typing SVG" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Location-Lima%2C%20Peru-090d16?style=for-the-badge&labelColor=05070b&color=1e293b" />
  <img src="https://img.shields.io/badge/Focus-High--Performance%20Systems-0284c7?style=for-the-badge&labelColor=05070b" />
  <img src="https://img.shields.io/badge/Architecture-Zero--Alloc%20%7C%20Deterministic-22d3ee?style=for-the-badge&labelColor=05070b" />
</p>

---

</div>

## 01. About

I am a **Systems Architect & Low-Level Engineer** dedicated to building ultra-high-performance cryptographic engines, WebAssembly runtimes, and edge-native intelligence.

My work focuses on eliminating runtime overhead through **zero-allocation memory architectures**, **SIMD/WebGPU acceleration**, and **deterministic computation** across decentralized protocols and modern systems. I leverage AI as a primary orchestrator for deep technical infrastructure, system verification, and knowledge synthesis.

```rust
struct Engineer {
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
};
```

---

## 02. Featured Flagship Projects

<table>
  <tr>
    <td width="50%" valign="top">
      <h3 align="center">blockchain-wasm</h3>
      <p align="center">
        <a href="https://github.com/edison-manrique/blockchain-wasm">
          <img src="https://img.shields.io/badge/WASM-Zero--Alloc-0284c7?style=flat-square&logo=webassembly&logoColor=white&labelColor=090d16" />
          <img src="https://img.shields.io/badge/Version-v4.0.0-38bdf8?style=flat-square&labelColor=090d16" />
        </a>
      </p>
      <p>Single-binary, zero-allocation WebAssembly cryptographic engine for Bitcoin & Ethereum wallets. Includes secp256k1, BIP-32/39/44, Schnorr (BIP-340), ECDSA, ECDH, Taproot, WIF, and addresses without any runtime heap allocation or <code>memory.grow</code>.</p>
      <p><a href="https://edison-manrique.github.io/blockchain-wasm/"><b>Live Interactive Playground →</b></a></p>
    </td>
    <td width="50%" valign="top">
      <h3 align="center">fast-tiny-tts</h3>
      <p align="center">
        <a href="https://github.com/edison-manrique/fast-tiny-tts">
          <img src="https://img.shields.io/badge/Edge%20AI-4.5M%20Params-0e7490?style=flat-square&labelColor=090d16" />
          <img src="https://img.shields.io/badge/WebGPU%20%7C%20ONNX-Active-22d3ee?style=flat-square&labelColor=090d16" />
        </a>
      </p>
      <p>Ultra-compact, real-time English Neural TTS (4.5M params, 24kHz) running 100% locally on CPU, mobile, and client browsers via ONNX, Pyodide, and Web Workers. Zero server round-trips with instant voice synthesis.</p>
      <p><a href="https://edison-manrique.github.io/fast-tiny-tts/"><b>Live Web Demo →</b></a></p>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3 align="center">Cryptographic WASM Suites</h3>
      <p align="center">
        <img src="https://img.shields.io/badge/2FA--WASM-TOTP%2FHOTP-0284c7?style=flat-square&labelColor=090d16" />
        <img src="https://img.shields.io/badge/AEAD--WASM-ChaCha20--Poly1305-0e7490?style=flat-square&labelColor=090d16" />
        <img src="https://img.shields.io/badge/SHA2--WASM-Hardware--Speed-1e293b?style=flat-square&labelColor=090d16" />
      </p>
      <p>Specialized low-level cryptographic building blocks: <b>2fa-wasm</b> (RFC-6238 TOTP/HOTP), <b>aead-wasm</b> (authenticated ciphers), and <b>sha2-wasm</b> for maximum hashing throughput in sandboxed environments.</p>
    </td>
    <td width="50%" valign="top">
      <h3 align="center">Web3 & Protocol Infrastructure</h3>
      <p align="center">
        <img src="https://img.shields.io/badge/Solidity-0.8.36-38bdf8?style=flat-square&logo=solidity&logoColor=white&labelColor=090d16" />
        <img src="https://img.shields.io/badge/EVM-Deep%20Internals-1e293b?style=flat-square&labelColor=090d16" />
      </p>
      <p>Protocol-level design, secure EVM smart contracts, gas-optimized state structures, and multi-chain execution layers spanning Bitcoin scripts, Taproot trees, and Ethereum rollups.</p>
    </td>
  </tr>
</table>

---

## 03. Technical Stack & Tooling

<div align="center">

| Domain | Technologies & Frameworks |
| :--- | :--- |
| **Low-Level & Systems** | ![Rust](https://img.shields.io/badge/Rust-090d16?style=for-the-badge&logo=rust&logoColor=dea584) ![Zig](https://img.shields.io/badge/Zig-090d16?style=for-the-badge&logo=zig&logoColor=f7a41d) ![WebAssembly](https://img.shields.io/badge/WebAssembly-090d16?style=for-the-badge&logo=webassembly&logoColor=a78bfa) ![AssemblyScript](https://img.shields.io/badge/AssemblyScript-090d16?style=for-the-badge&logo=typescript&logoColor=38bdf8) |
| **Blockchain & Web3** | ![Solidity](https://img.shields.io/badge/Solidity-090d16?style=for-the-badge&logo=solidity&logoColor=c084fc) ![Ethereum](https://img.shields.io/badge/Ethereum-090d16?style=for-the-badge&logo=ethereum&logoColor=94a3b8) ![Bitcoin](https://img.shields.io/badge/Bitcoin-090d16?style=for-the-badge&logo=bitcoin&logoColor=f7931a) ![Foundry](https://img.shields.io/badge/Foundry-090d16?style=for-the-badge&logoColor=e2e8f0) |
| **High-Performance Web** | ![TypeScript](https://img.shields.io/badge/TypeScript-090d16?style=for-the-badge&logo=typescript&logoColor=38bdf8) ![Bun](https://img.shields.io/badge/Bun-090d16?style=for-the-badge&logo=bun&logoColor=fbf0df) ![SolidJS](https://img.shields.io/badge/SolidJS-090d16?style=for-the-badge&logo=solid&logoColor=7dd3fc) ![Vite](https://img.shields.io/badge/Vite-090d16?style=for-the-badge&logo=vite&logoColor=a78bfa) |
| **Edge AI & Computing** | ![ONNX](https://img.shields.io/badge/ONNX%20Runtime-090d16?style=for-the-badge&logo=onnx&logoColor=38bdf8) ![WebGPU](https://img.shields.io/badge/WebGPU-090d16?style=for-the-badge&logoColor=22d3ee) ![Python](https://img.shields.io/badge/Python-090d16?style=for-the-badge&logo=python&logoColor=fbbf24) |

</div>

---

## 04. GitHub Analytics & Activity

<div align="center">

<table border="0">
  <tr>
    <td align="center">
      <img src="https://github-readme-stats.vercel.app/api?username=edison-manrique&show_icons=true&theme=tokyonight&hide_border=true&bg_color=05070b&title_color=38bdf8&icon_color=22d3ee&text_color=cbd5e1" height="175" alt="Edi's GitHub Stats" />
    </td>
    <td align="center">
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=edison-manrique&layout=compact&theme=tokyonight&hide_border=true&bg_color=05070b&title_color=38bdf8&text_color=cbd5e1" height="175" alt="Top Languages" />
    </td>
  </tr>
  <tr>
    <td colspan="2" align="center">
      <img src="https://streak-stats.demolab.com?user=edison-manrique&theme=tokyonight&hide_border=true&background=05070b&ring=22d3ee&fire=38bdf8&currStreakLabel=38bdf8&sideNums=e2e8f0&dates=64748b" height="150" alt="Streak Stats" />
    </td>
  </tr>
</table>

</div>

---

## 05. Engineering Philosophy

> *"Abstraction without performance penalty is art; performance without correctness is vanity."*

- **Zero-Allocation Guarantee:** Critical algorithms avoid dynamic heap allocation, preventing GC stutter and unpredictability in latency-sensitive applications.
- **Mathematical Rigor:** Cryptographic primitives are verified against BIP test vectors, golden Python implementations, and algebraic curve constants.
- **Isomorphic Runtime Design:** Every library is engineered from day zero to run identically on Node.js, Bun, Deno, and modern browsers without transpiler bloat.
- **Intelligence-Driven Systems:** Leveraging advanced LLM agents and neuro-symbolic reasoning to synthesize complex codebases and perform continuous verification.

---

<div align="center">

### Connect & Collaborate

[![GitHub Followers](https://img.shields.io/github/followers/edison-manrique?label=Follow%20%40edison-manrique&style=social)](https://github.com/edison-manrique)
[![Gmail](https://img.shields.io/badge/Email-edison.manrique.chocce%40gmail.com-090d16?style=flat-square&logo=gmail&logoColor=38bdf8&color=1e293b)](mailto:edison.manrique.chocce@gmail.com)

</div>
