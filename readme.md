# Estratégias de fetch e cache

### Network only
Irá consultar sempre a rede sem fazer uso do cache


### Cache only
A página irá consultar o serviceWorker, que em seguida irá retornar o cache.
Nessa estratégia o cache poderá retornar apenas assets instalados junto com o pwa
(ex: ícone, links de redes sociais). Caso o asset não seja encontrado, será 
retorna um erro.


### Network first
A requisição é feita primeiramente a Web e, caso o falhe, será consultado o dado
em cache.
sendo que esse cache não sofre atualizações após a pwa ser instalada.


### Cache first
Checamos se a informação está em cache, e caso não esteja buscamos na web.
são para arquivos que não sofrem atualizações constantes (ex: fontes).

### Cache then network
Primeiro serão exibidos dados do cache e em seguida as informações serão 
atualizadas com dados da rede.
São para dados que precisem de performance, mas possuem grande frequência
na atualização.

### Stale while revalidate
Primiero serão exibidos dados em cache e em seguida serão buscadas informações
na rede, no entando essas informações servirão apenas para atualizar o cache,
que será exibido em um futuro carregamento (ex: avatars, capa do perfil).

### Generic Fallback
Quando não existir cache e nem rede, será retornado um dado ou página genérica
que já foi armazenada anteriormente
