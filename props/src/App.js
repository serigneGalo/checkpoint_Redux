import React from 'react';
import ProfilComponent from './profil/ProfilComponent';

function App() {
  return (
    <div className="App">
      <ProfilComponent fullName='Galo Diokhane'
      bio='Etudiant en Master Maths à l UCAD'
      profession='Developpeur WEB'
      myimage='https://wallpapershome.com/images/pages/pic_h/23660.jpg'
      handleName={()=>alert('Galo Diokhane')}/>
    </div>
  );
}
export default App;