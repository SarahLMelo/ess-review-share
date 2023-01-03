Feature: Login
As como um usuário
I want to entrar no sistema utilizando meu usuário e senha
So that eu possa ter acesso a minha conta e às features que necessitem de autenticação

    Scenario: Login bem-sucedido
    Given estou na página de “login” 
    And não estou logada em nenhuma conta
    And existe uma conta com o “username” “Fulaninho de Tal” e “password” “123456”
    When eu preencho o “username” com “Fulaninho de Tal”
    And eu preencho a “password” com “123456”
    Then eu sou redirecionada a página “meu perfil”

    Scenario: Login mal-sucedido: senha incorreta
    Given estou na página de “login” 
    And não estou logada em nenhuma conta
    And existe uma conta com o “username” “Fulaninho de Tal” e “password” “123456”
    When eu preencho o “username” com “Fulaninho de Tal”
    And eu preencho a “password” com “654321”
    Then eu recebo uma mensagem de erro “senha incorreta”
    And eu continuo na página de “login”

    Scenario: Login mal-sucedido: nome de usuário não cadastrado
    Given estou na página de “login” 
    And não estou logada em nenhuma conta
    And não existe uma conta com o “username” “Fulaninho de Tal” 
    When eu preencho o “username” com “Fulaninho de Tal”
    And eu preencho a “password” com “123456”
    Then eu recebo uma mensagem de erro “usuário não encontrado”
    And eu continuo na página de “login”

    Scenario: Login mal-sucedido: senha vazia
    Given estou na página de “login” 
    And não estou logada em nenhuma conta
    When eu preencho o “username” com “Fulaninho de Tal”
    And eu preencho a “password” com “”
    Then eu recebo uma mensagem de erro “senha vazia”
    And eu continuo na página de “login”

    Scenario: Login mal-sucedido: excesso de tentativas
    Given estou na página de “login” 
    And não estou logada em nenhuma conta
    And existe uma conta com o “username” “Fulaninho de Tal” e “password” “123456”
    And já tive "5" tentativas de login mal-sucedidas
    When eu preencho o “username” com “Fulaninho de Tal”
    And eu preencho a “password” com “654321”
    Then eu recebo uma mensagem de erro "excesso de tentativas, por favor tente em 30min"
    And eu vou para a página de "home"