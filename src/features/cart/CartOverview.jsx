import { useEffect, useMemo, useState } from "react";

function CartOverview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentTime = new Date().toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  const statuses = useMemo(
    () => [
      {
        title: "Average delivery right now",
        highlight: "17 min",
        detail: "Kitchen is on a roll – 94% of orders on time.",
      },
      {
        title: "Next courier departure",
        highlight: "in 6 min",
        detail: "Rider Luca just checked in with a warm oven bag.",
      },
      {
        title: "Fresh batches out of the oven",
        highlight: "every 4 min",
        detail: "Margherita & Diablo are today’s most popular pies.",
      },
    ],
    [],
  );

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((idx) => (idx + 1) % statuses.length);
    }, 6000);
    return () => clearInterval(id);
  }, [statuses.length]);

  const status = statuses[activeIndex];

  return (
    <div className="flex flex-col gap-2 bg-stone-900/95 px-3 py-3 text-sm text-stone-100 sm:flex-row sm:items-center sm:justify-between sm:px-4 sm:text-base">
      <div className="space-y-0.5">
        <p className="text-[0.65rem] font-semibold tracking-[0.3em] text-yellow-400 uppercase">
          Delivery status · {currentTime}
        </p>
        <p className="text-lg font-semibold text-yellow-100">{status.title}</p>
        <p className="text-xs text-stone-300">{status.detail}</p>
      </div>

      <div className="rounded-xl border border-yellow-400/50 bg-yellow-200/5 px-4 py-2 text-center shadow-inner">
        <p className="text-[0.6rem] tracking-[0.35em] text-yellow-300 uppercase">
          Highlight
        </p>
        <p className="text-lg font-bold text-yellow-100">{status.highlight}</p>
      </div>
    </div>
  );
}

export default CartOverview;
