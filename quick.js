async function partition(arr, low, high){
    let pivot = arr[high].style.height;
    let i = low-1;
    await sleep(50);
    arr[high].style.background = "#BD8E83";
    for(let j=low; j<=high-1; j++){
        await sleep(50);
        arr[j].style.background = "beige";
        if(parseInt(arr[j].style.height) < parseInt(pivot))
        {
            i++;
            [arr[i].style.height, arr[j].style.height] = [arr[j].style.height, arr[i].style.height];
        }
    }
    arr[high].style.background = "beige";
    await sleep(50);
    [arr[i+1].style.height,arr[high].style.height] = [arr[high].style.height,arr[i+1].style.height];
    return i+1;
}

async function quickSort(arr, low, high){
    if(low<high){
        let p = await partition(arr, low, high);
        await quickSort(arr, low, p-1);
        await quickSort(arr, p+1, high);
    }
}