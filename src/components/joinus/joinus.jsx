import joinus from '../assets/joinus.jpg';
import './joinus.css';
import EmailInput from './email/email';
export default function Joinus(){
    return(
        <div className='main-container1'>
        <img src={joinus} className='vector'></img>
        <div className='joinus'>
            JOIN US NOW!!!
            <EmailInput/>
        </div>
        </div>
    )
}