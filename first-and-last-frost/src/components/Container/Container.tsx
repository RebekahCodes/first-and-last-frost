
import './Container.css'
import Logo from '../../../public/images/first-last-frost-logo.png'
import Form from '../Form/Form'



function Container(){
return (
    <div className='container'>
      <img className='logo' src={Logo} alt='logo' />
      <p className='instructions'>Enter your postcode to find out your average first and last frost dates</p>
      <Form />
    </div>
);
}
export default Container;