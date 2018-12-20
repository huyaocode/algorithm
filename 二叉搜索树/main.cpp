#include<iostream>
using namespace std;

/**
 * 二叉搜索树 Binary Search Tree
 */
template<typename Key, typename Value>
class BST {

private:
  //节点结构体
  struct Node{ 
    Key key;      //键
    Value value;  //值
    Node *left;   //左孩子，指向Node类型的指针
    Node *right;  //右孩子，指向Node类型的指针
    //构造函数
    Node(Key key, Value value) {
      this->key = key;
      this->value = value;
      this->left = this->right = NULL; //左右孩子指向空
    }
  };

  Node *root; //根节点指针
  int count;  //节点个数

public:
  BST(){
    root = NULL;
    count = 0;
  }
  ~BST(){
    destroy( root );
  }
  int size(){
    return count;
  }
  int isEmpty(){
    return count == 0;
  }
  //插入节点
  void insert(Key, key, Value value) {
    root = insert(root, key, value);
  }
  //判断树中是否包含某个键(key)为key的元素
  bool contain(Key key) {
    return contain(root, key)
  }
  //查找元素
  Value* search(Key key) {
    return search(root, key);
  }
  //前序遍历
  void preOrder() {
    preOrder(root);
  }
  //中序遍历
  void inOrder() {
    inOrder(root);
  }
  //后序遍历
  void postOrder() {
    postOrder(root);
  }
private:
  /**
   * 插入节点的私有函数
   * 向node为根的二叉搜索树中，插入节点(key, value)
   * 返回插入节点后二叉搜索树的根
   */
  Node* insert(Node *node, Key key, Value value) {
    //如果节点为空，那么生成一个节点返回
    if(node == NULL) {
      count ++;
      return new Node(key, value);
    }
    //如果节点的key值相同，那么让新的value覆盖旧的value
    if( key == node->key ) {
      node->value = value;
    }
    //key值不等，需要查找它的左右子树
    else if( key < node->key) {
      node->left = insert(node->left, key, value);
    }
    else {
      node-> right = insert(node->right, key, value)
    }
    return node;
  }
  /**
   * contain函数，递归实现
   */
  bool contain(Node *node, Key key) {

    if(node == NULL) {
      return false;
    }

    if(node->key == key) {
      return true;
    }
    else if(node->key > key){
      return contain(node->left, key);
    }
    else {
      return contain(node->right, key);
    }
  }
  /**
   * 在以node为根的二叉搜索树中查找key对应的value
   * 如果不存在这个key的话返回NULL, 所以返回类型为Value*
   */
  Value* search(Node* node, Key key) {
    
    if(node == NULL) {
      return NULL;
    }
    if(node->key == key) {
      return &(node->value);
    }
    else if(key < node->key) {
      return search(node->left, key);
    }
    else{
      return search(node->right, key);
    }
  }
  /**
   * 前序遍历
   */
  void preOrder(Node* node){
    if(node != NULL) {
      cout << node->key << endl;
      preOrder(node->left);
      preOrder(node-> right);
    }
  }
  /**
   * 中序遍历
   */
  void inOrder(Node* node) {
    if(node != NULL) {
      inOrder(node->left);
      cout << node->key << endl;
      inOrder(node-> right);
    }
  }
  /**
   * 后序遍历
   */
  void postOrder(Node* node) {
    if(node != NULL) {
      postOrder(node->left);
      postOrder(node->right);
      cout << node->key << endl;
    }
  }
  /**
   * 销毁以node为根的节点
   * 采用后序遍历逐个释放空间
   */
  void destroy(Node* node){
    if(node != NULL) {
      //当左右孩子都销毁掉后才释放自己的空间
      destroy(node->left);
      destroy(node->right);
      delete node;
      count --;
    }
  }
};

int main()
{


  return 0;
}