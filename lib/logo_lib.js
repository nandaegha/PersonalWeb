function gbr_titik(imageDataTemp, x, y, r, g, b) {
    var index;
    index = 4 * (x + (y * canvasMe.width));
    imageDataTemp.data[index] = r;
    imageDataTemp.data[index + 1] = g;
    imageDataTemp.data[index + 2] = b;
    imageDataTemp.data[index + 3] = 255;
}

function lingkaran_polar(imageDataTemp, xc, yc, radius, r, g, b) {
    for (var theta = 0; theta < Math.PI*2; theta += 0.0001) {
        x = xc + radius * Math.cos(theta);
        y = yc + radius * Math.sin(theta);
        
        gbr_titik(imageDataTemp, Math.ceil(x), Math.ceil(y), r, g, b);
    }
}

function ellipse_polar(imageDataTemp, xc, yc, radiusX, radiusY, r, g, b) {
    for (var theta = 0; theta < Math.PI*2; theta += 0.001) {
        x = xc + radiusX * Math.cos(theta);
        y = yc + radiusY * Math.sin(theta);
        
        gbr_titik(imageDataTemp, Math.ceil(x), Math.ceil(y), r, g, b);
    }
}
function gbr_lingkaran(imageDataTemp, xc, yc, radius, r, g, b) {
    for (var x = xc - radius; x < xc + radius; x++) {
        var y = yc + Math.sqrt(Math.pow(radius, 2) - Math.pow((x - xc), 2) );
        gbr_titik(imageDataTemp, Math.ceil(x), Math.ceil(y), r, g, b);
        var y = yc - Math.sqrt(Math.pow(radius, 2) - Math.pow((x - xc), 2) );
        gbr_titik(imageDataTemp, Math.ceil(x), Math.ceil(y), r, g, b);
    }
}