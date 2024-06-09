import React, { useState, useEffect } from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode'


const Camera = () => {

  const [scanResult, setScanResult] = useState(null)



  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    })

    scanner.render(success, error)

    function success(result) {
      scanner.clear()
      setScanResult(result)

    }
    function error(err) {
      console.warn(err)
    }
  }, [])

  return (
    <div>
      <h1>Scanning</h1>
      {
        scanResult ? <div> Success: {scanResult} </div> : <div id="reader"></div>


      }
      
    </div>
  )
}

export default Camera
