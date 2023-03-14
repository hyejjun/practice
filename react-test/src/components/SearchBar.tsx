import { useEffect, useState } from 'react';
import CheckBoxField from './CheckBoxField';
import TimerControl from './Timer';

export default function SearchBar() {
  const [search, setSearch] = useState<string>('');
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);
  };
  return (
    <div className="search-bar">
      <TimerControl />
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleChange}
        />
      </div>
      <CheckBoxField label="Only show products in stock" />
    </div>
  );
}
