
var findMaxConsecutiveOnes = function(nums) {
    //用slice来做
    let string = nums.join("");
    let array = string.split("0");

    let max=array[0].length;
    for(a of array){
        if(a.length>max){
            max=a.length;
        }
    }
    
    return max;
};


var findNumbers = function(nums) {

    let digits = nums.map(getDigit);
    let result = 0;
    for(d of digits){
        if(d%2 == 0) result++;
    }
    
    return result;
 };
 
 function getDigit(number){
    let d = 0;
    
    while (number>=1){
       number = number / 10;
       d += 1;
    //    console.log(d,number);
    }
    return d;
 }
 
 

var sortedSquares = function(arr) {

    return arr.map(i=>Math.abs(i)).sort((a, b) => a - b).map(n=>n*n);
};

var duplicateZeros = function(arr) {
    let index = 0;
    let length = arr.length;
    while(index<length){
        //console.log(arr);
        if(arr[index]===0){
            //插入0
            for(let i = length-2; i>=index;i--){
                arr[i+1] = arr[i];
            }
            // arr = arr.slice(0,length);
            index += 2;
        }else{
            index++;
        }
    }

    return arr;
};

function insert(value,index,arr){
for(let i = arr.length;i>=index;i--){
    arr[i+1] = arr[i];
}

arr[index] = value;
}


var merge = function(nums1, m, nums2, n) {
    
    let index = 0;
    let jndex = 0;
    let length = nums1.length;
    
    while(m && n){
        //how to get left
        let left = nums1[index];
        let right = nums2[jndex];

        if(left<=right){
            index++;
            m--;
        }else if(right<left){
            //insert nums2[0] into nums2[0]
            for(let i = length -2; i>=index;i--){
                nums1[i+1] = nums1[i]
            }
            nums1[index]=nums2[jndex];
            jndex++;
            index++;
            n--;
        }
    }
    //没有弄完
    if(n){
        console.log("llo");
      for(let a = jndex; a<nums2.length;a++){
          nums1[index] = nums2[a];
          index ++;
      }
    }
    return nums1;
};

const nums1 = [-1,0,0,3,3,3,0,0,0];
const nums2 = [1,2,2];

var removeElement = function(nums, val) {
    let index = 0;
    while(index<nums.length){
       if(nums[index] === val){
           for(let i = index; i<nums.length;i++){
               nums[i]=nums[i+1];
           }
           nums.length = nums.length-1;
       } else{
           index++;
       } 
       
    }
    return index;
};

var removeDuplicates = function(nums) {
    let index = 0;
    while(index<nums.length){
        if(nums[index] === nums[index+1]){
            for(let i = index; i<nums.length;i++){
                nums[i] = nums[i+1];
            }
            nums.length = nums.length-1;
        }else{
            index ++;
        }
    }

    return nums; 
};

var checkIfExist = function(arr) { 
    let nums = arr.sort((a,b)=>a-b);
    let index = 0;
    while(index<nums.length){
        let item = nums[index];
        for(let i=index+1;i<nums.length;i++){
            if(nums[i]==2*item || nums[i] == item/2) return true;
        }
        index++;
    }
    
    return false;
};

var validMountainArray = function(A) {
    //find the peak
    let index = 1;
    let peaks = [];
    let valleys = [];
    let parells=[];
    while(index<A.length-1){
        
       let current = A[index];
       console.log(current);
       if(current > A[index+1] && current>A[index-1]){
           peaks.push(current);
       }
       if(current < A[index+1] && current<A[index-1]){
           valleys.push(current);
       }
       if(current === A[index+1] || current === A[index-1]){
           parells.push(current);
       }

       index++;
    }
    
    if(peaks.length == 1 && valleys.length == 0 && parells.length == 0) return true;

    return false;
};

var replaceElements = function(arr) {
    let index = 1;
    while(index<arr.length){
        let max=arr[index];
        for(let i=index+1; i<arr.length;i++){
           if(max<arr[i]) max = arr[i];
        }

        arr[index-1] = max;
        index++;
    }
    arr[arr.length-1] = -1;
    return arr;
};

//将O(n2)变成O(n)的复杂度
var removeDuplicatesOn = function(nums) {
    // let index = 0;
    let i = 0;
    let j = 1;
    if(nums.length == 0) {
        return 0;
    }
    while(j<nums.length){
        if(nums[j] !== nums[i]){
            i++;
            nums[i] = nums[j];
        }
        j++;
    }

    //nums.length = i;

    return nums; 
}

var moveZeroes = function(nums) {
    let read = 0;
    let write = 0;
    while(read < nums.length){
        if(nums[read] !== 0){
            nums[write] = nums[read];
            write++;
        }
        read++;
    }

    for(let i = write; i<nums.length;i++){
        nums[i] = 0;
    }
   return nums;  
};

var sortArrayByParity = function(A) {
    let write = 0;
    let B = []

    for(let read = 0; read<A.length;read++){
       if(A[read]%2 == 0){
           B[write] = A[read];
           write++;
       }

    }

    for(let read = 0; read<A.length;read++){
        if(A[read]%2 == 1){
            B[write] = A[read];
            write++;
        }
     }
    
     return B;
};


var heightChecker = function(nums) {
    let target = nums.slice().sort((a,b)=>a-b);
    let index = 0;
    let count = 0;

    while(index<nums.length){
        console.log(nums[index],target[index]);
        if(nums[index]!==target[index]){
            count+=1;
        }

        index++;
    }

    return count;
};

var thirdMax = function(nums) {
    let targets = nums.slice().sort((a,b)=>b-a);
    let max = targets[0];
    let read = 0;
    let write = 0;

    while(read<nums.length){

       if(targets[read] < max){
          max = targets[read];
          write++;
       }
       if( write == 2){
        return max;
    }

       read++;
    }

    if(write<3){
        return targets[0];
    }

};

var findDisappearedNumbers = function(nums) {
    let disappear = [];
    
    for(let i = 0; i<nums.length;i++){
        let j = Math.abs(nums[i])-1;
        nums[j] = Math.abs(nums[j])*-1;
    }

    for(let i = 0; i<nums.length;i++){
       if(nums[i]>0){
           disappear.push(i+1);
       }
    }

    return disappear;
};

console.log(findDisappearedNumbers([1,1]));