import React from 'react'
import Inquiry from '../components/Inquiry'

const InquiryPage = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        organizationName: '',
        organizationType: '',
        participants: '',
        deliveryCity: '',
        comments: '',
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Send the form data to the backend
        fetch('/api/submit-form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
          .then((response) => response.json())
          .then((data) => {
            // Handle the response from the backend if needed
            console.log(data);
          })
          .catch((error) => {
            // Handle any errors that occurred during the request
            console.error(error);
          });
    
        // Clear the form fields
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            organizationName: '',
            organizationType: '',
            participants: '',
            deliveryCity: '',
            comments: '',
        });
      };
    
      return (
        <Inquiry onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </Inquiry>
      );
    };


export default InquiryPage