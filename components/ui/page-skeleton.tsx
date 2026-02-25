/**
 * Reusable page skeleton / loading placeholder.
 * Renders a header shimmer, stat cards, and content blocks that match the
 * overall layout pattern used across every page in the portal.
 */
export function PageSkeleton({
  statCards = 4,
  rows = 2,
}: {
  /** Number of stat‑card placeholders to show (default 4) */
  statCards?: number;
  /** Number of content-block rows (default 2) */
  rows?: number;
}) {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header shimmer */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="space-y-2">
          <div className="h-7 w-40 rounded-lg animate-shimmer" />
          <div className="h-4 w-64 rounded-md animate-shimmer" />
        </div>
        <div className="h-10 w-32 rounded-lg animate-shimmer" />
      </div>

      {/* Stat cards */}
      {statCards > 0 && (
        <div
          className="grid gap-3"
          style={{
            gridTemplateColumns: `repeat(${Math.min(statCards, 4)}, minmax(0, 1fr))`,
          }}
        >
          {Array.from({ length: statCards }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl border border-[#222] bg-[#111] p-4 flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-lg animate-shimmer shrink-0" />
              <div className="space-y-1.5 flex-1">
                <div className="h-3 w-16 rounded animate-shimmer" />
                <div className="h-5 w-12 rounded animate-shimmer" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Content rows */}
      {Array.from({ length: rows }).map((_, i) => (
        <div
          key={i}
          className="rounded-xl border border-[#222] bg-[#111] p-6 space-y-4"
        >
          <div className="h-4 w-32 rounded animate-shimmer" />
          <div className="space-y-3">
            {[100, 85, 92, 70, 88].map((w, j) => (
              <div
                key={j}
                className="h-3 rounded animate-shimmer"
                style={{ width: `${w}%` }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
