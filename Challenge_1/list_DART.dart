/*
    Challenge No. 1

    Write a function that takes a list/array of positive integers and returns 
    True if the list/array contains consecutive numbers, False if it doesn't.
    
    E.g:
    [1, 2, 3, 4] = True
    [2, 3, 5] = False
    [7, 8, 9] = True
    [5, 3, 2, 4] = True
 */
List test1 = [1, 2, 3, 4];
List test2 = [2, 3, 5];
List test3 = [7, 8, 9];
List test4 = [5, 3, 2, 4];
String test5 = 'Hello String';
List test6 = [];

void main() {
  bool xy = containsConsecutiveNumbers(test6);
  print(xy);
}

bool containsConsecutiveNumbers(List arr) {
  if (arr.isEmpty) return false;
  arr.sort();
  bool tempBool = true;
  
  for (int i = 0; i < arr.length; i++) {
    if (i + 1 < arr.length) {
      if ((arr[i + 1] - arr[i]) != 1) {
        tempBool = false;
        return tempBool;
      }
    } else {
      return tempBool;
    };
  }
  return tempBool;
}
