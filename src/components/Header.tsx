import { memo } from "react";

const Header = () => {
  const today = new Date().toLocaleDateString("ko-KR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="sticky top-0 z-50 p-4 sm:p-6 md:p-8 border-b bg-gray-50 dark:bg-neutral-900">
      <h3 className="text-xs sm:text-sm font-semibold text-gray-500 tracking-widest">
        오늘은
      </h3>
      <h1 className="text-xl sm:text-2xl font-bold text-blue-500 mt-1 tracking-tight">
        🌞 {today}
      </h1>
      <p className="text-xxs sm:text-sm mt-1 text-gray-600 dark:text-gray-400">
        할 일은 짧고, 시간은 더 짧다 ⏳
      </p>
      <div className="h-1 mt-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
    </div>
  );
};

export default memo(Header);
