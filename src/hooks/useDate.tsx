import { useState, useCallback } from "react";

export function useDate() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const onPrevDay = useCallback(() => {
    const prevDate = new Date(selectedDate);
    prevDate.setDate(prevDate.getDate() - 1);
    setSelectedDate(prevDate);
  }, [selectedDate]);

  const onNextDay = useCallback(() => {
    const nextDate = new Date(selectedDate);
    nextDate.setDate(selectedDate.getDate() + 1);
    setSelectedDate(nextDate);
  }, [selectedDate]);

  const onToday = useCallback(() => {
    setSelectedDate(new Date());
  }, []);

  const onSelectDate = useCallback((date: Date | null) => {
    if (date) {
      setSelectedDate(date);
    }
  }, []);
  return { selectedDate, onPrevDay, onNextDay, onToday, onSelectDate };
}
