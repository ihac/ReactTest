import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-zinc-950 px-6 py-16 text-zinc-100">
      <div className="mb-10 flex items-center gap-8">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img
            src={viteLogo}
            alt="Vite"
            className="h-16 w-16 transition-transform hover:scale-110"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            alt="React"
            className="h-16 w-16 animate-[spin_20s_linear_infinite] transition-transform hover:scale-110"
          />
        </a>
      </div>·

      <h1 className="mb-3 text-4xl font-semibold tracking-tight sm:text-5xl">
        React + TypeScript + Vite
      </h1>
      <p className="mb-8 max-w-md text-center text-zinc-400">
        Tailwind CSS is configured. Edit{' '}
        <code className="rounded bg-zinc-800 px-1.5 py-0.5 font-mono text-sm text-violet-300">
          src/App.tsx
        </code>{' '}
        and save to test HMR.
      </p>

      <button
        type="button"
        onClick={() => setCount((c) => c + 1)}
        className="cursor-pointer rounded-lg border border-violet-500/50 bg-violet-500/10 px-5 py-2.5 font-medium text-violet-200 transition-colors hover:border-violet-400 hover:bg-violet-500/20"
      >
        Count is {count}
      </button>

      <p className="mt-12 text-sm text-zinc-500">
        Ready to deploy on{' '}
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noreferrer"
          className="text-zinc-300 underline-offset-4 hover:underline"
        >
          Vercel
        </a>
      </p>
    </div>
  )
}

export default App
