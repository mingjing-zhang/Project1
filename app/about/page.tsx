import Image from "next/image";

const skills = [
  "Bitcoin",
  "Rust",
  "Python",
  "AI-assisted development",
  "Technical writing",
];

export default function About() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <div className="flex items-center gap-6">
        <Image
          src="/aaronzhang.png"
          alt="Aaron Zhang"
          width={80}
          height={80}
          className="h-20 w-20 shrink-0 rounded-full object-cover"
          priority
        />
        <div>
          <h1 className="text-4xl font-semibold tracking-tight">About</h1>
          <p className="mt-1 text-sm text-zinc-500">
            Aaron Zhang · Bitcoin engineer · CSTU fullstack student
          </p>
        </div>
      </div>

      <div className="mt-10 space-y-5 text-lg text-zinc-700">
        <p>
          I&apos;m a Bitcoin Layer 1 engineer with a finance-to-engineering
          background. After years in capital markets I moved into protocol
          work full-time, focusing on Bitcoin&apos;s Protocol research.
          I&apos;m an{" "}
          <a
            href="https://opensats.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-zinc-400 underline-offset-4 transition-colors hover:text-zinc-900"
          >
            OpenSats
          </a>{" "}
          grantee and the Asia Partner of{" "}
          <a
            href="https://chaincode.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-zinc-400 underline-offset-4 transition-colors hover:text-zinc-900"
          >
            Chain Code Labs
          </a>{" "}
          BOSS challenge.
        </p>
        <p>
          Outside of code I read and write a fair amount — both feel like the
          same craft to me.
        </p>
      </div>

      <h2 className="mt-16 text-2xl font-semibold tracking-tight">
        Currently focused on
      </h2>
      <ul className="mt-6 space-y-3 text-zinc-700">
        <li className="flex gap-3">
          <span className="text-zinc-400">→</span>
          <span>
            Open-source Taproot and RGB tooling under my OpenSats grant.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-zinc-400">→</span>
          <span>
            Modern fullstack web development — Next.js, React, TypeScript,
            and AI-assisted workflows.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-zinc-400">→</span>
          <span>
            Writing about Bitcoin Layer 1 — protocol design, script-path
            applications, and developer ergonomics.
          </span>
        </li>
      </ul>

      <h2 className="mt-16 text-2xl font-semibold tracking-tight">
        What I work with
      </h2>
      <ul className="mt-6 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full bg-zinc-100 px-4 py-2 text-sm text-zinc-700"
          >
            {skill}
          </li>
        ))}
      </ul>

      <h2 className="mt-16 text-2xl font-semibold tracking-tight">
        Get in touch
      </h2>
      <p className="mt-4 text-zinc-700">
        The fastest way to reach me is through GitHub.
      </p>
      <a
        href="https://github.com/aaron-recompile"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block text-zinc-900 underline decoration-zinc-400 underline-offset-4 transition-colors hover:decoration-zinc-900"
      >
        github.com/aaron-recompile
      </a>
    </section>
  );
}
