import React, { useRef, useEffect, useState } from 'react';
import WebViewer from '@pdftron/webviewer';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button
} from "shards-react";


const Pdf = () => {
  const [instance, setInstance] = useState(null);

  const doc = 'https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf';
  const { docRef } = doc;

  const viewer = useRef(null);
  useEffect(() => {
    WebViewer(
      {
        path: 'webviewer',
        initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf',
        disabledElements: [
          'ribbons',
          'toggleNotesButton',
          'contextMenuPopup',
        ],
      },
      viewer.current,
    ).then(async instance => {
      // select only the view group
      instance.UI.setToolbarGroup('toolbarGroup-View');

      setInstance(instance);



      //const URL = await storageRef.child(docRef).getDownloadURL();
    const URL='https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf';
    console.log(URL);
    instance.Core.documentViewer.loadDocument(URL);



      // load document
//const storageRef = storage.ref();

    });
  }, [docRef]);

  const download = () => {
    instance.UI.downloadPdf(true);
  };





  return (
    <Container fluid className="main-content-container px-4">
       <Row>


      <div className="webviewer" ref={viewer} style={{width: '100%',height:'800px' }}></div>

       </Row>

    </Container>
  )
}

export default Pdf
