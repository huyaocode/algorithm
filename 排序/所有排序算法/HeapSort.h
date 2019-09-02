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
void heapSort2(T arr[], int n){
	
	MaxHeap<T> maxheap = MaxHeap<T>(arr, n);	//方式2构建堆 
	for( int i = n-1; i >= 0; i--){		//取出最大的 
		arr[i] = maxheap.extractMax();
	}
}

///////////////////////////////////////////// 
// 以上为用类来实现堆排序，下面是常规的堆排序 
////////////////////////////////////////////
 
template<typename T>
void __shiftDown(T arr[], int n, int k){
	
	while( 2*k+1 < n ) {	//只要有孩子就遍历下去 
		//在此轮循环中， arr[k]arr[j]交换位置
		int j = 2*k + 1;	 
		if( j+1 < n && arr[j+1] > arr[j]){	//找出左右孩子中最大的那个 
		 	j = j + 1;
		}
		if(arr[k] >= arr[j]){		//如果 data[k] >= data[j] 说明左右孩子都比自己小， 已经完成了调整，需要跳出 
			break;
		}
		swap(arr[k], arr[j]);
		k = j;
	}
}

//原地堆排 
template<typename T>
void heapSort(T arr[], int n){
	//heapify,先将整个数组按照堆排序的规则拍好 
	for( int i = (n-1)/2; i >=0 ; i-- ){
		__shiftDown(arr, n, i); 
	}
	//生成有序数组，交换数组第一个元素与倒数的元素，即将第i大的数放到第i个位置,
	//后对交换后的第一个元素向下调整， 调整的界限是调到i 
	for(int i = n-1; i>0; i-- ){
		swap( arr[0], arr[i] );
		__shiftDown(arr, i, 0); 
	}
} 





