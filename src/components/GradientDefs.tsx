export default function GradientDefs() {
  return (
    <svg width="0" height="0" aria-hidden="true" style={{ position: "absolute" }}>
      <defs>
        <linearGradient id="lmMint" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#34d399" />
          <stop offset="1" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="lmChrome" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f8fafc" />
          <stop offset=".5" stopColor="#94a3b8" />
          <stop offset="1" stopColor="#e2e8f0" />
        </linearGradient>
        <linearGradient id="sparkGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#2563EB" />
          <stop offset="1" stopColor="#10B981" />
        </linearGradient>
        <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="rgba(16,185,129,.28)" />
          <stop offset="1" stopColor="rgba(16,185,129,0)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
