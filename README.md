### Testes de carga e performance

Para subir os serviços:
```bash
    docker-compose build
    docker-compose --compatibility up -d
```
Para parar
```bash
    docker-compose down
```

Para executar os testes Postman com k6
> Esperado ter a ferramenta postman-to-k6 instalada https://github.com/loadimpact/postman-to-k6
> Também a ferramenta k6 https://k6.io/docs/getting-started/installation

```bash
# Gerando testes para k6

# Testes de V1
postman-to-k6 Postman-Teste-V1.json -o k6-v1-script.js

# Testes de V2
postman-to-k6 Postman-Teste-V2.json -o k6-v2-script.js

# Executando os testes - mais info em https://k6.io/docs/getting-started/running-k6
k6 run --vus 10 --duration 30s k6-v1-script.js

```

Para remover tudo
```bash
    docker-compose rm
```