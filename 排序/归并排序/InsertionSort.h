using namespace std;

//插入排序 （对 arr[l, r]范围进行插入排序） 
template<typename T>
void insertionSort(T arr[], int l, int r) {
	
	for( int i = l + 1; i <=  r; i++) {
		
		T e = arr[i];
		int j;
		for(j = i; j > l && arr[j - 1] > e; j--){
			arr[j] = arr[j-1];
		} 
		arr[j] = e; 
	}
}
	

