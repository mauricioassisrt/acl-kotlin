# acl-kotlin

Versões:
Java: 17
Kotlin: 1.7.22

Passo a passo instalação do projeto:
Extrair a pasta util https://drive.google.com/file/d/1_jjLCMKMSDvtVLZE15jbqAImDBJEzCD7/view?usp=sharing
copiar os arquivos para o diretorio desejado

Configurar as variaveis de ambiente:
Criar as variaveis
Java JAVA_HOME 
Caminho C:\Program Files\Zulu\zulu-17\
Kotlin KOTLIN_HOME
Caminho C:\kotlin

Path
%JAVA_HOME%\bin
%KOTLIN_HOME%\bin
C:\maven\bin

Após realizar esses passos, rodar os comandos via cmd: 
kotlinc -version - deverá exibir a versão 1.7.22 e Java 17.0.7
java -version - deverá exibir a versão do Java 17.0.7
mvn -v - deverá exibir apache maven versão 3.9.2

Feito isso baixar importar as configurações do visual studio code
para isso clicar na engrenagem no canto inferior da tela opção perfis depois clique em importar
Caso não de certo as importações acesse o VSCode e instale as seguintes extensões 
Extension Pack for Java
Spring Boot Extension Pack
Spring Initializr Java Support
Language Support for Java(TM)
Kotlin Language
Kotlin

Agora basta abrir o projeto pelo VSCode dar clean install com o maven 

Instalar o angular e nvm
Instalar o nvm após isso rodar o comando 
nvm install 12.20.2
após isso selecionar a versão instalada
depois ir no diretorio que está o projeto do angular 
src\main\webapp\acl e rodar npm install


Para instalar o angular rodar o comando npm install -g @angular/cli@12
checar se o angular esta instalado ng -version
após isso rodar o comando npm start ou ng serve


