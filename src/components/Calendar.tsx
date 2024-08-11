// import React, { useState } from 'react';
// import { Calendar } from 'primereact/calendar';
// import dayjs from 'dayjs';
// import isBetween from 'dayjs/plugin/isBetween';
// import './Calendar.css';

// dayjs.extend(isBetween);

// interface PeriodDetails {
//   start: Date;
//   end: Date;
//   cycle_time: number;
//   next_cycle: number;
// }

// const CalendarComponent = () => {
//   const currentDate = dayjs();
//   const [periodDetails, setPeriodDetails] = useState<PeriodDetails>({
//     start: dayjs('5 July 2024').toDate(),
//     end: dayjs('5 July 2024').add(4, 'day').toDate(),
//     cycle_time: 4,
//     next_cycle: 28,
//   });

//   const [today, setToday] = useState<any>(currentDate.toDate());
//   const [selectedDate, setSelectedDate] = useState<Date | null>(null);

//   const calculateCyclePeriods = (date: dayjs.Dayjs) => {
//     const cycles = [];
//     let start = dayjs(periodDetails.start);
//     let end = start.add(periodDetails.cycle_time, 'day');

//     while (start.isBefore(date.endOf('month').add(4, 'month'))) {
//       cycles.push({ start: start.toDate(), end: end.toDate() });
//       start = start.add(periodDetails.next_cycle, 'day');
//       end = end.add(periodDetails.next_cycle, 'day');
//     }
//     while (start.isAfter(date.endOf('month').subtract(4, 'month'))) {
//       start = start.subtract(periodDetails.next_cycle, 'day');
//       end = start.add(periodDetails.cycle_time, 'day');
//       cycles.push({ start: start.toDate(), end: end.toDate() });
//     }

//     return cycles;
//   };

//   const cycles = calculateCyclePeriods(currentDate);

//   const isPeriodDay = (date: {
//     year: number;
//     month: number;
//     day: number | undefined;
//   }) => {
//     const currentDate = new Date(date.year, date.month, date.day);
//     return cycles.some((cycle) =>
//       dayjs(currentDate).isBetween(
//         dayjs(cycle.start),
//         dayjs(cycle.end),
//         null,
//         '[]'
//       )
//     );
//   };

//   const getCycleClass = (date: {
//     year: number;
//     month: number;
//     day: number | undefined;
//   }) => {
//     const currentDate = new Date(date.year, date.month, date.day);
//     const isPeriod = isPeriodDay(date);
//     const isActiveCycle = dayjs(currentDate).isBetween(
//       dayjs(periodDetails.start).subtract(1, 'day'),
//       dayjs(periodDetails.end).add(1, 'day')
//     );

//     if (isActiveCycle) {
//       return 'bg-red-200 rounded-full text-black font-medium w-10 h-10 justify-center items-center flex font-sans';
//     } else if (isPeriod && !isActiveCycle) {
//       return 'border border-red-300 border-dotted border-2 rounded-full w-10 h-10 justify-center items-center flex font-sans';
//     } else {
//       return 'font-sans';
//     }
//   };

//   const dayTemplate = (date: any) => {
//     const dayClass = getCycleClass(date);
//     return <div className={dayClass}>{date.day}</div>;
//   };

//   const handleDateSelect = (e: any) => {
//     setSelectedDate(e.value);
//   };

//   const handleLogPeriods = () => {
//     if (selectedDate) {
//       const newStart = dayjs(selectedDate);
//       const newEnd = newStart.add(periodDetails.cycle_time, 'day');
//       setPeriodDetails({
//         ...periodDetails,
//         start: newStart.toDate(),
//         end: newEnd.toDate(),
//       });
//     }
//   };

//   return (
//     <div className="w-full flex-col flex justify-center items-center gap-10">
//       <Calendar
//         value={today}
//         onChange={(e) => setToday(e.value)}
//         inline
//         className="w-2/5"
//         dateTemplate={dayTemplate}
//         readOnlyInput
//         onSelect={handleDateSelect}
//       />
//       <div
//         className="px-5 py-3 rounded-xl bg-violet-300 w-max font-medium hover:bg-violet-400 hover:cursor-pointer"
//         onClick={handleLogPeriods}
//       >
//         Log Periods
//       </div>
//     </div>
//   );
// };

// export default CalendarComponent;



import React, { useState, useEffect } from 'react';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import './Calendar.css';
import Layout from './Layout';

dayjs.extend(isBetween);

interface PeriodDetails {
  start: Date;
  cycleDuration: number;
  cycleLength: number;
}

const CalendarComponent: React.FC = () => {
  const [periodDetails, setPeriodDetails] = useState<PeriodDetails>({
    start: new Date(),
    cycleDuration: 6,
    cycleLength: 29,
  });
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [cycles, setCycles] = useState<{ start: Date; end: Date; ovulation: Date }[]>([]);

  const cycleDurationOptions = Array.from({ length: 6}, (_, i) => ({
    label: `${i + 1} Days`,
    value: i + 1,
  }));

  const cycleLengthOptions = Array.from({ length: 18 }, (_, i) => ({
    label: `${i + 28} Days`,
    value: i + 28,
  }));

  useEffect(() => {
    if (selectedDate) {
      calculateCycles();
    }
  }, [selectedDate, periodDetails.cycleDuration, periodDetails.cycleLength]);

  const calculateCycles = () => {
    if (!selectedDate) return;

    const newCycles = [];
    let currentStart = dayjs(selectedDate);

    for (let i = 0; i < 12; i++) {
      const cycleEnd = currentStart.add(periodDetails.cycleDuration - 1, 'day');
      const ovulationDay = currentStart.add(periodDetails.cycleLength - 14, 'day');
      
      newCycles.push({
        start: currentStart.toDate(),
        end: cycleEnd.toDate(),
        ovulation: ovulationDay.toDate(),
      });

      currentStart = currentStart.add(periodDetails.cycleLength, 'day');
    }

    setCycles(newCycles);
  };

  const handleDateSelect = (e: any) => {
    setSelectedDate(e.value);
    setPeriodDetails({ ...periodDetails, start: e.value });
    setCurrentMonth(dayjs(e.value));
  };

  const handleCycleDurationChange = (e: any) => {
    setPeriodDetails({ ...periodDetails, cycleDuration: e.value });
  };

  const handleCycleLengthChange = (e: any) => {
    setPeriodDetails({ ...periodDetails, cycleLength: e.value });
  };

  const dayTemplate = (date: any) => {
    const currentDate = dayjs(new Date(date.year, date.month, date.day));
    const isPeriodDay = cycles.some(cycle => 
      currentDate.isBetween(dayjs(cycle.start), dayjs(cycle.end), null, '[]')
    );
    const isOvulationDay = cycles.some(cycle => dayjs(cycle.ovulation).isSame(currentDate, 'day'));

    let className = 'custom-day';
    if (isPeriodDay) {
      className += ' period-day';
    } else if (isOvulationDay) {
      className += ' ovulation-day';
    }

    return <div className={className}>{date.day}</div>;
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentMonth(prev => direction === 'prev' ? prev.subtract(1, 'month') : prev.add(1, 'month'));
  };

  return (
    <div className="calendar-container">
      <h1>Period Cycle Tracker</h1>
      <div className="calendar-controls">
        <div className="calendar-navigation">
          <Button icon="pi pi-chevron-left" onClick={() => navigateMonth('prev')} />
          <h2>{currentMonth.format('MMMM YYYY')}</h2>
          <Button icon="pi pi-chevron-right" onClick={() => navigateMonth('next')} />
        </div>
        <Calendar
          value={selectedDate}
          onChange={handleDateSelect}
          inline
          dateTemplate={dayTemplate}
          monthNavigator={false}
          yearNavigator={false}
          view="date"
          viewDate={currentMonth.toDate()}
        />
        <div className="cycle-settings">
          <h3>Cycle Settings</h3>
          <label>Period Duration</label>
          <Dropdown
            value={periodDetails.cycleDuration}
            options={cycleDurationOptions}
            onChange={handleCycleDurationChange}
            placeholder="Select Period Duration"
          />
          <label>Cycle Length</label>
          <Dropdown
            value={periodDetails.cycleLength}
            options={cycleLengthOptions}
            onChange={handleCycleLengthChange}
            placeholder="Select Cycle Length"
          />
        </div>
      </div>
      <div className="legend">
        <div className="legend-item">
          <span className="legend-color period-day"></span>
          <span>Period Days</span>
        </div>
        <div className="legend-item">
          <span className="legend-color ovulation-day"></span>
          <span>Approximate Ovulation Day</span>
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;