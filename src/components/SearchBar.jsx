import { Search } from 'lucide-react';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="search-wrapper">
      <Search />
      <input
        type="text"
        className="search-input"
        placeholder="Search events by name, venue, or description..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
