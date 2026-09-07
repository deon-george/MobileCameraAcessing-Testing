Haptix Vision
=============

Run the detector on the laptop, then use the mobile rear camera as the capture device.
Both devices must be on the same Wi-Fi network.

1. Install dependencies: `pip install -r requirements.txt`
2. Start the server: `python app.py`
3. Open `https://<laptop-ip>:5000` on the laptop for the live monitor.
4. Open `https://<laptop-ip>:5000/camera` on the phone for the rear-camera capture page.

## Docker

Build and start the container:

```bash
docker build -t haptix-vision .
docker run --rm -p 5000:5000 haptix-vision
```

Open `https://localhost:5000` on the host, or `https://<host-ip>:5000/camera` on a phone connected to the same network. Accept the development certificate warning once.

Runtime settings can be overridden with environment variables, for example:

```bash
docker run --rm -p 5000:5000 -e DETECTION_RANGE_METERS=5 haptix-vision
```

The application is installable as a PWA from supported mobile browsers. A local HTTPS certificate is required for mobile camera access; accept the browser's certificate warning once when using the development server.

The 3 m value is a monocular estimate for objects with known reference widths. It is not a depth measurement; use a calibrated camera or depth sensor when distance accuracy is critical.
