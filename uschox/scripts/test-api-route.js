import fetch from 'node-fetch';

async function testApiRoute() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const fullUrl = `${apiUrl}/api/members`;

  try {
    console.log(`Fetching from: ${fullUrl}`);
    const response = await fetch(fullUrl);
    
    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
      const text = await response.text();
      console.error('Response body:', text);
      return;
    }

    const data = await response.json();
    console.log('API response:');
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error testing API route:', error);
  }
}

testApiRoute();