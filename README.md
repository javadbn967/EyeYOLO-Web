# EyeYOLO-Web
I wrote this website with html, css, Javascript. This website can identify objects in the photo you upload.

## Description
This model uses the TensorFlow.js library in Javascript to identify objects and write the percentage of correctness next to them. This library allows us to run AI models in the browser. TensorFlow works in such a way that it can perform an accurate analysis of objects using Deep Neural Networks. When we give it a photo, it can identify objects, write the percentage of accuracy next to them, and draw a line for them. Of course, this depends on the quality of the photo and how it is positioned. If it is correct, the result will be displayed clearly and correctly.CSS is used to make the buttons more beautiful.

### How to Use
1. Click the "Choose File" button and pick a photo from your device.
2. Hit the "Detect Objects" button to let the model analyze it.
3. Check the canvas to see boxes around detected objects with their names and confidence scores.
4. Use "Save Result" to download the image with detections.



### Simple example
Let's say you have a picture of a room. The first model divides the image into small parts, then compares it to patterns it has learned (like the shape of a sofa), says "there's a sofa here with 81% confidence" and draws a box. This is done in a fraction of a second using JavaScript.

This is the project link to view👉 https://eye-yolo-web-jtdp.vercel.app/

