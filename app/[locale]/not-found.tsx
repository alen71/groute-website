import { Link } from "@/i18n/navigation";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-6 py-32 text-center">
      <h1 className="text-5xl font-semibold tracking-tight">404</h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        Page not found.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900"
      >
        Go home
      </Link>
    </section>
  );
}
