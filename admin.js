const tableBody = document.getElementById("tableBody");

function renderTable() {
    const attempts = JSON.parse(localStorage.getItem("attempts")) || [];
    const profileFilter = document.getElementById("profileFilter").value;
    const statusFilter = document.getElementById("statusFilter").value;

    tableBody.innerHTML = "";

    const filtered = attempts.filter(a => {
        return (
            (profileFilter === "" || a.profile === profileFilter) &&
            (statusFilter === "" || a.status === statusFilter)
        );
    });

    filtered.forEach(a => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${a.email}</td>
      <td>${a.profile}</td>
      <td>${a.score}</td>
      <td>${a.status}</td>
    `;
        tableBody.appendChild(row);
    });
}

renderTable();
