document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".grid"); 
    const clear = document.querySelector(".clear"); 
    const input = document.querySelector("#input"); 
    let colorMode = document.querySelector(".color"); 
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const createGrid = () => {
        const inputValue = parseInt(input.value, 10); 
        if (inputValue < 1 || inputValue > 100) {
            alert("Please enter a valid number between 1 and 100."); 
            return;
        }

        grid.innerHTML = ""; 
        grid.style.display = "grid";
        grid.style.gridTemplateColumns = `repeat(${inputValue}, 1fr)`; 
        grid.style.gridTemplateRows = `repeat(${inputValue}, 1fr)`; 

        for (let i = 0; i < inputValue*inputValue; i++) {
            const cell = document.createElement("div");
            cell.style.border = "1px solid black"; 

            cell.addEventListener("mouseover", () => {
                    cell.style.backgroundColor = 'black'; 
            });
            colorMode.addEventListener("click",()=>{
                cell.addEventListener("mouseover",()=>{
                    cell.style.backgroundColor = getRandomColor();
            });
    });

            grid.appendChild(cell); 
        }
    };

    clear.addEventListener("click", () => {
        createGrid(); 
    });


    document.querySelector(".button").addEventListener("click", () => {
        createGrid(); 
    });

    createGrid(); 
});
