const listAlgorithm = ["Bubble", "Selection", "Insertion", "Merge"];
const arr = [];
const btn = document.querySelector(".btn");

function toggleSortButton(status){
    document.querySelector(".btn").disabled = status;
}

function createRandomArray(){
    while(arr.length<100)
    {
        arr.push(Math.floor(Math.random() * 400) + 10);
    }
}

async function sleep(milisec)
{ 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

function main(){
    const x = document.getElementById("algo");
    for (const algo of listAlgorithm) {
        let option = document.createElement("option");
        option.text = algo;
        x.add(option);
    }
    createRandomArray();
    const y = document.getElementById("array");
    for (const element of arr) {
        const bar = document.createElement("div");
        bar.className = 'bar';
        bar.style.height = `${element}px`;
        bar.style.width = '6px';
        bar.style.backgroundColor = '#D9CAB3';
        bar.style.margin = '1px';
        y.appendChild(bar);
    }
    btn.addEventListener("click",async function(){
        const arr=document.querySelectorAll(".bar");
        switch(x.value){
            case 'Bubble':
                toggleSortButton(true);
                await bubbleSort(arr);
                break;
            case 'Selection':
                toggleSortButton(true);
                await selectionSort(arr);
                break;
            case 'Insertion':
                toggleSortButton(true);
                await insertionSort(arr);
                break;
            case 'Merge':
                toggleSortButton(true);
                await mergeSort(arr);
                break; 
        }
    });
}

