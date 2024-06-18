export function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
export function booleanToYesNo(value) {
    return value ? 'Yes' : 'No';
}
export function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}
export const checkLogIn = async () => {
  try {
    const response = await fetch('http://127.0.0.1:5000/user/check/login', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
    });
    console.log(response.status);
    console.log(response.headers);
    // Check if the response is not ok
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Failed to fetch: ${JSON.stringify(errorData)}`);
    }

    // Handle specific response status codes
    if (response.status === 401) {
      return false; // User not logged in
    } else if (response.status !== 200) {
      throw new Error('Unexpected response');
    }

    const data = await response.json();
    // Process the response data as needed
    return true; // User logged in
  } catch (error) {
    console.error('Error checking login status:', error);
    return false; // Return false in case of error
  }
};


