import { useContext, useEffect } from 'react';
import AppDownload from '../../components/AppDownload/AppDownload';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import Header from '../../components/Header/Header';
import PlantDisplay from '../../components/PlantDisplay/PlantDisplay';
import { StoreContext } from '../../context/StoreContext';

const Home = ({ category, setCategory, searchQuery, setSearchQuery }) => {
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