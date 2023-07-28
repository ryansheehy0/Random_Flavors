const sendEmail = async (emailAddress, emailBody, apiKey) => {
  //fetch(//URL
  const url = 'https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send';
 fetch(url)
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '38a904ecb7msh0bc540f8136b846p140410jsnf829c39fd221',
      'X-RapidAPI-Host': 'rapidprod-sendgrid-v1.p.rapidapi.com'
    },
    body: {
      personalizations: [
        {
          to: [
            {
              email: 'favoriteflavors_2023@yahoo.com'
            }
          ],
          subject: 'Hello, World!'
        }
      ],
      from: {
        email: 'favoriteflavors_2023@yahoo.com'
      },
      content: [
        {
          type: 'text/plain',
          value: 'Hello, World!'
        }
      ]
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  } 
} 

// Exporting
window.send_email = {
  sendEmail
}
