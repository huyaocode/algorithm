#include <algorithm>
using namespace std;

/*
	O(nlogn)先用二分等思想将问题化解到logn层级，之后每个层级用 O(n)级别的算法做事情
 */ 


/**
 * 将arr[l...mid]和arr[mid+1...r]两部分进行归并为一个有序数组
 * 
 * 先使用一个临时数组保存这段数组，即两个有序队列
 * 再分别判断这两个队列的头谁更小，将更小出队的赋值回arr
 * 
 * 注意处理越界情况，即左边的队列空了的时候，和右边的队列空了的时候
 * 当一个队列空了，那么到另一个队列中去取数据
 */
template<typename T>
void __merge(T arr[], int l, int mid, int r){
	T aux[r - l + 1];	//临时暂存数组 
	//将arr[l, r] 赋值放到aux[0, r-l] 
	for(int i = l; i <= r; i++){
		aux[i - l] = arr[i];
	}
	// i 为前一个区间的起始点， j = m+1 为后一个区间的起始点 
	int i = l, j = mid + 1;
	
	for(int k = l; k <= r; k++) {
		// 边界判断， 如果左边界都大于左边界应有的界限就用右区间赋值 
		if(i > mid){
			arr[k] = aux[j - l];
			j++; 
		}
		else if(j > r){		//如果右边届大于了右边界应有的边界就用左区间赋值 
			arr[k] = aux[i - l];
			i++;
		}
		//正常交换, 在此之前因该考虑越界的情况 
		else if(aux[i - l] < aux[j - l]){	
			arr[k] = aux[i - l];
			i++;
		}
		else {
			arr[k] = aux[j - l];
			j++;
		}
	}
}
 
 //递归使用归并排序，对arr[l..r]的范围进行排序 
template<typename T>
void __mergeSort(T arr[], int l, int r){
	
	if(l >= r) {	//表示处理的数据集为空或不存在 
		return; 
	}
	//优化，范围小于16时使用插入排序， 因为nlogn在n小的时候没太大优势 
//	if(r - l <= 15){
//		InsertionSort::insertionSort(arr, l, r);
//		return;
//	}
	
	
	int mid = (l + r) / 2; //定义递归的重点 
	__mergeSort(arr, l, mid);
	__mergeSort(arr, mid+1, r);
	//这里是一个比较大的改进，当前一个部分的最大值小于后一个部分的最小值的时候起始数组已经有序了 ， 所以在这里添加判断会让排序有序数变得快很多
	if(arr[mid] > arr[mid+1]){
		__merge(arr, l, mid, r);	//归并 
	}
}

/**
 	归并排序
 	O(nlogn)
	缺点: 需要额外使用n存储空间 
 */ 
template<typename T>
void mergeSort(T arr[], int n){
	
	__mergeSort(arr, 0, n-1);
}


//自底向上的归并排序 
//可对链表进行nlogn级别排序 
template<typename T>
void mergeSortBU(T arr[], int n){
	
	for(int sz = 1; sz <= n; sz += sz){	//对进行排序的数组进行遍历  (确定每次归并多少个， 第一次每轮2个， 第二次4个....直到每轮归并n个)
		for(int i = 0; i + sz < n; i += sz + sz){	//每次把整个数组按照sz大小归并完一遍 （从数组第0个元素， 按照 sz+sz将数组中每个区间拿去归并）
			//对arr[i, i+sz-1]和arr[i+sz, i+sz*2-1]  
			__merge(arr, i, i + sz - 1, min(i + sz + sz - 1, n-1) );
		}
	} 
}





