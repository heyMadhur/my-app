// src/components/BarcodeScanner.js
import React, { useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

const Camera2 = () => {
  useEffect(() => {
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };
    const qrCodeSuccessCallback = (decodedText, decodedResult) => {
      console.log(`Code matched = ${decodedText}`, decodedResult);
      alert(`Scanned code: ${decodedText}`);
    };
    const qrCodeErrorCallback = (errorMessage) => {
      console.log(`Error scanning = ${errorMessage}`);
    };

    const html5QrcodeScanner = new Html5QrcodeScanner(
      'reader',
      config,
      false
    );
    html5QrcodeScanner.render(qrCodeSuccessCallback, qrCodeErrorCallback);

    return () => {
      html5QrcodeScanner.clear().catch((error) => {
        console.error('Failed to clear html5QrcodeScanner. ', error);
      });
    };
  }, []);

  return (
    <div>
      <h2>Barcode Scanner</h2>
      <div id="reader" style={{ width: '500px' }}></div>
    </div>
  );
};

export default Camera2;
