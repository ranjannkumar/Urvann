import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import PlantDisplay from '../../components/PlantDisplay/PlantDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';
import { StoreContext } from '../../context/StoreContext';

// Home component now receives props for category and searchQuery
const Home = ({ category, setCategory, searchQuery, setSearchQuery }) => {
  const { fetchPlantList } = useContext(StoreContext);

  // The useEffect hook uses the props directly
  useEffect(() => {
    fetchPlantList(category, searchQuery);
  }, [category, searchQuery, fetchPlantList]);

  return (
    <div>
      <Header />
      {/* Pass the state to ExploreMenu and setSearchQuery to handle interactions */}
      <ExploreMenu category={category} setCategory={setCategory} setSearchQuery={setSearchQuery} />
      <PlantDisplay category={category} searchQuery={searchQuery} />
      <AppDownload />
    </div>
  );
};

export default Home;