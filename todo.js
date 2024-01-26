let boxes = document.querySelector(".box");
let value = true;
boxes.forEach((box) => {
    box.addEventListener = ('click', () => {
        if (value) {
            box.innerText = "X";
            value = false;
        }
        else {
            box.innerText = "O";
            value = True;
        }
    })
    
});