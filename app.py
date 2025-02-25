from flask import Flask, request, jsonify
import cv2
import pytesseract
import os

app = Flask(__name__)


pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"


UPLOAD_FOLDER = 'uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

@app.route('/upload', methods=['POST'])
def upload_image():
    if 'file' not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No file selected"}), 400

    
    file_path = os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(file_path)

    img = cv2.imread(file_path)
    if img is None:
        return jsonify({"error": "Failed to process the image"}), 400


    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)


    thresh = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)[1]

 
    custom_config = r'--oem 3 --psm 6'
    text = pytesseract.image_to_string(thresh, config=custom_config)


    return jsonify({"text": text.strip() if text.strip() else "No text detected"})

if __name__ == '__main__':
    app.run(debug=True)