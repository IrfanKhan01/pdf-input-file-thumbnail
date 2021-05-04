// import logo from './logo.svg';
import './App.css';

// Import styles
import { useState } from 'react';
// import { Document, Page } from 'react-pdf';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

function App() {
  const [pdfFile, setPDF] = useState(null)
  const [inputFile, setInputFile] = useState('')


  function onChange(e) {
    console.log(e.target.value)
    const { files } = e.target;

    if (files.length) {
      setInputFile(URL.createObjectURL(files[0]))
    }
  }

  function _show() {
    setPDF(inputFile);
  }

  function _onLoadSuccess(data) {
    console.log(data)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <input type='file' accept=".pdf" onChange={onChange} />
          <button onClick={_show}>Show Thumbnail</button>
        </p>
        <Document file={pdfFile} onLoadSuccess={_onLoadSuccess} onLoadError={e => console.log(e)}>
          <Page height={200} pageNumber={1} />
        </Document>
      </header>
    </div>
  );
}

export default App;
