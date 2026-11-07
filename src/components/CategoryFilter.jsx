const categories = ['All Events', 'Technical', 'Cultural', 'Sports', 'Workshops', 'Competitions'];

const CategoryFilter = ({ active, onSelect }) => {
  return (
    <div className="category-filters">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`filter-btn ${active === cat ? 'active' : ''}`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
