import Header from '../components/Header';
import UploadSection from '../components/UploadSection';
import PrescriptionOutput from '../components/PrescriptionOutput';
import VisualizationButton from '../components/VisualizationButton';

const Home = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <UploadSection />
        <PrescriptionOutput />
        <VisualizationButton />
      </main>
    </div>
  );
};

export default Home;