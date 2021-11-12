async function bubbleSort(arr)
{
     for(let i=0; i<arr.length; i++)
     {
         for(let j=0; j<arr.length-i-1; j++)
         {
            arr[j].style.background="#BD8E83";
            arr[j+1].style.background="#BD8E83";
            if(parseInt(arr[j].style.height) > parseInt(arr[j+1].style.height))
              {
                await waitforme(1);
                [arr[j].style.height, arr[j+1].style.height] = [arr[j+1].style.height, arr[j].style.height];
              }
            arr[j].style.background="beige";
            arr[j+1].style.background="beige";
         }
         arr[arr.length-i-1].style.background="#EED6C4";
     }
     arr[0].style.background="#EED6C4";
}