interface CatDataType {
    id: string;
    url: string;
    width: number;
    height: number;
}

const url = "https://api.thecatapi.com/v1/images/search";

// Define an async function to fetch and handle the data
export async function useGetCatPic() {
    const response = await fetch(url);
    
    // Check if the response is OK (status code 200)
    if (!response.ok) {
        throw new Error('Failed to fetch cat image');
    }

    // Parse the JSON response body
    const catData: CatDataType[] = await response.json();
    
    // Extract the first cat image from the array (since the API returns an array of objects)
    const catPic = catData[0].url;

    console.log(catPic); // Output the URL of the cat image
    return catPic; // You can return this URL or use it in your app
}

// Call the function to get the cat picture
useGetCatPic().then((url) => {
    console.log('Cat picture URL:', url);
}).catch((error) => {
    console.error('Error fetching cat picture:', error);
});