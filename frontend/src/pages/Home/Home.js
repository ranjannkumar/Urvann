import React, { useState, useContext, useEffect } from 'react';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import PlantDisplay from '../../components/PlantDisplay/PlantDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';
import { StoreContext } from '../../context/StoreContext';

const Home = () => {
  const [category, setCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const { fetchPlantList } = useContext(StoreContext);

  useEffect(() => {
    fetchPlantList(category, searchQuery);
  }, [category, searchQuery, fetchPlantList]);

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} setSearchQuery={setSearchQuery} />
      <PlantDisplay category={category} searchQuery={searchQuery} />
      <AppDownload />
    </div>
  );
};

export default Home;
