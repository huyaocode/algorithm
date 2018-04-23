using namespace std;

//双路快排 
//将等于基准值的元素分到左右两个数组 
template<typename T>
int __patition2(T arr[], int l, int r) {
	
	//优化： 随机选择基准数， 防止在有序情况下时间复杂度退化成n^2 
	swap( arr[l] , arr[rand()%(r-l+1)+l] );
	T v = arr[l];
	
	//arr[l-1，i) <= v; arr(j,r] >= v
	int i = l+1, j = r;
	while(true){
		while(i <= r && arr[i] < v ){
			i++;
		}
		while(j >= l+1 && arr[j] > v){
			j--;
		}
		if( i > j){
			break;
		}
		swap(arr[i], arr[j]);
		i++;
		j--;
	}
	swap(arr[l], arr[j]);
	
	return j;
}


//对arr[l, r]部分进行快速排序 
template<typename T>
void __quickSort2(T arr[], int l, int r) {
//	if(l >= r){
//		return;
//	}
	if(r - l <= 15){
		InsertionSort::insertionSort(arr, l, r);
		return;
	}
	int p = __patition2(arr, l, r);
	__quickSort2(arr, l, p-1);
	__quickSort2(arr, p+1, r); 
}

template<typename T>
void quickSort2(T arr[], int n) {
	
	srand(time(NULL)); 	//随机数种子， 为了优化有序数组情况 
	__quickSort2(arr, 0, n-1);
}

