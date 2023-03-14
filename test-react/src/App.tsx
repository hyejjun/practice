import { useState } from 'react';

import TextField from './component/TextField';
import Products from './component/Products';

export default function App() {
  const [filteredText, setFilteredText] = useState<string>('');

  return (
    <div>
      <TextField
        label="검색"
        placeholder="검색어를 입력하세요..."
        text={filteredText}
        setText={setFilteredText}
      />
      <Products />
    </div>
  );
}
