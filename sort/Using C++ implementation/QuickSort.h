using namespace std;

//单路快排 
//对arr[l, r]部分进行patition操作
//返回p，使得arr[l,p-1]小于arr[p], arr[p+1, r]大于arr[p] 
template<typename T>
int __patition(T arr[], int l, int r) {
	
	T v = arr[l];
	//arr[l+1, j] < v, arr[j+1, i] > v
	int j = l;
	for(int i = l+1; i <= r; i++){
		if(arr[i] < v){
			swap(arr[i], arr[j+1]);
			j++;
		}
	} 
	swap(arr[l], arr[j]);
	
	return j;
}

//对arr[l, r]部分进行快速排序 
template<typename T>
void __quickSort(T arr[], int l, int r) {
	if(l >= r){
		return;
	}
//	if(r - l <= 15){
//		InsertionSort::insertionSort(arr, l, r);
//		return;
//	}
	int p = __patition(arr, l, r);
	__quickSort(arr, l, p-1);
	__quickSort(arr, p+1, r); 
}

template<typename T>
void quickSort(T arr[], int n) {
	
	srand(time(NULL)); 	//随机数种子， 为了优化有序数组情况 
	__quickSort(arr, 0, n-1);
}

