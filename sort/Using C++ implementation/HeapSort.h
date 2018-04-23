#include"MaxHeap.h"
using namespace std;

//从0开始逐个添加建堆，再逐个取出，删除堆 
template<typename T>
void heapSort1(T arr[], int n) {
	
	MaxHeap<T> maxheap = MaxHeap<T>(n); 
	for( int i = 0; i < n; i++){
		maxheap.insert(arr[i]);
	}
	
	for(int i = n - 1; i >= 0; i--){
		arr[i] = maxheap.extractMax();
	}
}

// 直接将数组上从 length / 2部分开始往前向下调整 
template<typename T>
void heapSort2(T arr[], int n) {
	
	MaxHeap<T> maxheap = MaxHeap<T>(arr, n);	//方式2构建堆 
	for( int i = n-1; i >= 0; i--){		//取出最大的 
		arr[i] = maxheap.extractMax();
	}
}
