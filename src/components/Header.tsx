import React from "react";
import { memo } from "react";

interface HeaderProps {
  selectedDate: Date;
  onPrevDay: () => void;
  onNextDay: () => void;
  onToday: () => void;
}

const Header = ({
  selectedDate,
  onPrevDay,
  onNextDay,
  onToday,
}: HeaderProps) => {
  const formattedDate = selectedDate.toLocaleDateString("ko-KR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="sticky top-0 z-50 p-4 sm:p-6 md:p-8 border-b bg-gray-50 flex flex-col items-center">
      <h3 className="text-xs sm:text-sm font-semibold text-gray-500 tracking-widest">
        오늘은
      </h3>
      <div className="flex items-center justify-between mt-1 w-full">
        <button
          onClick={onPrevDay}
          className="text-2xl p-2 hover:bg-gray-200 rounded-full"
        >
          &lt;
        </button>
        <button onClick={onToday} className="p-2 hover:bg-gray-200 rounded-lg">
          <h1 className="text-xl sm:text-2xl font-bold text-blue-500 tracking-tight">
            🌞 {formattedDate}
          </h1>
        </button>

        <button
          onClick={onNextDay}
          className="text-2xl p-2 hover:bg-gray-200 rounded-full"
        >
          &gt;
        </button>
      </div>
      <p className="text-xxs sm:text-sm mt-1 text-gray-600 dark:text-gray-400">
        할 일은 짧고, 시간은 더 짧다 ⏳
      </p>
      <div className="h-1 mt-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full w-full max-w-xs"></div>
    </div>
  );
};

export default memo(Header);
