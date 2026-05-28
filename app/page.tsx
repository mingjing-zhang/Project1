import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
        <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
          Bitcoin engineer · OpenSats grantee · Author
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
          Aaron Zhang.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-600 sm:text-xl">
          I build at the Bitcoin protocol layer — Taproot, Covenant, RGB, and
          the tooling around them.
        </p>
        <div className="mt-10 flex flex-wrap gap-3 text-sm">
          <Link
            href="/projects"
            className="rounded-full bg-zinc-900 px-5 py-2.5 text-white transition-colors hover:bg-zinc-700"
          >
            View my work
          </Link>
          <Link
            href="/about"
            className="rounded-full border border-zinc-300 px-5 py-2.5 text-zinc-700 transition-colors hover:bg-zinc-100"
          >
            About me
          </Link>
          <a
            href="https://github.com/aaron-recompile"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-300 px-5 py-2.5 text-zinc-700 transition-colors hover:bg-zinc-100"
          >
            GitHub
          </a>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
            Featured publication
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            <em>Mastering Taproot</em>
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-600">
            A deep technical reference on Bitcoin&apos;s Taproot soft fork —
            script paths, key paths, Schnorr signatures, MAST, and the
            developer tooling around them. Written for protocol engineers
            building on Bitcoin Layer 1.
          </p>
          <a
            href="https://leanpub.com/mastering-taproot"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block text-sm font-medium text-zinc-900 underline decoration-zinc-400 underline-offset-4 transition-colors hover:decoration-zinc-900"
          >
            Read the book →
          </a>
        </div>
      </section>
    </>
  );
}
