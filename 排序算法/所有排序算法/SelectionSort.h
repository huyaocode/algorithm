using namespace std;

namespace SelectionSort{

	//选择排序 
	template<typename T>
	void selectionSort(T *arr, int n){
		
		//每次都把后面最小的那个值与现在的第i个位置交换，那么完成后第i个位置就是第i小的元素，就排号序了 
		for(int i = 0; i < n; i++) {
			// 寻找[i, n)区间内的最小值 
			int minIndex = i;
			for(int j = i+1; j <n; j++) {
				if(arr[j] < arr[minIndex]){
					minIndex = j;
				}
			}
			swap(arr[i], arr[minIndex]);
		}
	}

}
