async function selectionSort(arr){
    for(let i=0; i<arr.length; i++){
        let pos = i, min = parseInt(arr[i].style.height);
        arr[i].style.background = "beige";
        for(let j=i+1; j<arr.length; j++){
            arr[j].style.background = "#BD8E83";
            await sleep(50);
            if(parseInt(arr[j].style.height) < min)
            {
                if(pos !==i )
                    arr[pos].style.background="beige";
                min = parseInt(arr[j].style.height);
                pos = j;
            }
            else
                arr[j].style.background="beige";
        }
        [arr[pos].style.height , arr[i].style.height] = [arr[i].style.height, arr[pos].style.height];
        arr[pos].style.background = "beige";
        arr[i].style.background = "#EED6C4"
    }
}