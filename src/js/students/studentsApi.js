export const getStudents = () => {
  return fetch('https://65d763b227d9a3bc1d7aea8d.mockapi.io/students').then(
    response => {
      if (!response.ok) {
        throw new Error(response.message);
      }

      return response.json();
    }
  );
};

export const setStudent = student => {
  return fetch('https://65d763b227d9a3bc1d7aea8d.mockapi.io/students', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(student),
  }).then(response => {
    if (!response.ok) {
      throw new Error(response.message);
    }

    return response.json();
  });
};

export const deleteStudent = studentId => {
  return fetch(`https://65d763b227d9a3bc1d7aea8d.mockapi.io/students/${studentId}`, {
    method: 'DELETE',
  }).then(response => {
    if (!response.ok) {
      throw new Error(response.message);
    }

    return response.json();
  });
}
