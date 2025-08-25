const content = `Dossiê Confidencial — Arquivo Obscurus
Autor: Wilhelm Desmond Gaster

Classificação: Nível 5 — Acesso Restrito
Última atualização: 1955

1. "On the Threshold of the Veil" (Sobre o Limiar do Véu)
Ano: 1897
Status: Disponível
Sinopse: Obra inaugural de Gaster, explorando teorias sobre a existência de um "véu" que separa o plano material do paranormal. Apesar de rudimentar, é considerada a base de toda a sua pesquisa posterior.
Risco à Sanidade: Baixo
Observações: Um dos poucos livros não contestados pela comunidade científica da época, ainda que ignorado por décadas.

2. "The Quantification of the Impossible" (A Quantificação do Impossível)
Ano: 1903
Status: Restrito
Sinopse: Tentativa de traduzir fenômenos paranormais em fórmulas matemáticas. Os cálculos presentes contêm padrões impossíveis, que matemáticos modernos descrevem como "autocontraditórios e instáveis".
Risco à Sanidade: Médio
Observações: Em 1949, um recruta da Obscurus sofreu colapso psicótico após 36 horas ininterruptas analisando os diagramas.

3. "Corpus Obscura"
Ano: 1907
Status: Restrito
Sinopse: Compêndio de rituais, símbolos e teorias reunidos por Gaster. Parte do material foi coletado em vilarejos remotos da Escócia e Boêmia, envolvendo cultos hoje extintos.
Risco à Sanidade: Alto
Observações: Diversos trechos parecem não escritos por Gaster. Pesquisadores acreditam que foram "inseridos" no manuscrito por uma fonte desconhecida.

4. "Eclipse of Causality" (O Eclipse da Causalidade)
Ano: 1911
Status: Restrito
Sinopse: Um estudo sobre paradoxos temporais e as implicações do paranormal sobre a linearidade da realidade. Inclui relatos de "inversões de tempo" e lapsos de memória coletiva.
Risco à Sanidade: Alto
Observações: Testes conduzidos pela Obscurus demonstraram que leituras prolongadas induzem episódios dissociativos.

5. "Fractured Symmetry" (Simetria Fraturada)
Ano: 1913
Status: Restrito
Sinopse: Gaster apresenta padrões matemáticos que sugerem que o espaço tridimensional sofre "quebras de simetria" quando exposto a forças além do compreensível.
Risco à Sanidade: Médio
Observações: Último livro publicado antes da Primeira Guerra Mundial. Contém um diagrama que a Obscurus mantém sob sigilo máximo.

6. "Axioms of the Unseen" (Axiomas do Invisível)
Ano: 1916 (publicado enquanto Gaster já integrava a Obscurus)
Status: Restrito
Sinopse: Gaster propõe sete axiomas que regem o "Outro Lado", um plano onde tempo, espaço e identidade deixam de ser absolutos. Três desses axiomas continuam não compreendidos pela ciência.
Risco à Sanidade: Alto
Observações: As conclusões aqui influenciaram diretamente os protocolos de contenção de anomalias usados pela Obscurus até hoje.

7. "The Null Convergence" (A Convergência Nula)
Ano: 1918
Status: Perdido (última cópia desapareceu em 1942)
Sinopse: O livro descreve o "ponto de convergência" onde todas as dimensões conhecidas colapsam. A hipótese apresentada indica que a realidade pode ser instável por design.
Risco à Sanidade: Crítico
Observações: Pesquisadores relatam sintomas de desorientação temporal mesmo ao lidar com fragmentos do texto.

8. "Vesper Codex"
Ano: 1921
Status: Restrito
Sinopse: Um guia sobre entidades que "existem apenas entre os instantes" do tempo, imperceptíveis ao olho humano, mas influentes na causalidade.
Risco à Sanidade: Alto
Observações: Análise experimental feita em 1953 resultou na perda de toda a equipe de campo. O conteúdo foi selado.

9. "Pale Architecture" (Arquitetura Pálida)
Ano: 1925
Status: Restrito
Sinopse: Contém diagramas de construções impossíveis, com geometria que não pode existir no espaço tridimensional. Muitos acreditam que sejam mapas para estruturas interdimensionais.
Risco à Sanidade: Alto
Observações: Leitores expostos ao material reportam vertigem extrema e episódios de sinestesia induzida.

10. "The Hollow Operator" (O Operador Vazio)
Ano: 1928
Status: Restrito
Sinopse: Descreve uma entidade hipotética que manipula leis físicas sem nunca ser observada diretamente. Alguns acreditam que Gaster a identificou dentro da Obscurus.
Risco à Sanidade: Médio
Observações: Trechos codificados sugerem que Gaster não confiava mais na organização.

11. "The Parallax Wound" (Ferida de Paralaxe)
Ano: 1933
Status: Restrito
Sinopse: Último livro publicado antes do desaparecimento de Gaster. Ele descreve o "ponto exato onde a realidade se desdobra" e sugere que esse fenômeno pode ser induzido artificialmente.
Risco à Sanidade: Crítico
Observações: Alguns trechos parecem prever a própria morte de Gaster.

12. "The Recursive Gospel" (O Evangelho Recursivo)
Ano: 1939 (apareceu três anos após o desaparecimento de Gaster)
Status: Anômalo
Sinopse: O livro surgiu sem explicação na biblioteca da Obscurus, contendo símbolos nunca vistos, diagramas paradoxais e passagens escritas após a suposta morte de Gaster.
Risco à Sanidade: Crítico / Extremo
Observações: O texto parece reescrever partes de si mesmo quando observado. É mantido em confinamento absoluto.`;

const terminal = document.getElementById('terminal');
let index = 0;

function type() {
  if (index < content.length) {
    terminal.textContent += content.charAt(index);
    index++;
    setTimeout(type, 30);
  }
}

type();
