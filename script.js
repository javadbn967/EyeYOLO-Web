let net;

async function loadModel() {
    net = await cocoSsd.load();
}

async function detectObjects() {
    const imageInput = document.getElementById('imageInput');
    if (!imageInput.files[0]) {
        alert("Please select an image first!");
        return;
    }

    const image = new Image();
    image.src = URL.createObjectURL(imageInput.files[0]);
    await image.decode();

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0);

    const predictions = await net.detect(image);

    let yOffset = 0; 
    const fontSize = 40; 

    predictions.forEach(prediction => {
        const [x, y, width, height] = prediction.bbox;
        ctx.beginPath();
        ctx.rect(x, y, width, height);
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#3498db';
        ctx.stroke();

        let textY = y - fontSize - 5;
        if (textY < 0 || yOffset > 0) {
            textY = y + height + 5 + yOffset; 
            yOffset += fontSize + 5; 
        }

        ctx.font = `${fontSize}px Arial`; 
        ctx.fillStyle = prediction.score > 0.7 ? '#2ecc71' : '#e74c3c';
        ctx.fillText(
            `${prediction.class} (${Math.round(prediction.score * 100)}%)`,
            x, textY
        );
    });
}

function saveResult() {
    const canvas = document.getElementById('canvas');
    const link = document.createElement('a');
    link.download = 'detected_image.png';
    link.href = canvas.toDataURL();
    link.click();
}

window.onload = loadModel;
