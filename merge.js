async function merge(arr, i, m, j){
    let l1 = (m-i+1), l2 = (j-m);
    let leftArray = new Array(l1);
    let rightArray = new Array(l2);

    for(let l=0; l<l1; l++){
        await sleep(100);
        leftArray[l] = arr[i+l].style.height;
        arr[i+l].style.background = "#BD8E83";
    }
    for(let r=0; r<l2; r++){
        await sleep(100);
        rightArray[r] = arr[m+1+r].style.height;
        arr[m+1+r].style.background = "#BD8E83";
    }
    let q = 0, r = 0, k = i;
    while(q<l1 && r<l2){
        await sleep(100);
        arr[k].style.background = "#EED6C4";
        if(parseInt(leftArray[q]) <= parseInt(rightArray[r])){
            arr[k++].style.height = leftArray[q++];
        }
        else{
            arr[k++].style.height = rightArray[r++];
        }
    }
    while(q<l1){
        arr[k].style.background = "#EED6C4";
        arr[k++].style.height = leftArray[q++];  
    }
    while(r<l2){
        arr[k].style.background = "#EED6C4";
        arr[k++].style.height = rightArray[r++];
    }
}
async function mergeSort(arr, i, j){
    if(i>=j)
        return;
    let m = i + parseInt((j-i)/2);
    await mergeSort(arr, i, m);
    await mergeSort(arr, m+1, j);
    await merge(arr, i, m, j);
}