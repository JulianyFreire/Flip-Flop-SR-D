<h1>Flip FLop SR e D</h1>
  Projeto desenvoldido na matéria de Sistemas Digitais para demonstrar e simular funcionamento dos Flip Flops SR e D

<h2>O que são Flip Flops?</h2>
  Os flip-flops são componentes fundamentais em sistemas digitais, agindo como dispositivos de armazenamento de 1 bit. Eles são usados para controlar estados lógicos, sincronizar operações e implementar memória temporária. Entre os tipos mais comuns estão os flip-flops S-R (Set-Reset) e D (Data), que podem operar de forma síncrona (controlados por clock) ou assíncrona (sem dependência direta de clock).

<h2>Flip Flop SR</h2>
O flip-flop S-R é um circuito que armazena 1 bit, permitindo definir (Set) ou resetar (Reset) seu estado. Existem duas versões:
<h3>Assíncrono</h3>
<ul>
  <li>Entradas S (Set) e R (Reset) atuam imediatamente, sem clock.</li>
  <li>S=1 define Q=1; R=1 reseta Q=0</li>
  <li>S=R=1 causa condição inválida (metaestabilidade), gerando estados imprevisíveis</li>
  <li>Saídas Q e Q̅ são complementares</li>
  <li>Usado em circuitos simples, como chaveamento manual, mas menos confiável em sistemas complexos.</li>
</ul>
<h3>Síncrono</h3>
<ul>
  <li>Opera com clock (ex: borda de subida), sincronizando as entradas S e R</li>
  <li>
    Durante o pulso de clock:
    <ul>
      <li>S=1/R=0 → Q=1; S=0/R=1 → Q=0</li>
      <li>S=R=0 mantém o estado; S=R=1 ainda é inválido</li>
    </ul>
  </li>
  <li>Elimina glitches e oferece controle preciso em sistemas sequenciais (ex: registradores)</li>
</ul>

<h2>Flip Flop D</h2>
Flip-flop D resolve o problema de estados inválidos do S-R, armazenando o valor da entrada D durante transições de clock
<h3>Assíncrono</h3>
<ul>
  <li>
    Entradas adicionais:
    <ul>
      <li>PRESET (PRE): força Q=1 imediatamente (independe do clock).</li>
      <li>CLEAR (CLR): reseta Q=0 imediatamente (independe do clock)</li>
    </ul>
  </li>
  <li>Prioridade: PRE e CLR têm precedência sobre o clock</li>
  <li>Uso: inicialização de circuitos ou recuperação de estados em emergências</li>
</ul>
<h3>Síncrono</h3>
<ul>
  <li>Entrada única (D): elimina conflitos como S=R=1 do S-R</li>
  <li>
    Funcionamento sincronizado:
    <ul>
      <li>O valor de D é transferido para Q apenas em bordas do clock (ex: borda de subida)</li>
      <li>Exemplo: D=1 → Q=1; D=0 → Q=0</li>
    </ul>
 <li>
    Tempos críticos:
    <ul>
      <li>Setup: D deve estar estável antes do clock</li>
      <li>Hold: D deve manter-se estável após o clock</li>
    </ul>
  <li>Aplicações: registradores, pipelines e sistemas síncronos de transferência de dados</li>
</ul>

<h2>Registrador de 4 bits</h2>
Um registrador de 4 bits é um circuito sequencial utilizado para armazenar temporariamente 4 bits de informação (valores binários: 0 ou 1). Sua estrutura básica consiste em quatro flip-flops do tipo D conectados em paralelo, operando de forma sincronizada por um sinal de clock.
<ul>
  <li>Cada flip-flop D possui uma entrada D (Data) e uma saída Q</li>
  <li>Coletivamente, o registrador tem 4 entradas (D₀ a D₃) para receber os bits e 4 saídas (Q₀ a Q₃) para disponibilizar os dados armazena</li>
</ul>
  
<h2>FLuxograma do projeto</h2>
<img width="1856" alt="Fluxograma" src="https://github.com/user-attachments/assets/40804591-5873-451a-aaf2-0b305a2eca82" />
