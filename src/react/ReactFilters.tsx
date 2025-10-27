import React from 'react';
import type { DayOption } from '../types/common';

const dayOptions: DayOption[] = [
    'All',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun',
];

export function ReactFilters({ selectedDays, onSelectDay }: {
    selectedDays: DayOption[];
    onSelectDay: (day: DayOption) => void;
}) {
    const isDaySelected = (day: DayOption) => selectedDays.includes(day);

    return (
        <div className="react-filters">
            <div className="react-filters-label">Filter peers available on:</div>
            <div className="react-filters-days">
                {dayOptions.map((day) => (
                    <div
                        key={day}
                        onClick={() => onSelectDay(day)}
                        className={`react-filters-day${isDaySelected(day) ? ' react-filters-day--selected' : ''}`}
                    >
                        {day}
                    </div>
                ))}
            </div>
        </div>
    );
}
