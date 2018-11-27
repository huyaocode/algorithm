using namespace std;

//三路快排 
// 将arr[l, r]分为  <v; ==v; >v三个部分 ，之后就只对 < v; >v; 两个部分进行递归 


template<typename T>
void __quickSort3(T arr[], int l, int r) {
//	if(l >= r){
//		return;
//	}
	if(r - l <= 15){
		insertionSort(arr, l, r);
		return;
	}
	
	//patition
	swap(arr[l], arr[rand()%(r-l+1)+l] );
	T v = arr[l];
	 
	//将数组划分成3个区间 
	int lt = l; 	//arr[l+1, lt] < v
	int gt = r + 1;	//arr[gt,r]>v
	int i = l + 1;	//arr[lt+1,i) == v	
	while( i < gt){
		if(arr[i] < v){	//如果小于基准数， 就将它放到小于区间最右，放的方式就是和等于区间的第一个元素进行交换 
			swap(arr[i], arr[lt + 1]);
			lt++;
			i++;
		} else if( arr[i] > v){	//如果大于基准数，就将它放到大于区间的前一个位置 ， 放的方法就是和那个元素进行交换 
			swap(arr[i], arr[gt - 1]);
			gt--;
		} else {	//等于基准数 
			i++;
		} 
	}

	swap(arr[l], arr[lt]);	//将基准值和小于区间最右的元素进行交换
	
	__quickSort3(arr, l, lt-1);
	__quickSort3(arr, gt, r);
}

template<typename T>
void quickSort3(T arr[], int n) {
	srand(time(NULL)); 	//随机数种子， 为了优化有序数组情况 
	__quickSort3(arr, 0, n-1);
}

