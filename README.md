# EyeYOLO-Web
This project runs on the web and displays objects by their names.
## Description
EyeYOLO-Web is a lightweight web-based object detection tool that leverages TensorFlow.js and the YOLO algorithm to identify and label objects in uploaded images. Simply upload an image, and the tool will detect and highlight objects (e.g., people, cars, animals) with their class names and confidence scores, all running directly in your browser. This project is perfect for developers and enthusiasts interested in computer vision and web technologies!

### Key Features
- Real-time object detection in the browser
- User-friendly interface with a single upload button
- Supports multiple object classes using a pre-trained COCO-SSD model
- No installation required—just open and use!

### How It Works
The project uses a pre-trained YOLO-based model (via COCO-SSD) to analyze images. Once an image is uploaded, the canvas displays bounding boxes around detected objects, labeled with their names and accuracy percentages.

### Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/javadb967/EyeYOLO-Web.git
