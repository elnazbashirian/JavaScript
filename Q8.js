function minMax(arr){
    let min=arr[arr.length-1];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }
    }
    let max=arr[arr.length-1];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    console.log("[",min,",",max,"]")
}
let arr=[1, 2, 3, 4, 5];
minMax(arr);