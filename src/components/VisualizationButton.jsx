const VisualizationButton = () => {
    const handleVisualization = () => {
      alert("Data visualization functionality will be implemented here.");
    };
  
    return (
      <section className="visualization-section">
        <button onClick={handleVisualization}>View Drug Sales Trends</button>
      </section>
    );
  };
  
  export default VisualizationButton;