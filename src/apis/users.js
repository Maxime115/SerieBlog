export async function getUser(id) {
    const response = await fetch(`http://localhost:8000/getUser/${id}`);
    return response.json();
  }