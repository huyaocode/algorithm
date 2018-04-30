#include<cassert>
using namespace std;

template<typename Item>
class MaxHeap{
	
private:
	Item* data;
	int count;
	int capacity;
	
	void shiftUp(int k){	//尝试将k这个元素向上调整顺序 
		while(k > 1 && data[k/2] < data[k] ){
			swap( data[k/2], data[k] );
			k /= 2;
		} 
	}
	
	void shiftDown(int k) {	//尝试将k这个元素向下调整顺序 
		
		while( 2*k <= count ) {	//只要有孩子就遍历下去 
			//在此轮循环中， data[k]和data[j]交换位置
			int j = 2*k;	 
			if( j+1 <= count && data[j+1] > data[j]){	//找出左右孩子中最大的那个 
			 	j = j + 1;
			}
			if(data[k] >= data[j]){		//如果 data[k] >= data[j] 说明左右孩子都比自己小， 已经完成了调整，需要跳出 
				break;
			}
			swap(data[k], data[j]);
			k = j;
		} 
	}
	
	
public:
	//构造函数， 基础堆排序实现 
	MaxHeap(int capacity){	
		data = new Item[capacity+1];
		count = 0;
		this->capacity = capacity;
	}
	
	//构造函数，常见堆排序实现方法 
	//缺点：耗费额外空间，
	//优点：构建堆的时间复杂度下降到 O(n) 
	MaxHeap(Item arr[], int n){	
		data = new Item[n+1];
		capacity = n;
		for(int i = 0; i <n; i++) {	//拷贝 
			data[i+1] = arr[i];
		}
		count = n;
		for( int i = count/2; i >= 1; i--){	//进行向下调整 
			shiftDown(i);
		}
	}
	
	~MaxHeap(){		//析构 
		delete[] data;
	}
	
	int size(){		//返回堆大小 
		return count;
	}
	
	bool isEmpty(){	//堆是否为空 
		return count == 0;
	}
	
	void insert(Item item) {
		
		assert( count + 1 <= capacity );
		data[count+1] = item;
		count++;
		shiftUp( count );
	}
	
	Item extractMax(){	//取出堆中最大的数 
		
		assert( count > 0 );
		Item max = data[1];
		
		swap( data[1], data[count]);	
		count--; 
		shiftDown(1);
		return max;
	}
};
