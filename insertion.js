async function insertionSort(arr){
    for(let i=1; i<arr.length; i++){
        let j=i;
        await sleep(100);
        while(j>0 && parseInt(arr[j-1].style.height) > parseInt(arr[j].style.height))
        {
            arr[j].style.background = "#BD8E83";
            await sleep(100);
            [arr[j-1].style.height, arr[j].style.height] = [arr[j].style.height, arr[j-1].style.height];
            j--;
            for(var k=i;k>=0;k--){
                arr[k].style.backgroundColor = "#EED6C4";
              }
        }
        arr[i].style.background = "#EED6C4";
    }
}