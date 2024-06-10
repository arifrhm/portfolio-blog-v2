// src/components/CourtSchedule.tsx
'use client';

interface CourtScheduleProps {
  courts: { id: number; name: string; timeslots: string[] }[];
  selectedSlots: { courtId: number; timeslot: string }[];
  onSlotClick: (courtId: number, timeslot: string) => void;
}

const CourtSchedule: React.FC<CourtScheduleProps> = ({ courts, selectedSlots, onSlotClick }) => {
  return (
    <div className="flex-1">
      {courts.map(court => (
        <div key={court.id} className="mb-4">
          <h2 className="text-xl font-bold mb-2">{court.name}</h2>
          <div className="grid grid-cols-3 gap-2">
            {court.timeslots.map(timeslot => {
              const isSelected = selectedSlots.some(
                slot => slot.courtId === court.id && slot.timeslot === timeslot
              );
              return (
                <button
                  key={timeslot}
                  onClick={() => onSlotClick(court.id, timeslot)}
                  className={`p-2 border ${isSelected ? 'bg-red-500 text-white' : 'bg-white'}`}
                >
                  {timeslot}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourtSchedule;
