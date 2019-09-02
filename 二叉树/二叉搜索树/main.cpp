#include<iostream>
#include<queue>
#include<cassert>
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
    //复制一个Node
    Node(Node *node){
      this.key = node->key;
      this->value = node->value;
      this->left = node->left;
      this->right = node->right;
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
  //层序遍历
  void levelOrder(){

    queue<Node*> q;
    q.push(root);

    while( !q.empty() ){
      Node *node = q.front();
      q.pop();
      
      cout << node->key << endl;
      if(node->left){
        q.push( node-> left );
      }
      if(node->right){
        q.push( node->right );
      }
    }
  }
  // 寻找最小的键值
  Key minimum() {
    assert( count != 0 );
    Node* minNode = minimum(root);
    return minNode->key;
  }
  // 寻找最大的键值
  Key maximum() {
    assert( count != 0 );
    Node* maxNode = maximum(root);
    return maxNode->key;
  }
  //从二叉树中删除最小值所在的节点
  void removeMin() {
    if( root ) {
      root = removeMin(root);
    }
  }
  //从二叉树中删除最大值所在的节点
  void removeMax() {
    if( root ){
      root = removeMax(root);
    }
  }
  // 从二叉树中删除键值为key的节点
  void remove(Key key) {
    root = remove(root, key);
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
  /**
   * 在以node为根的二叉搜索树中，返回子树中最小的节点 
   */
  Node* minimum(Node* node) {
    if(node->left == NULL){
      return node;
    }
    return minimum(node->left);
  }
  /**
   * 在以node为根的二叉搜索树中，返回子树中最大的节点 
   */
  Node* maximum(Node* node) {
    if(node->right == NULL){
      return node;
    }
    return maximum(node->right);
  }
  /**
   * 删除以node为根的二分搜索树中的最小节点
   * 返回删除节点后新的二分搜索树的根
   */
  Node* removeMin(Node* node) {
    if( node->left == NULL) {
      Node* rightNode = node->right;
      delete node;
      count --;
      return rightNode;
    }
    node->left = removeMin(node->left);
    return node;
  }
  /**
   * 删除以node为根的二分搜索树中的最大节点
   * 返回删除节点后新的二分搜索树的根
   */
  Node* removeMax(Node* node) {
    if(node->right == NULL){
      Node* leftNode = node->left;
      delete node;
      count --;
      return leftNode;
    }
    node->right = removeMax(node->right);
    return node;
  }
  /**
   * 删除以node为根的二分搜索树中键值为key的节点
   * 返回删除节点后新的二分搜索树的根
   */
  Node* remove(Node* node, Key key) {
    if(node == NULL) {
      //表示没有找到这个节点
      return NULL;  
    }
    if(key < node->key) {
      node->left = remove(node->left, key);
      return node;
    }
    else if( key > node->key ) {
      node->right = remove(node->right, key);
      return node;
    } 
    else {  // key == node->key
      if( node->left == NULL ){
        Node* rightNode = node->right;
        delete node;
        count --;
        return rightNode;
      }
      if(node->right == NULL){
        Node* leftNode = node->left;
        delete node;
        count --;
        return leftNode;
      }

      // node->left != NULL && node->right != NULL
      //先找出右子树中的最小值，暂存一下
      Node *successor = new Node(minimum(node->right));
      count ++;
      // 为这个节点赋值左右子树
      successor->right = removeMin(node->right);
      successor->left = node->left;

      delete node;
      count --;

      return successor;
    }
  }
};

int main()
{


  return 0;
}