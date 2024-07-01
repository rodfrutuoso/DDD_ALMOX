# DDD_ALMOX
domaim driven design for almox

# instalações
- npm init -y
- npm i typescript @types/node -D
- npx tsc --init
- npm i vitest -D

# Casos de uso
- preciso realizar o controle dos materias que entram e saem do almoxarifado
- o controle precisa ser feito por obra
- as projetos de kit, meditor e obra precisam ser relacionados
- as movimentações de entrada e saída precisam ser feitas por material de cada projeto
- essa relação de materiais é baseado num orçamento prévio
- além dos materiais do orçamento, tem que ser possível acrescentar materiais não previstos
- é necessário aparecer a data quando aquela obra foi orçada
- os materias orçados devem ser visualizados e impressos para separação
- deve ser possível acrescentar materiais extras para separação que posteriormente será impresso
- deve ser possível visualizar as movimentações de entrada de saída de materiias
- a visualização de movimentações poderá ser filtrada por data, projeto, material ou almoxarife
- deve ser possível extrair os dados de orçamento e saída de material

# links uteis
https://expressjs.com/en/resources/middleware/cors.html 

# TODO
- create fetch storekeepers [X]
- create ID's use cases [X]
- create manut use cases and entity [ ]
- fetch physical document [X]
- fetch materials [X]
- fetch bases []
- fetch contracts []