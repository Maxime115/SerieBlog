export async function getSerie(id) {
    const response = await fetch(`http://localhost:8000/getSerie/${id}`);
    return response.json();
  }