#include "SortTestHelper.h"
#include "Student.h"

#include "SelectionSort.h"
#include "InsertionSort.h"

#include "MergeSort.h"
#include "QuickSort.h"
#include "QuickSort1.h"
#include "QuickSort2.h"
#include "QuickSort3.h"
#include "HeapSort.h"

int main()
{
	int n = 100000;

	cout << "随机数" << endl;
	int *arr1 = SortTestHelper::generateRandomArray(n, 0, n);
	int *arr2 = SortTestHelper::copyIntArray(arr1, n);
	int *arr3 = SortTestHelper::copyIntArray(arr1, n);

	SortTestHelper::testSort("归并排序", mergeSort, arr1, n);
	SortTestHelper::testSort("快速排序", quickSort2, arr2, n);
	SortTestHelper::testSort("堆排序", heapSort, arr3, n);

	delete[] arr1;
	delete[] arr2;
	delete[] arr3;

	cout << "近乎有序数组" << endl;
	arr1 = SortTestHelper::generateNearlyOrderedArray(n, 10);
	arr2 = SortTestHelper::copyIntArray(arr1, n);
	arr3 = SortTestHelper::copyIntArray(arr1, n);

	SortTestHelper::testSort("归并排序", mergeSort, arr1, n);
	SortTestHelper::testSort("快速排序", quickSort2, arr2, n);
	SortTestHelper::testSort("堆排序", heapSort, arr3, n);

	delete[] arr1;
	delete[] arr2;
	delete[] arr3;

	cout << "大量重复的数" << endl;
	arr1 = SortTestHelper::generateRandomArray(n, 0, 10);
	arr2 = SortTestHelper::copyIntArray(arr1, n);
	arr3 = SortTestHelper::copyIntArray(arr1, n);

	SortTestHelper::testSort("归并排序", mergeSort, arr1, n);
	SortTestHelper::testSort("快速排序", quickSort2, arr2, n);
	SortTestHelper::testSort("堆排序", heapSort, arr3, n);

	delete[] arr1;
	delete[] arr2;
	delete[] arr3;

	return 0;
}
