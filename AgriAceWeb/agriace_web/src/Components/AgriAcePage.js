import {useRef,useState} from "react";
import ScrollTopTop from './ScrollTop';
import emailjs from 'emailjs-com'
import './AgriAcePage.css'
import Popup from 'reactjs-popup';
import image from './AgriAceLogo.png'
import seed from './SEEDS.png'
import cardONE from './card1.png'
import cardTWO from './card2.png'
import cardTHREE from './card3.png'
import cardFOUR from './card4.png'
import technology from './technology.png'
import phone from './phone.png'
import design from './design.png'


function App() {
  const about= useRef(null);
  const services= useRef(null);
  const contact= useRef(null);

  const scrollToSection= (elementRef)=>{
    window.scrollTo({
      top:elementRef.current.offsetTop,
      behavior:'smooth'
    });
  };
  const [to_name,setTo_Name]=useState('')
  const [from_name, setFrom_name]=useState('')
  const[message,setMessage]=useState('')
  const submitInfo=()=>{
    console.log(to_name+from_name+message);

    const emailContent={
      to_name:to_name,
      from_name:from_name,
      message:message,
    }

    emailjs.send('service_rvazjdd', 'template_q80m8jg', emailContent, 'X8-qgOB5Mjb-Chqeu')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }

  return (
    <div className="App">


      <ScrollTopTop/>
      <div className='hero'>
        <ul>
          <h2 onClick={()=> scrollToSection(about)} id='abouts'>About Us</h2>
          <h2  onClick={()=> scrollToSection(services)} id='serves'>Services</h2>
          <h2 onClick={()=> scrollToSection(contact)} id='contat'>Contact Us</h2>
          <img src={image} alt='./AgriAceLgo.png' className='logo'></img>

          <button className="login"><a href="/signup">Login</a></button>

        </ul>
        <img src={seed} alt='./SEEDS.png' className='seed'></img>
      </div>
      
    
      <div ref={about}className='about'>
    

               <h2>AGRIACE</h2> 
               <p>AgriAce is a technology company
                that simplifies the purchases of 
                <br></br>
                certified potato seeds to small-scale farmers.
                <br></br>
                AgriAce aims to make life easier for smallholder potato farmers 
                <br></br>
                in Kenya's various counties. Farmers will be able to use our platform 
                <br></br>
                to view the registered companies in their area as 
                <br></br>
                well as the seed varieties
                 available and order seeds.</p>

            
            <div className='learn'>
            <Popup trigger={<button>Learn More</button>} position=" left">
            <div className="popabout">
                <p>Potato is the fourth most farmed crop in 
                <br></br>
                the world whose productivity is impacted by 
                <br></br>
                availability of certified seeds. Potato 
                <br></br>
                farmers deal with major challenges of low 
                <br></br>
                production due to lack of knowledge  and 
                <br></br>
                access to certified potato seeds.</p>
            </div>
            </Popup>
      
      </div>
      </div>
      <div ref={services}className='services'>
               <h4>SERVICES</h4>
                <div className='cards'>
                    <div className='cardone'>
                    <img src={cardONE} alt='./card1.png' className='card1'></img>
                    <p>Available seeds</p>
                    <Popup trigger={<button className='btns'>View</button>} position="centre">
            <div className='popup1'>
                <p>
                <li> Shangi </li>
                <br></br>
               <li>Sherekea</li>
                <br></br>
               <li>Robjin</li>
                <br></br>
               <li>Karibu</li>
                <br></br>
                <li>Desiree</li> 
                <br></br>
               <li> Bvumbwe.</li>
                <br></br>
               <li> Tigoni.</li>
                </p>
            </div>
            </Popup>
                    </div>
                    <div className='cardtwo'>
                    <img src={cardTWO} alt='./card2.png' className='card2'></img>
                    <p>Seed Producers</p>

                    <Popup trigger={<button className='btn2'>View</button>} position="centre">
            <div className='popup2'>
                <p>
                <li> ADC Molo </li>
                <br></br>
               <li>KARLO,Tigoni</li>
                <br></br>
               <li>Kisima Farm</li>
                <br></br>
               <li>Agrico</li>
                <br></br>
                <li>Fresh Crop</li> 
                <br></br>
               <li> Singus Enterprise</li>
                <br></br>
               <li> Stockman Rozen Ltd</li>
                </p>
            </div>
            </Popup>
                    </div>
                    <div className='cardthree'>
                    <img src={cardTHREE} alt='./card3.png' className='card3'></img>
                    <p>Planting Seasons</p>
                   
                    <Popup trigger={<button className='btn3'>View</button>} position="centre">
            <div className='popup3'>
                <p>
                <li> Rainy </li>
               </p>
            </div>
            </Popup>
                    </div>
                    <div className='cardfour'>
                    <img src={cardFOUR} alt='./card4.png' className='card4'></img>
                    <p>Order Seeds</p>
                    
                    <Popup trigger={<button className='btn4'>View</button>} position="centre">
            <div className='popup4'>
                <p>
                <li> Dial a code </li>
                <br></br>
               <li>Select order seeds</li>
                <br></br>
               <li>Select the quantity of seeds</li>
                <br></br>
               <li>Select payment method</li>
                </p>
            </div>
            </Popup>
                    </div>

                </div>

            </div>

           {/* THE TECHNOLOGY USED BY AGRIACE */}
            <div className='technology'>
                <div className='techno'>
                    <h1>TECHNOLOGY</h1>
                    <p> A 2-way sms platform that will bridge
                         <br></br>
                        the gap between the small-scale 
                        <br></br>
                        farmers and the seed companies.</p>
                </div>
                <img src={technology} alt='./technology.png' className='technlogy'></img>


                <div className="Steps">
                <h1>How to order seeds from us</h1>

            <div className='order_seeds'>
                <div className='steps'>
                    <img src={phone} alt='./phone.png' className='pn1' ></img>
                    <p>Dial *123# to order seeds</p>
                </div>
                <div className='step2'>
                    <img src={phone} alt='./phone.png' className='pn2'></img>
                    <p>Select order seeds</p>
                </div>  
            </div>
            <div className='order_seed2'>
            <div className='step3'>
                    <img src={phone} alt='./phone.png' className='pn3' ></img>
                    <p>Select the quantity of seeds you want to buy</p>
                </div>
                <div className='step4'>
                    <img src={phone} alt='./phone.png' className='pn4' ></img>
                    <p>Select payment method</p>
                </div>
                </div>
            </div>

      </div>
      <div ref={contact}className='Contact'>

      <img src={design} alt='./design.png' className='designs'></img>
     <div className='contacts'>
      <h1>Contact Form</h1>
     <input placeholder='Your name' id='names'type='text' tabIndex='1'
      onChange={(event)=> {setTo_Name(event.target.value)}}
      required autoFocus ></input>
      <br></br>
      <br></br>

     <input placeholder='Your email' id='email' type='text' tabIndex='2'
      onChange={(event)=> {setFrom_name(event.target.value)}}

       required></input>
        <br></br>
        <br></br>

       <textarea placeholder='Type your message.'id="message" tabIndex='3'
             onChange={(event)=> {setMessage(event.target.value)}}
             required></textarea>
              <br></br>
              <br></br>

       <button name='submit' type='submit' onClick={submitInfo}>Submit</button>      

   
    </div>
          
            <div class="mapouter">
                <div class="gmap_canvas">
                <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=karen&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                <a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/"></a>
       </div>
         

            </div>
            {/* FOOTER */}
            <footer className='footer'>
            <div className='contacts_footer'> 
             <h3>Contact Us</h3>
             <h4>agriace@gmail.com</h4>
             <h4>+254784848483</h4>
             </div>
             <div className='location'>
                <h3>Location</h3>
                <h4>Korongo road, Karen</h4>
                </div>
             
            </footer>
          <div> 
         


          </div>
      </div>

      
     </div>
  );
};


export default App;
