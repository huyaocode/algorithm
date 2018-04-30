#include<iostream>
#include<ctime>
#include<cassert>
#include<vector>   

using namespace std;

namespace SortTestHelper{
	//生成有n个元素的随机数组，每个元素随机范围 【rangeL, rangeR】 
	int *generateRandomArray(int n, int rangeL, int rangeR){
		
		assert(rangeL <= rangeR);
		int *arr = new int[n];
		srand(time(NULL));
		for(int i = 0; i <n; i++){
			arr[i] = rand() % (rangeR - rangeL + 1) + rangeL;
		}
		
		return arr;	
	}
	
	//生成一个近乎有序的数组
	int *generateNearlyOrderedArray(int n, int swapTimes){
		
		//先生成一个0到n-1有序数组， 再随机挑选swapTimes对进行交换 
		int *arr = new int[n];
		for(int i = 0; i < n; i++) {
			arr[i] = i;
		}
		srand(time(NULL));
		for( int i = 0; i < swapTimes; i++) {
			int posx = rand() % n;
			int posy = rand() % n;
			swap( arr[posx], arr[posy] );
		}
		return arr;
	}
	
	//生成一个有序的数组
	int *generateAscendingOrderArray(int n){ 
	
		int *arr = new int[n];

		for(int i = 0; i < n; i++) {
			arr[i] = i;
		}
		return arr;
	}
	//生成一个逆序的数组
	int *generateDescendingDisordeArray(int n){
		
		int *arr = new int[n];
		for(int i = n-1; i >= 0; i--) {
			arr[i] = i;
		}
		return arr;
	}
	
	//打印排序 
	template<typename T>
	void printArray(T arr[], int n) {
		
		for(int i = 0; i<n; i++) {
			cout << arr[i] << " ";
		}
		cout << endl;
		
		return;
	}
	
	//测试是否排序成功
	template<typename T>
	bool isSorted(T arr[], int n) {
		
		for(int i = 0; i < n-1; i++){
			if(arr[i] > arr[i+1]){
				return false;
			}
		}
		
		return true;
	} 
	
	//测试排序， 打印执行时间 
	//传入函数名， 具体排序函数， 测试数组， 测试数组长度 
	template<typename T>
	void testSort(string sortName, void(*sort)(T[], int n), T arr[], int n ) {
		
		clock_t startTime = clock();
		sort(arr, n);
		clock_t endTime = clock();
		
		assert( isSorted(arr, n) );
		//CLOCKS_PER_SEC 表示每秒钟时钟运行周期的个数 
//		cout << sortName << " : " << double(endTime - startTime) / CLOCKS_PER_SEC << " s" << endl;
		cout << double(endTime - startTime) / CLOCKS_PER_SEC << endl;
		return;
	}
	
	//拷贝一个int型数组，以便用于比较同一数据下不同函数的效率
	int *copyIntArray(int a[], int n) {
		
		int* arr = new int[n];
		copy(a, a+n, arr);
		return arr;
	} 
}
