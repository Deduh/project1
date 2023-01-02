 function isPalindrome(x)
 {
     let arr1 = Array.from(x.toString())
     let arr2 = Array.from(x.toString()).reverse()
     for (let i = 0; i < arr1.length; i++)
     {
         if (arr1[i] !== arr2[i]) return false
     }
     return true
 }
 console.log(isPalindrome(121))
 console.log(isPalindrome(123))
 console.log(isPalindrome(123321))
 console.log(isPalindrome(-123321))
