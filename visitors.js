// JSON array with 30 entries 
let visitors = [
    {
      "id": 1,
      "name": "R. Bunrith",
      "phone": "012 345788"
    },
    {
      "id": 2,
      "name": "Rithy",
      "phone": "088 345788"
    },
    {
      "id": 3,
      "name": "Sokha",
      "phone": "077 234567"
    },
    {
      "id": 4,
      "name": "Mara",
      "phone": "093 456789"
    },
    {
      "id": 5,
      "name": "Kunthea",
      "phone": "089 567890"
    },
    {
      "id": 6,
      "name": "Channary",
      "phone": "096 678901"
    },
    {
      "id": 7,
      "name": "Sarith",
      "phone": "092 789012"
    },
    {
      "id": 8,
      "name": "Dara",
      "phone": "085 890123"
    },
    {
      "id": 9,
      "name": "Vannak",
      "phone": "086 901234"
    },
    {
      "id": 10,
      "name": "Lina",
      "phone": "099 012345"
    },
    {
      "id": 11,
      "name": "Chantha",
      "phone": "095 123456"
    },
    {
      "id": 12,
      "name": "Phirun",
      "phone": "097 234567"
    },
    {
      "id": 13,
      "name": "Sothear",
      "phone": "098 345678"
    },
    {
      "id": 14,
      "name": "Theary",
      "phone": "090 456789"
    },
    {
      "id": 15,
      "name": "Vicheka",
      "phone": "091 567890"
    },
    {
      "id": 16,
      "name": "Kosal",
      "phone": "094 678901"
    },
    {
      "id": 17,
      "name": "Sophea",
      "phone": "087 789012"
    },
    {
      "id": 18,
      "name": "Narith",
      "phone": "084 890123"
    },
    {
      "id": 19,
      "name": "Leak",
      "phone": "083 901234"
    },
    {
      "id": 20,
      "name": "Kanha",
      "phone": "082 012345"
    },
    {
      "id": 21,
      "name": "Samnang",
      "phone": "081 123456"
    },
    {
      "id": 22,
      "name": "Pheakdey",
      "phone": "080 234567"
    },
    {
      "id": 23,
      "name": "Sokun",
      "phone": "079 345678"
    },
    {
      "id": 24,
      "name": "Ratanak",
      "phone": "078 456789"
    },
    {
      "id": 25,
      "name": "Monica",
      "phone": "077 567890"
    },
    {
      "id": 26,
      "name": "Vanna",
      "phone": "076 678901"
    },
    {
      "id": 27,
      "name": "Bunthoeun",
      "phone": "075 789012"
    },
    {
      "id": 28,
      "name": "Charya",
      "phone": "074 890123"
    },
    {
      "id": 29,
      "name": "Rith",
      "phone": "073 901234"
    },
    {
      "id": 30,
      "name": "Piseth",
      "phone": "072 012345"
    }
  ];
  
  // search visitor
  function searchVisitors(event) {
    // Prevent form from submitting which causes the page to reload
    if (event) event.preventDefault();
  
    const input = document.getElementById("searchInput").value.toLowerCase();
    const tbody = document.getElementById("resultsTable").getElementsByTagName("tbody")[0];
    tbody.innerHTML = ""; // Clear previous results
  
    // Filter visitors by checking if any visitor property matches the input
    const filteredVisitors = visitors.filter(
      (visitor) =>
        visitor.id.toString() === input ||
        visitor.name.toLowerCase().includes(input) ||
        visitor.phone.toLowerCase().includes(input)
    );
  
    if (filteredVisitors.length) {
      filteredVisitors.forEach((visitor) => {
        let row = tbody.insertRow();
        row.insertCell(0).textContent = visitor.id;
        row.insertCell(1).textContent = visitor.name;
        row.insertCell(2).textContent = visitor.phone;

      });
    } else {
      let row = tbody.insertRow();
      let cell = row.insertCell(0);
      cell.textContent = "No visitor found.";
      cell.colSpan = 3;
      cell.style.textAlign = "center";
    }
  }
    //add or update
    function addOrUpdateVisitor() {
      const id = parseInt(document.getElementById("visitorId").value.trim());
      const name = document.getElementById("visitorName").value.trim();
      const phone = document.getElementById("visitorPhone").value.trim();

    
      if (!id || !name || !phone) {
        alert("Please fill in all fields.");
        return;
      }
    
      const existingVisitorIndex = visitors.findIndex((visitor) => visitor.id === id);
    
      if (existingVisitorIndex > -1) {
        visitors[existingVisitorIndex] = { id, name, phone };
        alert("Visitor updated successfully!");
      } else {
        visitors.push({ id, name, phone });
        alert("Visitor added successfully!");
      }
      console.log(visitors);
      searchVisitors(); // Refresh the list after adding/updating
    }
    
    function deleteVisitor() {
      const id = parseInt(document.getElementById("deleteId").value.trim());
      const initialLength = visitors.length;
      visitors = visitors.filter((visitor) => visitor.id !== id);
    
      if (visitors.length < initialLength) {
        alert("Visitor deleted successfully!");
      } else {
        alert("No visitor found with that ID.");
      }
      console.log(visitors);
      searchVisitors(); // Refresh the list after deleting
    }
    
  
  
    document.getElementById("searchInput").form.addEventListener('submit', searchVisitors);
  
  
    document.addEventListener("DOMContentLoaded", searchVisitors);
    document.getElementById("searchInput").addEventListener("submit", searchVisitors);