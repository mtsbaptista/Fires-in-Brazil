let dados = [
    {
        titulo: "Acre",
        descricao: "O estado do Acre, na região Norte do Brasil, enfrenta graves problemas com queimadas devido ao desmatamento na Floresta Amazônica e à expansão agrícola. A estação seca amplifica a frequência e a intensidade das queimadas, que têm impactos significativos na biodiversidade e no clima. O Acre está investindo em políticas de preservação ambiental e em práticas sustentáveis para combater o desmatamento e as queimadas, além de promover campanhas de conscientização para a população local.",
        link: "https://www.icmbio.gov.br/portal/amazonia/queimadas-no-acre",
        imagem: "https://example.com/imagem-acre.jpg",
        tags: ["Floresta Amazônica", "Desmatamento", "Queimadas", "Ambiente", "Estação seca"]
    },
    {
        titulo: "Alagoas",
        descricao: "Em Alagoas, as queimadas são um problema significativo principalmente no bioma da caatinga. A combinação de secas prolongadas e o uso do fogo para limpeza de terras agrícolas exacerbam as queimadas. O estado está focado em implementar práticas de manejo sustentável e melhorar a gestão dos recursos naturais para reduzir a frequência das queimadas e proteger o ecossistema da caatinga.",
        link: "https://www.icmbio.gov.br/portal/caatinga/queimadas-em-alagoas",
        imagem: "https://example.com/imagem-alagoas.jpg",
        tags: ["Caatinga", "Seca", "Queimadas", "Uso do fogo", "Agricultura"]
    },
    {
        titulo: "Amapá",
        descricao: "O Amapá, com grande parte de seu território coberto pela Floresta Amazônica, enfrenta sérios problemas com queimadas, especialmente durante a estação seca. O desmatamento e a expansão agrícola são principais responsáveis por esses incêndios. O estado tem adotado medidas para proteger a floresta e promover práticas sustentáveis, além de intensificar a fiscalização para prevenir e combater queimadas.",
        link: "https://www.icmbio.gov.br/portal/amazonia/queimadas-no-amapa",
        imagem: "https://example.com/imagem-amapa.jpg",
        tags: ["Floresta Amazônica", "Temporada seca", "Queimadas", "Preservação", "Ambiente"]
    },
    {
        titulo: "Amazonas",
        descricao: "O Amazonas, o maior estado do Brasil, abriga grande parte da Floresta Amazônica e enfrenta desafios significativos com queimadas. A expansão agrícola e o desmatamento ilegal são fatores críticos que contribuem para os incêndios. O estado está se esforçando para implementar políticas eficazes de proteção ambiental, fortalecer a fiscalização e promover a conscientização sobre a importância da preservação da floresta.",
        link: "https://www.icmbio.gov.br/portal/amazonia/queimadas-no-amazonas",
        imagem: "https://example.com/imagem-amazonas.jpg",
        tags: ["Floresta Amazônica", "Desmatamento", "Queimadas ilegais", "Preservação", "Incêndios florestais"]
    },
    {
        titulo: "Bahia",
        descricao: "Na Bahia, as queimadas são um problema sazonal agravado pela expansão agrícola e pastorial. As práticas de manejo inadequadas e a estação seca intensificam as queimadas. O estado está investindo em técnicas de manejo sustentável, monitoramento e controle para minimizar os danos ambientais e melhorar a gestão dos recursos naturais.",
        link: "https://www.ipa.org.br/queimadas-bahia",
        imagem: "https://example.com/imagem-bahia.jpg",
        tags: ["Expansão agrícola", "Pastorial", "Queimadas sazonais", "Manejo sustentável", "Danos ambientais"]
    },
    {
        titulo: "Ceará",
        descricao: "O Ceará enfrenta queimadas principalmente no bioma da caatinga, com a seca prolongada e a expansão agrícola contribuindo para a frequência dos incêndios. O estado tem se concentrado em medidas de prevenção e monitoramento, além de promover práticas agrícolas sustentáveis e campanhas de conscientização para reduzir a ocorrência e os impactos das queimadas.",
        link: "https://www.icmbio.gov.br/portal/caatinga/queimadas-no-ceara",
        imagem: "https://example.com/imagem-ceara.jpg",
        tags: ["Caatinga", "Seca", "Expansão agrícola", "Prevenção", "Monitoramento"]
    },
    {
        titulo: "Distrito Federal",
        descricao: "O Distrito Federal, com vegetação de cerrado, sofre com queimadas durante a estação seca. As autoridades locais têm implementado práticas de manejo e controle para reduzir a frequência e a intensidade dos incêndios. Medidas de monitoramento e prevenção são essenciais para proteger o ecossistema do cerrado e minimizar os impactos ambientais das queimadas.",
        link: "https://www.icmbio.gov.br/portal/cerrado/queimadas-no-distrito-federal",
        imagem: "https://example.com/imagem-distrito-federal.jpg",
        tags: ["Cerrado", "Estação seca", "Queimadas", "Manejo", "Controle de incêndios"]
    },
    {
        titulo: "Espírito Santo",
        descricao: "No Espírito Santo, as queimadas ocorrem principalmente nas áreas de mata atlântica e cerrado. O estado enfrenta desafios com a expansão agrícola e a necessidade de campanhas de conscientização e controle das queimadas. O Espírito Santo está trabalhando em estratégias para promover a preservação ambiental e o controle de incêndios, com foco em proteger a biodiversidade e os recursos naturais.",
        link: "https://www.icmbio.gov.br/portal/mata-atlantica/queimadas-no-espirito-santo",
        imagem: "https://example.com/imagem-espirito-santo.jpg",
        tags: ["Mata Atlântica", "Cerrado", "Conscientização", "Controle de queimadas", "Preservação"]
    },
    {
        titulo: "Goiás",
        descricao: "Goiás enfrenta queimadas frequentes, especialmente no bioma cerrado. A combinação de estação seca e práticas agrícolas inadequadas contribui para os incêndios. O estado está se dedicando à educação ambiental, controle de queimadas e implementação de técnicas de manejo sustentável para reduzir a frequência e os impactos dos incêndios. Medidas de prevenção e fiscalização são essenciais para proteger o ecossistema do cerrado.",
        link: "https://www.icmbio.gov.br/portal/cerrado/queimadas-no-goias",
        imagem: "https://example.com/imagem-goias.jpg",
        tags: ["Cerrado", "Queimadas frequentes", "Educação ambiental", "Controle", "Impactos"]
    },
    {
        titulo: "Maranhão",
        descricao: "O Maranhão enfrenta queimadas que afetam tanto a Amazônia quanto o cerrado. O desmatamento e o uso do fogo para manejo agrícola são principais causas desses incêndios. O estado está trabalhando para combater o desmatamento, promover práticas agrícolas sustentáveis e fortalecer a proteção das áreas afetadas para reduzir os impactos das queimadas.",
        link: "https://www.icmbio.gov.br/portal/amazonia/queimadas-no-maranhao",
        imagem: "https://example.com/imagem-maranhao.jpg",
        tags: ["Amazônia", "Cerrado", "Desmatamento", "Uso de fogo", "Manejo agrícola"]
    },
    {
        titulo: "Mato Grosso",
        descricao: "Mato Grosso, um dos estados com maiores áreas de cerrado e floresta amazônica, enfrenta incêndios florestais recorrentes, particularmente durante a estação seca. O desmatamento e a expansão agrícola são fatores principais que contribuem para as queimadas. O estado está investindo em políticas de controle e prevenção, além de promover a agricultura sustentável e a recuperação de áreas desmatadas para enfrentar esse desafio.",
        link: "https://www.icmbio.gov.br/portal/amazonia/queimadas-no-mato-grosso",
        imagem: "https://example.com/imagem-mato-grosso.jpg",
        tags: ["Cerrado", "Floresta Amazônica", "Incêndios recorrentes", "Estação seca", "Agricultura sustentável"]
    },
    {
        titulo: "Mato Grosso do Sul",
        descricao: "Mato Grosso do Sul enfrenta problemas com queimadas principalmente nas áreas de cerrado e pantanal. A combinação de seca e atividades agrícolas contribui para os incêndios. O estado está implementando estratégias para controlar as queimadas, proteger o pantanal e promover práticas de manejo sustentável para minimizar os impactos ambientais.",
        link: "https://www.icmbio.gov.br/portal/cerrado/queimadas-no-mato-grosso-do-sul",
        imagem: "https://example.com/imagem-mato-grosso-do-sul.jpg",
        tags: ["Cerrado", "Pantanal", "Seca", "Atividades agrícolas", "Queimadas"]
    },
    {
        titulo: "Minas Gerais",
        descricao: "Minas Gerais, com sua diversidade de biomas, incluindo cerrado e mata atlântica, enfrenta queimadas que são mais intensas durante a estação seca. O estado está focado em estratégias de prevenção e controle para lidar com as queimadas, além de promover a educação e conscientização sobre práticas de manejo sustentável para proteger os recursos naturais e a biodiversidade.",
        link: "https://www.icmbio.gov.br/portal/mata-atlantica/queimadas-em-minas-gerais",
        imagem: "https://example.com/imagem-minas-gerais.jpg",
        tags: ["Cerrado", "Mata Atlântica", "Estação seca", "Prevenção", "Controle"]
    },
    {
        titulo: "Pará",
        descricao: "O Pará, com vastas áreas da Floresta Amazônica, enfrenta problemas graves com queimadas, frequentemente associadas ao desmatamento para expansão agrícola. O estado está trabalhando para reforçar a fiscalização, promover a proteção ambiental e adotar práticas de manejo sustentável para reduzir as queimadas e proteger a rica biodiversidade da Amazônia.",
        link: "https://www.icmbio.gov.br/portal/amazonia/queimadas-no-para",
        imagem: "https://example.com/imagem-para.jpg",
        tags: ["Floresta Amazônica", "Desmatamento", "Queimadas", "Proteção ambiental", "Manejo sustentável"]
    },
    {
        titulo: "Paraíba",
        descricao: "Na Paraíba, as queimadas são um problema significativo no bioma da caatinga, exacerbadas por secas prolongadas e práticas agrícolas inadequadas. O estado está buscando implementar estratégias de manejo sustentável e melhorar o controle de queimadas para proteger o ecossistema da caatinga e minimizar os impactos ambientais.",
        link: "https://www.icmbio.gov.br/portal/caatinga/queimadas-na-paraiba",
        imagem: "https://example.com/imagem-paraiba.jpg",
        tags: ["Caatinga", "Seca", "Queimadas", "Manejo sustentável", "Controle"]
    },
    {
        titulo: "Paraná",
        descricao: "O Paraná enfrenta queimadas principalmente nas áreas de mata atlântica e campos. A expansão agrícola e o desmatamento são fatores que intensificam as queimadas no estado. O Paraná está investindo em políticas de controle e prevenção, além de promover a recuperação ambiental e a gestão sustentável dos recursos naturais para proteger seus ecossistemas.",
        link: "https://www.icmbio.gov.br/portal/mata-atlantica/queimadas-no-parana",
        imagem: "https://example.com/imagem-parana.jpg",
        tags: ["Mata Atlântica", "Campos", "Desmatamento", "Expansão agrícola", "Recuperação ambiental"]
    },
    {
        titulo: "Pernambuco",
        descricao: "Em Pernambuco, as queimadas são um problema que afeta principalmente áreas de caatinga e mata atlântica. A combinação de secas e práticas de manejo inadequadas contribui para a ocorrência de incêndios. O estado está promovendo iniciativas para controlar as queimadas e proteger suas áreas de vegetação nativa, além de incentivar práticas agrícolas sustentáveis.",
        link: "https://www.icmbio.gov.br/portal/mata-atlantica/queimadas-em-pernambuco",
        imagem: "https://example.com/imagem-pernambuco.jpg",
        tags: ["Caatinga", "Mata Atlântica", "Seca", "Controle de queimadas", "Práticas sustentáveis"]
    },
    {
        titulo: "Piauí",
        descricao: "O Piauí, localizado na região Nordeste do Brasil, enfrenta problemas com queimadas principalmente no bioma da caatinga. As secas e a expansão agrícola contribuem para a frequência das queimadas. O estado está trabalhando em estratégias de manejo sustentável e controle de queimadas para reduzir os impactos ambientais e proteger o ecossistema local.",
        link: "https://www.icmbio.gov.br/portal/caatinga/queimadas-no-piaui",
        imagem: "https://example.com/imagem-piaui.jpg",
        tags: ["Caatinga", "Seca", "Expansão agrícola", "Controle de queimadas", "Manejo sustentável"]
    },
    {
        titulo: "Rio de Janeiro",
        descricao: "No Rio de Janeiro, as queimadas afetam principalmente áreas de mata atlântica e campos. A estação seca e as práticas agrícolas inadequadas são fatores que contribuem para os incêndios. O estado está focado em estratégias de controle e prevenção, além de promover a proteção ambiental e a recuperação das áreas afetadas.",
        link: "https://www.icmbio.gov.br/portal/mata-atlantica/queimadas-no-rio-de-janeiro",
        imagem: "https://example.com/imagem-rio-de-janeiro.jpg",
        tags: ["Mata Atlântica", "Campos", "Estação seca", "Controle de queimadas", "Proteção ambiental"]
    },
    {
        titulo: "Rio Grande do Norte",
        descricao: "O Rio Grande do Norte enfrenta queimadas principalmente no bioma da caatinga. As secas prolongadas e o uso do fogo para limpeza de terras agrícolas intensificam as queimadas. O estado está trabalhando em medidas para controlar as queimadas e proteger seus ecossistemas, promovendo práticas agrícolas sustentáveis e melhorando a gestão dos recursos naturais.",
        link: "https://www.icmbio.gov.br/portal/caatinga/queimadas-no-rio-grande-do-norte",
        imagem: "https://example.com/imagem-rio-grande-do-norte.jpg",
        tags: ["Caatinga", "Seca", "Queimadas", "Manejo sustentável", "Gestão dos recursos naturais"]
    },
    {
        titulo: "Rio Grande do Sul",
        descricao: "O Rio Grande do Sul enfrenta queimadas principalmente nas áreas de campos e mata atlântica. As queimadas são exacerbadas pela expansão agrícola e a estação seca. O estado está investindo em estratégias de controle e prevenção, além de promover a educação ambiental e o manejo sustentável para reduzir os impactos das queimadas e proteger seus ecossistemas.",
        link: "https://www.icmbio.gov.br/portal/mata-atlantica/queimadas-no-rio-grande-do-sul",
        imagem: "https://example.com/imagem-rio-grande-do-sul.jpg",
        tags: ["Campos", "Mata Atlântica", "Estação seca", "Educação ambiental", "Controle de queimadas"]
    },
    {
        titulo: "Rondônia",
        descricao: "Rondônia, situado na região Norte do Brasil, enfrenta problemas com queimadas devido ao desmatamento e à expansão agrícola na Floresta Amazônica. O estado está implementando medidas de proteção ambiental e controle de queimadas, além de promover práticas de manejo sustentável para proteger a biodiversidade e os recursos naturais da Amazônia.",
        link: "https://www.icmbio.gov.br/portal/amazonia/queimadas-em-rondonia",
        imagem: "https://example.com/imagem-rondonia.jpg",
        tags: ["Floresta Amazônica", "Desmatamento", "Queimadas", "Proteção ambiental", "Manejo sustentável"]
    },
    {
        titulo: "Roraima",
        descricao: "Roraima, com grande parte de seu território coberto pela Floresta Amazônica, enfrenta sérios problemas com queimadas, especialmente associadas ao desmatamento e à expansão agrícola. O estado está trabalhando em políticas para proteger a floresta e reduzir a ocorrência de queimadas, promovendo práticas sustentáveis e reforçando a fiscalização.",
        link: "https://www.icmbio.gov.br/portal/amazonia/queimadas-em-roraima",
        imagem: "https://example.com/imagem-roraima.jpg",
        tags: ["Floresta Amazônica", "Desmatamento", "Queimadas", "Proteção ambiental", "Fiscalização"]
    },
    {
        titulo: "Santa Catarina",
        descricao: "Santa Catarina enfrenta queimadas principalmente nas áreas de campos e mata atlântica. As queimadas são exacerbadas por práticas agrícolas e pela estação seca. O estado está investindo em estratégias de controle, educação ambiental e manejo sustentável para reduzir os impactos das queimadas e proteger a biodiversidade local.",
        link: "https://www.icmbio.gov.br/portal/mata-atlantica/queimadas-em-santa-catarina",
        imagem: "https://example.com/imagem-santa-catarina.jpg",
        tags: ["Campos", "Mata Atlântica", "Estação seca", "Educação ambiental", "Controle de queimadas"]
    },
    {
        titulo: "São Paulo",
        descricao: "São Paulo enfrenta queimadas principalmente nas áreas de mata atlântica e cerrado. A expansão agrícola e as práticas inadequadas contribuem para a frequência das queimadas. O estado está investindo em políticas de controle e prevenção, além de promover a recuperação de áreas degradadas e a gestão sustentável dos recursos naturais.",
        link: "https://www.icmbio.gov.br/portal/mata-atlantica/queimadas-em-sao-paulo",
        imagem: "https://example.com/imagem-sao-paulo.jpg",
        tags: ["Mata Atlântica", "Cerrado", "Expansão agrícola", "Controle de queimadas", "Recuperação ambiental"]
    },
    {
        titulo: "Sergipe",
        descricao: "Sergipe enfrenta queimadas no bioma da caatinga e áreas adjacentes. As queimadas são exacerbadas por secas prolongadas e práticas inadequadas de manejo do fogo. O estado está implementando estratégias para melhorar o controle de queimadas e promover práticas agrícolas sustentáveis para proteger seus ecossistemas e minimizar os danos ambientais.",
        link: "https://www.icmbio.gov.br/portal/caatinga/queimadas-em-sergipe",
        imagem: "https://example.com/imagem-sergipe.jpg",
        tags: ["Caatinga", "Seca", "Queimadas", "Manejo sustentável", "Controle"]
    },
    {
        titulo: "Tocantins",
        descricao: "Tocantins enfrenta problemas com queimadas, principalmente nas áreas de cerrado e floresta amazônica. A estação seca e a expansão agrícola são fatores críticos que contribuem para os incêndios. O estado está focado em estratégias de controle e prevenção, além de promover a gestão sustentável dos recursos naturais e a proteção dos ecossistemas locais.",
        link: "https://www.icmbio.gov.br/portal/cerrado/queimadas-em-tocantins",
        imagem: "https://example.com/imagem-tocantins.jpg",
        tags: ["Cerrado", "Floresta Amazônica", "Estação seca", "Controle de queimadas", "Gestão sustentável"]
    }
];
