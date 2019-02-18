// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

using System;

public class Kata 
{
    public static int FindSmallestInt(int[] args) 
    {
      int[] newArr = args;
      Array.Sort(newArr);
      return newArr[0];
    }
    /*
      OR
    */
    public static int FindSmallestInt2(int[] args)
    {
      return args.Min();
    }
}