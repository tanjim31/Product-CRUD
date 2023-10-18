import { apiurl } from "@/environment/environment";

async function getEmployee() {
    const response = await fetch(`${apiurl}/Product`);
   
    try {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
async function addEmployee(data) {
    console.log(data);
    try {
        const response = await fetch(`${apiurl}/Product`, {
            method: 'POST',
            body: data,
        });

        if (!response.ok) {
            throw new Error(`Network response was not ok: `);
        }
        return await response.json();
    } catch (error) {
        console.error('Error adding Employee:', error);
        throw error;
    }
}

export{
    getEmployee,
    addEmployee

}