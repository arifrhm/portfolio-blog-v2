// src/components/Summary.tsx
'use client';

interface SummaryProps {
  selectedSlots: { courtId: number; timeslot: string }[];
  onDeleteClick: (courtId: number, timeslot: string) => void;
}

const Summary: React.FC<SummaryProps> = ({ selectedSlots, onDeleteClick }) => {
  return (
    <div className="flex-1 p-4 border-l">
      <h2 className="text-xl font-bold mb-4">Summary</h2>
      <ul>
        {selectedSlots.map(slot => (
          <li key={`${slot.courtId}-${slot.timeslot}`} className="mb-2">
            Lapangan {slot.courtId} - {slot.timeslot}
            <button
              onClick={() => onDeleteClick(slot.courtId, slot.timeslot)}
              className="ml-4 text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Summary;
