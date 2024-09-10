import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { firstName, lastName, email } = req.body;

    try {
      // Build the query parameters
      const params = {
        u: '812459e95e9c45c63935c0ef6', // Mailchimp user ID (replace this with your actual value)
        id: '8370f561eb', // List ID (replace with actual value)
        FNAME: firstName,
        LNAME: lastName,
        EMAIL: email,
        subscribe: 'Subscribe',
        // These fields are optional, you may modify/remove them as needed
        'b_812459e95e9c45c63935c0ef6_8370f561eb': '', 
        _: Date.now(),
      };

      // Send GET request to the subscription URL with query params
      const response = await axios.get('https://concordiacollege.us7.list-manage.com/subscribe/post-json', {
        params,
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json',
        },
      });

      // If the response is successful
      if (response.status === 200) {
        // Mailchimp returns JSONP, strip out the callback if needed
        console.log("Thank you for subscribing!")
        return res.status(200).json({ message: 'Thank you for subscribing!' });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Subscription failed', error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
