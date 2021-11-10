import React, {useState} from 'react';
import Modal from './Modal';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{background: '#EFF1F5', padding: '30px'}}>
      <button onClick={() => setOpen(true)}>OPEN MODAL</button>
      <Modal show={open} onHide={setOpen} width="400px">
        <Modal.Header> 
          <div>ЗАГОЛОВОК</div>
        </Modal.Header>
        <Modal.Body>
          <div>Create React App is a comfortable environment for learning React, 
            and is the best way to start building a new single-page application in React.
            It sets up your development environment so that you can use the latest JavaScript features, 
            provides a nice developer experience, and optimizes your app for production. You’ll need to have Node 
            >= 14.0.0 and npm >= 5.6 on your machine. To create a project, run:
          </div>
          <div>Create React App is a comfortable environment for learning React, 
            and is the best way to start building a new single-page application in React.
            It sets up your development environment so that you can use the latest JavaScript features, 
            provides a nice developer experience, and optimizes your app for production. You’ll need to have Node 
            >= 14.0.0 and npm >= 5.6 on your machine. To create a project, run:
          </div>
          <div>Create React App is a comfortable environment for learning React, 
            and is the best way to start building a new single-page application in React.
            It sets up your development environment so that you can use the latest JavaScript features, 
            provides a nice developer experience, and optimizes your app for production. You’ll need to have Node 
            >= 14.0.0 and npm >= 5.6 on your machine. To create a project, run:
          </div>
          <div>Create React App is a comfortable environment for learning React, 
            and is the best way to start building a new single-page application in React.
            It sets up your development environment so that you can use the latest JavaScript features, 
            provides a nice developer experience, and optimizes your app for production. You’ll need to have Node 
            >= 14.0.0 and npm >= 5.6 on your machine. To create a project, run:
          </div>
          <button onClick={() => setOpen(false) }>CLOSE MODAL</button>
        </Modal.Body>
        <Modal.Footer>
          <div>ПОДВАЛ</div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default App;