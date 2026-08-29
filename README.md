# proj-matriz

Projeto simples em JavaScript puro (vanilla JS) para estudar **transformações geométricas 2D** — translação e rotação — através de multiplicação de matrizes, aplicadas a um elemento visual na tela.

## 🎯 Objetivo

Este projeto foi criado como exercício prático para entender, na prática, como transformações geométricas (translação e rotação) funcionam matematicamente através de matrizes, e como aplicá-las a um elemento HTML.

## 🕹️ Como usar

Abra o `index.html` no navegador e use o teclado:

| Tecla | Ação |
|-------|------|
| `1`   | Alterna o quadrado entre a posição inicial e uma posição transladada (translação via matriz) |
| `2`   | Alterna o quadrado entre 0° e 90° de rotação (rotação via CSS `transform`) |

## 🧠 Conceitos aplicados

- **Translação**: calculada manualmente através de multiplicação de matriz de transformação homogênea (3x3) por um vetor de posição, aplicada ao elemento via `left`/`top`.
- **Rotação**: o ângulo é calculado em radianos e aplicado diretamente via `transform: rotate()` do CSS, que lida internamente com a rotação em torno do centro do elemento (`transform-origin: center`).

## 📁 Estrutura do projeto

```
proj-matriz/
├── index.html              # Estrutura da página
├── sytale.css               # Estilos do quadrado e da página
├── translação.js            # Lógica de translação via matriz
├── rotação.js                # Cálculo do ângulo de rotação
└── movimentaçãoQuadrado.js  # Escuta de eventos de teclado e aplica as transformações
```

## 🛠️ Tecnologias

- HTML5
- CSS3
- JavaScript (ES Modules)

## 📌 Observações

- O projeto usa **ES Modules** (`import`/`export`), então precisa ser servido por um servidor local (ex: Live Server) — abrir o `index.html` diretamente via `file://` pode não funcionar em alguns navegadores.
- Por padrão, o `.quadrado` tem largura e altura iguais (100px x 100px). Como resultado, a rotação de 90° não é visualmente perceptível nesse formato (um quadrado girado 90° parece idêntico). Para visualizar a rotação claramente, experimente alterar temporariamente o CSS para um retângulo (ex: `width: 150px; height: 80px;`).

## 🚧 Próximos passos (ideias)

- [ ] Combinar translação e rotação simultaneamente
- [ ] Adicionar escala (scale) como terceira transformação
- [ ] Permitir ajustar o ângulo de rotação dinamicamente
- [ ] Exibir a matriz resultante na tela em tempo real
-
