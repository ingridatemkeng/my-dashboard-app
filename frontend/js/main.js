document.addEventListener("DOMContentLoaded", () => {
  const dashboard = document.getElementById("dashboard");
  const dataForm = document.getElementById("data-form");
  const dataList = document.getElementById("data-list");

  // Fetch and display existing data

  const fetchData = () => {
    fetch("http://localhost:5000/api/data")
      .then((response) => response.json())
      .then((data) => {
        displayData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  // Handle form submission
  dataForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const value = document.getElementById("value").value;

    fetch("http://localhost:5000/api/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, value }),
    })
      .then((response) => response.json())
      .then((newData) => {
        fetchData()
        dataForm.reset();
      })
      .catch((error) => console.error("Error adding data:", error));
  });

  async function deleteData(id) {
    try {
      const response = await fetch(`http://localhost:5000/api/data/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete data");
      }
      const data = await response.json();
      console.log("Data deleted:", data);
      // Optionally update UI or handle success message
    } catch (error) {
      console.error("Error deleting data:", error);
      // Handle error: display message to user, etc.
    }
  }

  function displayData(data) {
    // const dataList = document.getElementById("dataList");
        dataList.innerHTML = ""; // Clear previous items
    data.forEach((item) => {
      const div = document.createElement("div");
      div.textContent = `${item.name}: ${item.value}`;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", async () => {
        await deleteData(item._id); // Call deleteData function
        fetchData(); // Refresh data list after deletion
      });

      div.appendChild(deleteBtn);
      dataList.appendChild(div);
    });
  }

  fetchData();
});
