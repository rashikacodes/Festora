import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchX } from 'lucide-react';
import EventCard from '../components/EventCard';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import events from '../data/events';

const ExploreEvents = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All Events';
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState(initialCategory);

  useEffect(() => {
    const catFromQuery = searchParams.get('category');
    if (catFromQuery) {
      setCategory(catFromQuery);
    }
  }, [searchParams]);

  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
    if (selectedCategory === 'All Events') {
      setSearchParams({});
    } else {
      setSearchParams({ category: selectedCategory });
    }
  };

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchCategory = category === 'All Events' || event.category === category;
      const query = search.toLowerCase().trim();
      const matchSearch =
        !query ||
        event.title.toLowerCase().includes(query) ||
        event.venue.toLowerCase().includes(query) ||
        event.shortDescription.toLowerCase().includes(query) ||
        event.category.toLowerCase().includes(query);
      return matchCategory && matchSearch;
    });
  }, [search, category]);

  return (
    <div className="event-detail-page">
      <div className="container">
        <div className="page-header" style={{ paddingTop: '20px' }}>
          <h1>Explore <span className="gradient-text">Events</span></h1>
          <p>Discover and register for exciting campus events</p>
        </div>

        <div className="search-filter-bar">
          <SearchBar value={search} onChange={setSearch} />
          <CategoryFilter active={category} onSelect={handleCategorySelect} />
        </div>

        {filteredEvents.length > 0 ? (
          <div className="events-grid">
            {filteredEvents.map((event, index) => (
              <EventCard key={event.id} event={event} style={{ animationDelay: `${index * 0.05}s` }} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-state-icon">
              <SearchX size={36} />
            </div>
            <h3>No events found</h3>
            <p>Try a different search term or category</p>
            <button className="btn btn-secondary" onClick={() => { setSearch(''); handleCategorySelect('All Events'); }}>
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExploreEvents;
