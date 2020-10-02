## algoritmo Prim

![Grafos](https://computerworld.com.br/wp-content/uploads/2018/12/conex%C3%B5es.jpg)

Algoritmo desenvolvido por:
- Antonio Matheus
- [Felipe Gomes](https://github.com/felipeMarajo)
- [Gustavo dos Santos](https://github.com/GussSoares)
- [Mario Evandro](https://github.com/Mario0606)

Algoritmo implementado para a disciplina de Projeto e Análise de Algoritmos.

## Descrição 
Algoritmo de Prim é um [algoritmo guloso](https://pt.wikipedia.org/wiki/Algoritmo_guloso), e é utilizado para achar a árvore geradora mínima em um grafo conectado, que tenham as caracteristicas de não ser valorado e não direcionado. Ou seja, o algoritmo encontra um subgrafo do grado original no qual a soma total das arestas é minima e todos os vértices estão interligados. 

**Pseudocódigo**

```python
Prim(g): #G é um grafo
	Ler G = (N,A) e D =[dij] a matrix distância entre os nós vizinhos de G
	Escolha qualquer vértice i E N
	T = {i}
	V = N\{i}

	Enquanto T != N Para todo j E T, Faça:
		Encontrar a menor aresta (j, k) E A tal que j E T,k E V
		T = T U {k}
		V = V\{k}
		S = S U (j,k)
	Fim Enquanto

	Escrever S (arestas da árvore geradora mínima)
Fim Prim
```