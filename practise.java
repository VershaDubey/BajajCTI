// import java.util.Arrays;

// class GfG {

//     static boolean twoSum(int[] arr, int target){
       
//         Arrays.sort(arr);

//         int left = 0, right = arr.length - 1;

//         // Iterate while left pointer is less than right
//         while (left < right) {
//             int sum = arr[left] + arr[right];

//             // Check if the sum matches the target
//             if (sum == target)
//                 return true;
//             else if (sum < target)
            
//             // Move left pointer to the right
//                 left++; 
//             else
            
//             // Move right pointer to the left
//                 right--;
//         }
//         // If no pair is found
//         return false;
//     }

//     public static void main(String[] args){
//         int[] arr = { 0, -1, 2, -3, 1 };
//         int target = -2;

//         if (twoSum(arr, target)) {
//             System.out.println("true");
//         }
//         else {
//             System.out.println("false");
//         }
//     }
// }

// import  java.util.Arrays;
// class gfg{ 
//     statuc boolean twoSum(int[] arr, int target){
//         Array.sort(arr);
//         int left =0 ; right = arr.length -1;
//         while(left < right)[
//             int sum = arr[left] + arr[right];
//             if(sum == target )
//             return true;
//             else if(sum < target )
//             return  true;
//             else if(sum < target);
//             left ++;
//             else 
//             right--;
//                     ]
//                     return false;
//     }
//     public static void main( String[] args){
//         int[] arr = {0,-1,2,-3,1};
//         int target = -2;
//         if(twoSum(arr, target)){
//             System.out.println("true");
//         }
//         else{
//             System.out.println("false");
//         }
//     }
// }


// import java.util.HashSet;

// class GfG {

//     static boolean twoSum(int[] arr, int target){

//         // Create a HashSet to store the elements
//         HashSet<Integer> set = new HashSet<>();

//         for (int i = 0; i < arr.length; i++) {

//             // Calculate the complement that added to
//             // arr[i], equals the target
//             int complement = target - arr[i];

//             // Check if the complement exists in the set
//             if (set.contains(complement)) {
//                 return true;
//             }

//             // Add the current element to the set
//             set.add(arr[i]);
//         }
//         // If no pair is found
//         return false;
//     }

//     public static void main(String[] args){

//         int[] arr = { 0, -1, 2, -3, 1 };
//         int target = -2;

//         if (twoSum(arr, target))
//             System.out.println("true");
//         else
//             System.out.println("false");
//     }
// }
// import java.util.HashSet;
// class gfg {
//     static boolean twoSum(int[] arr, int target){
//         HashSet<Integer> set =. new HashSet<>();
//         for(int i =0 ; i<arr.length;i++){
//             int complement  = target - arr[i];
//             if(set.contains(complement)){
//                 return true;
//             }
//             set.add(arr[i]);
//         }

//         return false;
//     }
//     public static void main(String[] args){
//         int [] arr = {0,-1,2,-3,1};
//         int target = -2;
//         if(twoSum(arr,target))
//         System.out.println("true");
//         else 
//         System.out.println("false");
//     }

// }



// Java program to Move all negative numbers
// to beginning and positive to end

// class GfG {

//     static int[] move(int[] arr) {
//         int left = 0, right = arr.length - 1;
//         while (left < right) {

//             // increment left while arr[left]
//             // is negative
//             while (left < right && arr[left] < 0) {
//                 left++;
//             }

//             // decrement right while arr[right]
//             // is positive
//             while (right > left && arr[right] > 0) {
//                 right--;
//             }

//             // swap the two values.
//             if (right > left) {
//                 int temp = arr[left];
//                 arr[left] = arr[right];
//                 arr[right] = temp;
//                 left++;
//                 right--;
//             }
//         }

//         return arr;
//     }

//     public static void main(String[] args) {
//         int[] arr = {-12, 11, -13, -5, 6, -7, 5, -3, -6};
//         int[] ans = move(arr);

//         for (int num : ans) {
//             System.out.print(num + " ");
//         }
//         System.out.println();
//     }
// }


// class gfg {
//  static left = 0,right =arr.length - 1;
//  while(left < right) {
//     while (left < right && arr[left] < 0){
//         left++;
//     }
//     while(right > left && arr[])
//  }




// }


 



public static void main(String[] args){
    int [] nums = {1,23,34,56,19,34,98};
    int target = 19;
    int ans = linearSearch(nums,target);
    System.out.println(nums, target);
}
static int linearSearch(int[] arr, int target){
    if(arr.length == 0){
        return -1;
    }
    for(int index=0;index<arr.length;index++){
        int element = arr[index];
        if(element == target){
            return index;
        }
    }
    return -1;
    
}

int [] nums = {1,2,13,24,1,9,46};
int target = 13;
int ans = linearSearch(nums,target);
System.out.println(nums,target);
static int linearSearch(int[] arr, int target){
    if(arr.length == 0){
        return -1;
    }
    for (int index=0;index<arr.length;index++){
        int element = arr[index];
        if(element == target){
            return index;
        }
    }
    return -1;
}
 int [] nums = {1,2 ,3 45};
 int target  = 45;
 int ans = linearSearch(num, target );
 System.out.println(nums,target);

static int linearSearch(int [] arr, int target ){
    if(ar.length == 0){
        return -1;
    }
    for(int index =0; index<arr.lengthn; index++){
        int element = arr[index];
        if(element == target){
            return index;
        }
    }
    return -1;
}


int[] nums = {23,6,69,6,82,64};
int target = 82;
int ans =. linearSearch(num, target);
System.out.println(nums,target);
static int linearSearch(int [] arr, int target){
    if(arr.length == 0){
        return -1;
    }
    for(int index=0; index<arr.length;index++){
        int element=arr[index];
        if(element == target){
            return index;
        }
    }
    return -1;
}

int[] nums = {};
int target = ;
int ans =  linearSearch(nums,target);
System.out.println(nums,target);
static int linearSearch(int [] arr, int target){
    if(arr.length == 0){
        return -1;
    }
    for(int index=0;index<arr.length;index++){
        int element = arr[index];
        if(element == target ){
            return index;
        }
    }
    return -1;
}

int [] nums = {};
int target = ;
int ans = linearSearch(nums , target);
System.out.println(nums,target);
static int linearSearch(int[] arr, int target ){
    if(arr.length == 0){
        return -1;
    }
    for(int index= 0;index<arr.length;index ++){
        int element = arr[index];
        if(element == target){
            return index;
        }
    }
    return -1;
}