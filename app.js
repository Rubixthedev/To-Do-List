let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let h1 = document.querySelector("#temp")

btn.addEventListener("click", function ()
{
    let task = inp.value.trim();
    if (task === "")
    {
        alert("Please enter a task!");
        return;
    }
    else
    {
        let li = document.createElement("li");
        li.innerText = task;
        let deleteBtn = document.createElement("i");
        deleteBtn.className = "fa-solid fa-xmark";
        deleteBtn.addEventListener("click", function ()
        {
            ul.removeChild(li);
        });
        li.appendChild(deleteBtn);
        ul.appendChild(li);
        inp.value = "";
        h1.style.visibility = "hidden";
        h1.style.margin = "0";
    }
});
