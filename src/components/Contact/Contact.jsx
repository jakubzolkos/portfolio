import React, { useRef, useState} from 'react';
import "./Contact.scss";
import emailjs from '@emailjs/browser';

function Map() {
	return (
	  <div className="App">
		<iframe
		  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24146.01497990487!2d-71.10684924049808!3d42.35635867171962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e379f756133427%3A0x232a7ed8647d430a!2s206%20Bay%20State%20Rd%2C%20Boston%2C%20MA%2002215%2C%20USA!5e0!3m2!1sen!2spl!4v1673470694718!5m2!1sen!2spl"
		  width="450"
		  height="450"
		  style={{ border: "0" }}
		  allowfullscreen=""
		  loading="lazy"
		></iframe>
	  </div>
	);
  }


const Contact = () => {

	const form = useRef();

	const [formStatus, setFormStatus] = useState(null);

  	const handleSubmit = (event) => {
		event.preventDefault();
		// perform form submit logic here, and if it's successful, set formStatus to 'success'
		setFormStatus('success');
  	};
  
	const sendEmail = (event) => {
	  event.preventDefault();
  
	  emailjs.sendForm('service_6x8ppcj', 'template_zkz7b58', form.current, 'wAMDh5fmR68KRQ9o5')
		.then((result) => {
			console.log(result.text);
			form.current.reset();
			setFormStatus('success');
			setTimeout(() => {
				setFormStatus(null);
				document.getElementById("form-status").style.opacity = 0;
			}, 3000);
		}, (error) => {
			console.log(error.text);
		});
	};

	return (
		<>
			<section className="contact h-[800px] flex justify-center items-center" id="contact">
				<div data-aos="fade-up" data-aos-duration="700" className="container bg-none">
					<h2>
						Contact
					</h2>
					<div className='bg-none'>
					<p className="text-4xl bg-none justify-center flex text-center"> Let us stay in touch!</p>
					<p className="text-2xl mb-4 bg-none justify-center flex text-center"> Please submit the form below or send me an email at zolkos@bu.edu</p>

					</div>
						<div name = 'contact' className = 'bg-none max-w-[800px] mx-auto border-gray-300'>	
						<form ref = {form} onSubmit={e => { handleSubmit(e); sendEmail(e); }} className = 'max-h-[520px] w-full rounded-lg bg-opacity-60 px-5 py-5 bg-none bg-[#16171d]'>		
							<div className = 'pb-8 bg-none'>
            				<div className='bg-opacity-60 mt-7 grid mobile-lg:flex-col mobile-lg:grid-cols-1 grid-cols-2 gap-6 bg-none'>
								<input className = 'bg-opacity-60 text-xl bg-none outline-none text-gray-300 inline border-b-2 px-2 py-2' type = 'text' placeholder = 'Name' name = 'user_name'/>
             					<input className = 'bg-opacity-60 text-xl bg-none outline-none text-gray-300 inline border-b-2 px-2 py-2' type = 'text' placeholder = 'Phone (Optional)' name = 'user_phone'/>
							</div>
							<input required className = 'bg-opacity-60 w-full text-xl bg-none outline-none text-gray-300 inline border-b-2 my-5 py-2 px-2' type = 'email' placeholder = 'Email' name = 'user_email'/>
							<textarea required className = 'bg-opacity-70 w-full text-xl max-h-[200px] bg-none outline-none text-gray-300 inline border-b-2  p-2' name = 'message' rows="50" placeholder = 'Message'></textarea>
						
							<div className="flex bg-none justify-center">
							<button type = "submit" value = "Send" className = 'mt-5 text-white border-2 hover:bg-pink-600 hover:border-pink-600 w-[150px] py-3 my-8'>Submit</button>
							</div>
							
							</div>
       				    </form>
						   {formStatus === 'success' && (
							<div data-aos="zoom-in" data-aos-duration="400" className="bg-green-500 py-4 mobile-lg:mb-10 mobile-lg:py-2 mobile-lg:mt-12 bg-none text-white text-center text-lg">
								Message sent successfully!
							</div>
							)}
    				</div>
				</div>
				
			</section>
		</>
	);
};

export default Contact;

