 /*
  Criar matriz de adjacência para uso no algoritmo de Prim
  Nota: Podemos melhorar o tempo de execução do algoritmo de prim 
  implementando uma estrutura de fila de prioridade da matriz.
*/
function createAdjMatrix(V, G) {
  
    var adjMatrix = [];
    
	// Crie uma matriz N x N  preenchida com arestas de peso 0 entre todos os vértices
    for (var i = 0; i < V; i++) { 
      adjMatrix.push([]);
      for (var j = 0; j < V; j++) { adjMatrix[i].push(0); }
    }
    
	// Popule a matriz de adjacencia com os pesos corretos das arestas
    for (var i = 0; i < G.length; i++) { 
      adjMatrix[G[i][0]][G[i][1]] = G[i][2];
      adjMatrix[G[i][1]][G[i][0]] = G[i][2];
    }
    
    return adjMatrix;
    
  }
  
  function prims(V, G) {
    
	//Crie a matriz de adjacencia do grafo
    var adjMatrix = createAdjMatrix(V, G);
    
	// Arbitrariamente escolha o vértice inicial do grafo
    var vertex = 0;
    
	// Inicialize o vetor de arestas vázias e a MST vázia
    var MST = [];
    var edges = [];
    var visited = [];
    var minEdge = [null,null,Infinity];
    
	// Execute o algoritmo de prim até criamos uma MST
	// que cotenha todos os vértices do grafo
    while (MST.length !== V-1) {
      
	  // Marque o vértice como visitado
      visited.push(vertex);
      
	  // Adicionar cada aresta da lista como potenciais arestas
      for (var r = 0; r < V; r++) {
        if (adjMatrix[vertex][r] !== 0) { 
          edges.push([vertex,r,adjMatrix[vertex][r]]); 
        }
      }
  
	  // Ache a aresta com o menor peso para a aresta
	  // que ainda não tenha sido visitada 
      for (var e = 0; e < edges.length; e++) {
        if (edges[e][2] < minEdge[2] && visited.indexOf(edges[e][1]) === -1) { 
          minEdge = edges[e]; 
        }
      }
  
	  // Remove a aresta de menor peso da lista de arestas
      edges.splice(edges.indexOf(minEdge), 1);
  
	  // Coloque a aresta minima para a MST
      MST.push(minEdge);
        
	  // Comece em um novo vértice e reinicie a aresta mínima
      vertex = minEdge[1];
      minEdge = [null,null,Infinity];
      
    }
    
    return MST;
    
  }
  
  // Grafos são representados atualmente como números
  // Por exemplo: 0, 1, 2, ... V-1
  var a = 0, b = 1, c = 2, d = 3, e = 4, f = 5;
  
  // Aresta de grafos com peso
  // diagrama do grafo é mostrado a seguir
  var graph = [
    [a,b,2],
    [a,c,3],
    [b,d,3],
    [b,c,5],
    [b,e,4],
    [c,e,4],
    [d,e,2],
    [d,f,3],
    [e,f,5]
  ];
  
  // Passe o número de vértices e o grafo para executar o algoritmo de prim
  prims(6, graph); 