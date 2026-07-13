export default function LogoMark({ size = 36, hq = false }: { size?: number; hq?: boolean }) {
  return (
    <svg className="mark" width={size} height={size} viewBox="0 0 120 120" aria-hidden="true">
      <rect x="14" y="18" width="16" height="76" rx="3" fill="url(#lmMint)" />
      <rect x="14" y="82" width="58" height="12" rx="3" fill="url(#lmMint)" />
      <path
        d="M40 88 V26 h13 l14 30 14-30 h13 v62 h-13 V52 l-14 28 -14-28 v36 z"
        fill="url(#lmChrome)"
      />
      {hq && (
        <text
          x="98" y="100" textAnchor="end"
          fontFamily="var(--font-d)" fontWeight="700" fontSize="19" fill="#cbd5e1"
        >
          HQ
        </text>
      )}
    </svg>
  );
}
