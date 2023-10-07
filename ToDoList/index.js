let arr = []
        function addTask() {
            let inp = document.getElementById('inpfortask')
            arr.push(inp.value)
            inp.value = ""
            display()
        }

        function display() {
            let displayArea = document.getElementById("printDiv");
            displayArea.innerHTML = "";
            for (let i = 0; i < arr.length; i++) {
                // displayArea.innerHTML += "<table border='2' class='tbl'><tr><td>" + arr[i] + "</td><td><button onclick='setEditName(" + i + ")'>Edit</button><button onclick='deleteName(" + i + ")'>Delete</button></td></tr></table>"
                // displayArea.innerHTML += "<div class='divforoutput'>" + arr[i] + "<button class='btnforedit' onclick='setEditName(" + i + ")'>Edit</button><button class='btnfordelete' onclick='deleteName(" + i + ")'>Delete</button></div>"
                displayArea.innerHTML += "<div class='divforoutput'>" + arr[i] + "<i class='fa-solid fa-pen btnforedit' style='color: #1eba1c;' onclick='setEditName(" + i + ")'></i><i class='fa-solid fa-trash-can btnfordelete' style='color: #e90707;' onclick='deleteName(" + i + ")'></i></div>"
            }
        }

        const deleteName = (i) => {
            arr.splice(i, 1);
            display();
        };

        const editName = () => {
            let index = Number.parseInt(document.getElementById("index").value);
            let name = document.getElementById("editName");
            arr[index] = name.value;
            name.value = "";
            display();
        };

        function setEditName(i) {
            let name = document.getElementById("editName");
            name.value = arr[i];
            let index = document.getElementById("index");
            index.value = i;
        }