using namespace std;

//单路快排 
//对arr[l, r]部分进行patition操作
//返回p，使得arr[l,p-1]小于arr[p], arr[p+1, r]大于arr[p] 
template<typename T>
int __patition1(T arr[], int l, int r) {
	
	
	//优化： 随机选择基准数， 防止在有序情况下时间复杂度退化成n^2 
	swap( arr[l] , arr[rand()%(r-l+1)+l] );

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
void __quickSort1(T arr[], int l, int r) {
//	if(l >= r){
//		return;
//	}
	if(r - l <= 15){
		insertionSort(arr, l, r);
		return;
	}
	int p = __patition1(arr, l, r);
	__quickSort1(arr, l, p-1);
	__quickSort1(arr, p+1, r); 
}

template<typename T>
void quickSort1(T arr[], int n) {
	
	srand(time(NULL)); 	//随机数种子， 为了优化有序数组情况 
	__quickSort1(arr, 0, n-1);
}

