import { useState } from 'react';

export default function CafeForm() {
  const [form, setForm] = useState({
    name: '',
    address: '',
    latitude: '',
    longitude: '',
    hasWifi: false,
    hasPower: false,
    ambience: 'normal',
    audienceAge: 'mixed',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('http://localhost:8080/cafes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        latitude: parseFloat(form.latitude),
        longitude: parseFloat(form.longitude),
      }),
    });
    if (res.ok) {
      alert('カフェが登録されました！');
      setForm({
        name: '',
        address: '',
        latitude: '',
        longitude: '',
        hasWifi: false,
        hasPower: false,
        ambience: 'normal',
        audienceAge: 'mixed',
      });
    } else {
      alert('登録に失敗しました');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>新しいカフェを投稿</h2>
      <input name="name" value={form.name} onChange={handleChange} placeholder="カフェ名" required />
      <input name="address" value={form.address} onChange={handleChange} placeholder="住所" required />
      <input name="latitude" value={form.latitude} onChange={handleChange} placeholder="緯度" required />
      <input name="longitude" value={form.longitude} onChange={handleChange} placeholder="経度" required />
      <label>
        <input type="checkbox" name="hasWifi" checked={form.hasWifi} onChange={handleChange} />
        Wi-Fiあり
      </label>
      <label>
        <input type="checkbox" name="hasPower" checked={form.hasPower} onChange={handleChange} />
        コンセントあり
      </label>
      <label>
        雰囲気:
        <select name="ambience" value={form.ambience} onChange={handleChange}>
          <option value="quiet">静か</option>
          <option value="normal">普通</option>
          <option value="lively">賑やか</option>
        </select>
      </label>
      <label>
        客層:
        <select name="audienceAge" value={form.audienceAge} onChange={handleChange}>
          <option value="young">若め</option>
          <option value="mixed">様々</option>
          <option value="elderly">年配</option>
        </select>
      </label>
      <button type="submit">投稿</button>
    </form>
  );
}
