import { useEffect, useState } from 'react';
import { fetchCafes } from '../api/cafes';
import { Cafe } from '../types/cafe';

export default function CafeList() {
  const [cafes, setCafes] = useState<Cafe[]>([]);

  useEffect(() => {
    const load = async () => {
      try {
        console.log('Fetching cafes...');
        const data = await fetchCafes();
        console.log('Fetched data:', data);
        setCafes(data);
      } catch (error) {
        console.error('Failed to fetch cafes:', error);
      }
    };
    load();
  }, []);

  return (
    <div>
      <h2>Cafe List</h2>
      {cafes.length === 0 ? (
        <p>Loading cafes...</p>
      ) : (
        <ul>
          {cafes.map((cafe) => (
            <li key={cafe.ID}>
              <strong>{cafe.Name}</strong><br />
              Address: {cafe.Address}<br />
              Location: ({cafe.Latitude}, {cafe.Longitude})
              Wi-fi: {cafe.HasWifi ? "Yes" : "No"}<br />
              Power: {cafe.HasPower ? "Yes" : "No"}<br />
              Ambience: {cafe.Ambience}<br />
              Ambience: {cafe.AudienceAge}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
