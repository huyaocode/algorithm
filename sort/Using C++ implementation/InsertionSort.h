using namespace std;


//插入排序 
template<typename T>
void basicInsertionSort(T *arr, int n) {
	
	//在每轮中，每一次看当前元素是否比前一个大，是的话就交换 
	//之所以从1开始是因为第一个元素只有它自己，已经就算是有序了 
	for( int i = 1; i < n; i++) {
		//向前寻找元素arr[i]合适的插入位置
		for(int j = i; j > 0; j--) {
			//如果当前要插的元素比前一个元素大，那么就与前一个元素交换 
			if( arr[j] < arr[j-1] ) {
				swap( arr[j], arr[j-1] );	//交换操作比比较操作更耗时，所以这里导致这种写法实际上比选择更慢 
			} else {	//如过前一个比前一个元素小，那就放心的跳出这次循环。这也是理论上插入排序在N^2排序中相对优秀的原因 
				break;
			}
		} 
	} 
}

//插入排序 （优化） 
template<typename T>
void insertionSort(T *arr, int n) {
	//优点：省了插入操作，还可提前结束内层循环 
	//插入排序在大多数数据有序的情况下再排序效率是极高的，甚至比NlogN的排序算法快
	
	//优化方法： 
	//将要排序的元素先暂存一下，然后看它是否适合放在当前位置，
	//判断方法就是和前一个数进行比较，如果前一个数比当前数小，那么说明不适合，就将前一个位置的数赋值到当前位置上，依次向前 
	for( int i = 1; i < n; i++) {
		//向前寻找元素arr[i]合适的插入位置
		T e = arr[i];
		int j;	//j用来保存e应该插入的位置 
		for(j = i; j > 0 && arr[j - 1] > e; j--){	//每次比较j前位置是不是比e大 
			arr[j] = arr[j-1];
		}	//循环完后这个j就是放的e应该存放的位置 
		arr[j] = e; 
	} 
}

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
	

