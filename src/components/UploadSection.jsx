import { useState } from 'react';

const UploadSection = () => {
  const [extractedText, setExtractedText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://127.0.0.1:5000/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload image');
      }

      const data = await response.json();
      setExtractedText(data.text);
    } catch (error) {
      console.error('Error:', error);
      setExtractedText('Failed to extract text. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="upload-section">
      <h2>Upload Prescription</h2>
      <div className="upload-box">
        <input
          type="file"
          id="prescriptionUpload"
          accept="image/*"
          hidden
          onChange={handleUpload}
        />
        <label htmlFor="prescriptionUpload" className="upload-label">
          <span>Click to Upload Prescription Photo</span>
        </label>
      </div>
      {loading && <p>Processing image...</p>}
      {extractedText && (
        <div className="output-text">
          <h3>Extracted Text:</h3>
          <p>{extractedText}</p>
        </div>
      )}
    </section>
  );
};

export default UploadSection;