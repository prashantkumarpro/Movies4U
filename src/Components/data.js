
export const fetchData = async () => {
    try {
        const response = await fetch(`https://api.dailymotion.com/videos?fields=id,title,thumbnail_url,description,duration&tags=movie&limit=100`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json()
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}