var a=[];
var count=0;
var n=parseInt(prompt("enter the size of the array"));

for (let i=0; i<n;i++){
    a[i]=parseInt(prompt("enter the number"));
}
document.write("given array is="+a+"<br>");




for(let i=0;i<a.length;i++){
    var sum=0;
    for(let j=1;j<a[i];j++){
        
        if(a[i]%j==0){
        sum=sum+j;
        }
        console.log(sum)
    }

    if(sum==a[i]){
        count=count+1
        
    }
}
document.write(count);