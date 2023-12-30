import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import { Link } from 'react-router-dom';
import './StudyGroups.css';

const StudyGroups = () => {
  // Define dummyData at the beginning of the component
  const dummyData = [
    { id: 1, name: 'Math Enthusiasts', description: 'Study group for advanced math topics' },
    { id: 2, name: 'Programming Wizards', description: 'Coding and programming study group' },
    // Add more dummy data or fetch data from an API
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [studyGroupNotFound, setStudyGroupNotFound] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = () => {
    // Perform actual search (e.g., API call) and update searchResults state
    // For now, let's assume searchResults is an array of study groups
    // Replace this with your actual data fetching logic
    const dummyData = [
      { id: 1, name: 'Math Enthusiasts', description: 'Study group for advanced math topics' },
      { id: 2, name: 'Programming Wizards', description: 'Coding and programming study group' },
      // Add more dummy data or fetch data from an API
    ];

    const results = dummyData.filter(
      (group) =>
        group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        group.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(results);
    setStudyGroupNotFound(results.length === 0);
  };

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : dummyData.filter(
          (group) =>
            group.name.toLowerCase().includes(inputValue) ||
            group.description.toLowerCase().includes(inputValue)
        );
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onSuggestionSelected = (event, { suggestion }) => {
    setSearchQuery(suggestion.name);
    handleSearch();
  };

  const getSuggestionValue = (suggestion) => suggestion.name;

  const renderSuggestion = (suggestion) => (
    <div>
      {suggestion.name} - {suggestion.description}
    </div>
  );

  const inputProps = {
    placeholder: 'Search by interest or course',
    value: searchQuery,
    onChange: (event, { newValue }) => setSearchQuery(newValue),
  };

  return (
    <div className="study-groups-container">
      <div className="study-group-search-container">
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          onSuggestionSelected={onSuggestionSelected}
          inputProps={inputProps}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {studyGroupNotFound ? (
        <p>No study groups found. Create your own or try a different search.</p>
      ) : (
        <div className="study-group-list-container">
          <h2>Study Groups</h2>
          <ul>
            {searchResults.map((group) => (
              <li key={group.id}>
                <h3>{group.name}</h3>
                <p>{group.description}</p>
                <Link to={`/study-group/${group.id}`}>View Study Group</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StudyGroups;
