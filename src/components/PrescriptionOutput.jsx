const PrescriptionOutput = () => {
    return (
      <section className="output-section">
        <h2>Prescription Details</h2>
        <div id="prescriptionOutput">
          <p><strong>Name:</strong> <span id="patientName">-</span></p>
          <p><strong>Dosage:</strong> <span id="dosage">-</span></p>
        </div>
      </section>
    );
  };
  
  export default PrescriptionOutput;