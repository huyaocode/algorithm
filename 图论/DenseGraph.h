#include <iostream>
#include <cassert>
#include <vector>

using namespace std;
/**
 * 稠密图
 * 邻接矩阵表示
 */
class DenseGraph
{
private:
  int spotNum;            //点数
  int edgeNum;            // 边数
  bool directed;          //是否为有向图
  vector<vector<bool>> g; //用两层vector表示图

public:
  // 构造函数
  DenseGraph(int n, bool directed)
  {
    this->spotNum = n;
    this->edgeNum = 0;
    this->directed = directed;
    //创建一个n*n的二维矩阵
    for (int i = 0; i < n; i++)
    {
      g.push_back(vector<bool>(n, false));
    }
  }
  //返回点的个数
  int V() { return spotNum; }
  //返回边的个数
  int E() { return edgeNum; }
  /**
   * 添加一条边
   */
  void addEdge(int v, int w)
  {
    assert(v >= 0 && v < spotNum);
    assert(w >= 0 && w < spotNum);

    if (hasEdge(v, w))
    {
      return;
    }
    g[v][w] = true;
    if (!directed)
    { //如果是无向图
      g[w][v] = true;
    }
    edgeNum++;
  }
  // v和w直接是否有边
  bool hasEdge(int v, int w)
  {
    assert(v >= 0 && v < spotNum);
    assert(w >= 0 && w < spotNum);
    return g[w][v];
  }
  void show(){
    for( int i = 0 ; i < spotNum; i ++ ){
        for( int j = 0 ; j < spotNum ; j ++ )
            cout<<g[i][j]<<"\t";
        cout<<endl;
    }
  }
  class adjIterator
  {
  private:
    DenseGraph &G;
    int v;
    int index;

  public:
    adjIterator(DenseGraph &graph, int v) : G(graph)
    {
      this->v = v;
      this->index = -1;
    }

    int begin()
    {
      index = -1;
      return next();
    }

    int next()
    {
      for (index += 1; index < G.V(); index++)
        if (G.g[v][index])
          return index;

      return -1;
    }

    bool end()
    {
      return index >= G.V();
    }
  };
};