import React from 'react';
import '../../App.css';
import ButtonMailto from '../../components/Email';


export default function ContactUs() {
  return (
  <div className='contact-us-fondo'>
    <div>
    <h1 className='contact-us-texto'>CONTACTO EDS</h1> 
    </div>
    <div className='contacto-email'>
    <ButtonMailto label="Enviame un email" mailto="mailto:electronicdynamicsystems@gmail.com"  />
    </div>
  </div>
  );
}



 
